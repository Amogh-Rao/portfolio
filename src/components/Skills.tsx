import { motion } from 'framer-motion'
import { Code, Cpu, Settings, Bot } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Hardware & Electronics",
      skills: [
        "Arduino", "Raspberry Pi", "Circuit Design", "Motor Control"
      ]
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        "Python", "JavaScript", "React", "Java", "HTML/CSS"
      ]
    },
    {
      icon: Bot,
      title: "Robotics",
      skills: [
        "Robot Design", "Mechanical Systems", "Team Collaboration", "Competition Strategy"
      ]
    },
    {
      icon: Settings,
      title: "Engineering Tools",
      skills: [
        "Autodesk Inventor", "3D Printing", "Git", "CAD Design", "Prototyping"
      ]
    }
  ]


  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-robotic-gray/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A focused toolkit of robotics, engineering, and software development skills 
            that I'm developing through FRC robotics, personal projects, and continuous learning.
          </p>
          <div className="w-24 h-1 bg-robotic-yellow mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="robotic-card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-robotic-yellow/20 rounded-lg flex items-center justify-center">
                    <Icon className="text-robotic-yellow" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 bg-robotic-yellow/10 border border-robotic-yellow/30 rounded-lg text-robotic-yellow hover:bg-robotic-yellow hover:text-robotic-black transition-all duration-300 cursor-pointer text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
