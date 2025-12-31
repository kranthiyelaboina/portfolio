import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

// Arc data for connections
const sampleArcs = [
  { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1 },
  { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2 },
  { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2 },
  { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3 },
  { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3 },
  { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3 },
  { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5 },
  { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7 },
  { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3 },
  { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1 },
  { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1 },
  { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2 },
];

const colors = ['#06b6d4', '#3b82f6', '#6366f1'];

// Convert lat/lng to 3D coordinates
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

// Create arc curve between two points
function createArc(start, end, altitude) {
  const startVec = latLngToVector3(start.lat, start.lng, 1);
  const endVec = latLngToVector3(end.lat, end.lng, 1);
  
  const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
  midPoint.normalize().multiplyScalar(1 + altitude);
  
  const curve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec);
  return curve;
}

// Animated Arc Component
const Arc = ({ arc, index }) => {
  const ref = useRef();
  const [progress, setProgress] = useState(0);
  const color = colors[index % colors.length];
  
  const curve = createArc(
    { lat: arc.startLat, lng: arc.startLng },
    { lat: arc.endLat, lng: arc.endLng },
    arc.arcAlt
  );
  
  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const newProgress = ((time * 0.3 + arc.order * 0.5) % 2);
    setProgress(newProgress);
  });
  
  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.6} linewidth={2} />
    </line>
  );
};

// Point on globe
const GlobePoint = ({ lat, lng, radius = 1.01 }) => {
  const position = latLngToVector3(lat, lng, radius);
  
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#00ff99" />
    </mesh>
  );
};

// Main Globe Mesh
const GlobeMesh = ({ globeConfig }) => {
  const globeRef = useRef();
  
  useFrame(() => {
    if (globeRef.current && globeConfig.autoRotate) {
      globeRef.current.rotation.y += globeConfig.autoRotateSpeed * 0.01;
    }
  });
  
  return (
    <group ref={globeRef}>
      {/* Main globe */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color={globeConfig.globeColor}
          roughness={1 - globeConfig.shininess}
          metalness={0.1}
          emissive={globeConfig.emissive}
          emissiveIntensity={globeConfig.emissiveIntensity}
        />
      </mesh>
      
      {/* Wireframe overlay for continents effect */}
      <mesh>
        <sphereGeometry args={[1.005, 48, 48]} />
        <meshBasicMaterial 
          color={globeConfig.polygonColor}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Atmosphere */}
      {globeConfig.showAtmosphere && (
        <mesh scale={1 + globeConfig.atmosphereAltitude}>
          <sphereGeometry args={[1, 64, 64]} />
          <shaderMaterial
            vertexShader={`
              varying vec3 vNormal;
              void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              varying vec3 vNormal;
              void main() {
                float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0) * intensity * 0.3;
              }
            `}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
            transparent
          />
        </mesh>
      )}
      
      {/* Arcs */}
      {sampleArcs.map((arc, i) => (
        <Arc key={i} arc={arc} index={i} />
      ))}
      
      {/* Points at arc endpoints */}
      {sampleArcs.slice(0, 6).map((arc, i) => (
        <group key={i}>
          <GlobePoint lat={arc.startLat} lng={arc.startLng} />
          <GlobePoint lat={arc.endLat} lng={arc.endLng} />
        </group>
      ))}
      
      {/* Rings */}
      {[...Array(globeConfig.rings)].map((_, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, i * 0.5]}>
          <ringGeometry args={[1.3 + i * 0.15, 1.32 + i * 0.15, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
};

// Scene setup
const Scene = ({ globeConfig }) => {
  return (
    <>
      <ambientLight intensity={0.5} color={globeConfig.ambientLight} />
      <directionalLight position={[-5, 3, 5]} intensity={0.8} color={globeConfig.directionalLeftLight} />
      <directionalLight position={[0, 5, 0]} intensity={0.5} color={globeConfig.directionalTopLight} />
      <pointLight position={[5, 0, 5]} intensity={0.6} color={globeConfig.pointLight} />
      <GlobeMesh globeConfig={globeConfig} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </>
  );
};

// Export the World component
export const World = ({ globeConfig }) => {
  const defaultConfig = {
    pointSize: 4,
    globeColor: '#062056',
    showAtmosphere: true,
    atmosphereColor: '#FFFFFF',
    atmosphereAltitude: 0.1,
    emissive: '#062056',
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: 'rgba(255,255,255,0.7)',
    ambientLight: '#38bdf8',
    directionalLeftLight: '#ffffff',
    directionalTopLight: '#ffffff',
    pointLight: '#ffffff',
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    ...globeConfig,
  };

  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
      <Scene globeConfig={defaultConfig} />
    </Canvas>
  );
};

export default World;
