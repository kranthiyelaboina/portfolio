import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import BentoGrid from './components/BentoGrid'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Personal from './components/Personal'
import PageTransition from './components/PageTransition'
import LoadingBar from './components/LoadingBar'
import Achievements from './components/Achievements'
import DomeGallery from './components/DomeGallery'

function Professional() {
  return (
    <>
      <Hero />
      <Education />
      <BentoGrid />
      <Projects />
      <Experience />
      <div id="achievements">
        <Achievements />
      </div>
      
      {/* Gallery Section */}
      <div id="gallery" className="py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white px-4">
          Photo <span className="text-accent">Gallery</span>
        </h2>
        <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-6 sm:mb-10 text-sm sm:text-base px-4">
          Drag to explore • Click to enlarge
        </p>
        <div className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px]">
          <DomeGallery 
            fit={1}
            overlayBlurColor="#0a0a0f"
            grayscale={false}
          />
        </div>
      </div>
      
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <LoadingBar />
      <PageTransition>
        <main className="relative bg-primary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Professional />} />
              <Route path="/professional" element={<Professional />} />
              <Route path="/personal" element={<Personal />} />
            </Routes>
          </div>
        </main>
      </PageTransition>
    </Router>
  )
}

export default App
