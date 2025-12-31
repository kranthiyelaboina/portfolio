import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Terminal, Palette, Server } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "💛" },
        { name: "C#", icon: "🔷" },
        { name: "TypeScript", icon: "💙" },
        { name: "SQL", icon: "📊" },
      ]
    },
    {
      title: "Frontend",
      icon: <Palette size={24} />,
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind", icon: "🌊" },
        { name: "Framer", icon: "✨" },
      ]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", icon: "💚" },
        { name: "Flask", icon: "🌶️" },
        { name: "Express", icon: "🚂" },
        { name: "REST API", icon: "🔌" },
        { name: "GraphQL", icon: "◈" },
        { name: ".NET", icon: "🟣" },
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "SQLite", icon: "📁" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Firebase", icon: "🔥" },
        { name: "Redis", icon: "⚡" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Azure", icon: "🔵" },
        { name: "Docker", icon: "🐳" },
        { name: "Git", icon: "📦" },
        { name: "Linux", icon: "🐧" },
        { name: "CI/CD", icon: "🔄" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Terminal size={24} />,
      skills: [
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎭" },
        { name: "Postman", icon: "📬" },
        { name: "WebXR", icon: "🥽" },
        { name: "Three.js", icon: "🎮" },
        { name: "Jira", icon: "📋" },
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Code2 className="accent-text" size={28} />
          <h2>Tech Stack</h2>
          <div className="accent-line"></div>
        </motion.div>

        <motion.div 
          className="skills-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              className="skill-category glass-card-static"
              variants={itemVariants}
            >
              <div className="category-header">
                <span className="category-icon accent-text">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: 'rgba(0, 255, 153, 0.5)',
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
