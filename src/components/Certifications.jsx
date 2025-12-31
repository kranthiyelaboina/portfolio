import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-XXXXX",
      skills: ["Cloud Fundamentals", "AWS Services", "Security", "Architecture"],
      icon: "☁️",
      color: "#FF9900",
      link: "#"
    },
    {
      title: "Oracle Multicloud Architect Professional",
      issuer: "Oracle",
      date: "2024",
      credentialId: "OCI-MCA-XXXXX",
      skills: ["Multi-Cloud Strategy", "Oracle Cloud", "Enterprise Architecture"],
      icon: "🔴",
      color: "#C74634",
      link: "#"
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-SA-XXXXX",
      skills: ["System Design", "AWS Architecture", "High Availability", "Cost Optimization"],
      icon: "🏗️",
      color: "#232F3E",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Award className="accent-text" size={28} />
          <h2>Certifications</h2>
          <div className="accent-line"></div>
        </motion.div>

        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className="certification-card glass-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${cert.color}20`
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="cert-icon"
                style={{ background: `${cert.color}20`, color: cert.color }}
              >
                <span>{cert.icon}</span>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>

                <div className="cert-meta">
                  <span className="cert-date">
                    <Calendar size={14} />
                    {cert.date}
                  </span>
                  <span className="cert-verified">
                    <CheckCircle size={14} />
                    Verified
                  </span>
                </div>

                <div className="cert-skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="cert-skill-tag">{skill}</span>
                  ))}
                </div>

                <a 
                  href={cert.link} 
                  className="cert-link btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={14} />
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
