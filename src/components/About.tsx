import { motion } from 'framer-motion'
import { Cpu, Zap, Target, Award, BookOpen, Bot } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Bot,
      title: "FRC Robotics",
      description: "Designing and building mechanical subsystems for competitive robotics competitions."
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Creating educational tools and mobile applications using modern web technologies."
    },
    {
      icon: Zap,
      title: "Mechanical Design",
      description: "Using CAD software to design and prototype mechanical systems and components."
    },
    {
      icon: Target,
      title: "Project Management",
      description: "Leading teams and managing complex engineering projects from concept to completion."
    }
  ]

  const achievements = [
    { number: "3+", label: "Years FRC Experience" },
    { number: "10+", label: "Projects Completed" },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-robotic-black/30 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-robotic-gray/20 to-transparent"></div>
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
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-robotic-yellow mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Building the Future, One Robot at a Time
            </h3>
            
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                I'm a rising senior at Lynbrook High School with a passion for robotics, engineering, 
                and technology. My journey in engineering started with FRC robotics and has evolved into 
                building innovative software tools and mechanical subsystems that solve real-world problems.
              </p>
              
              <p>
                As a member of FRC Team 846 The Funky Monkeys, I've had the incredible opportunity to 
                design and build the algae harvester subsystem for our 2025 robot. This hands-on experience 
                has taught me the importance of teamwork, problem-solving, and attention to detail in 
                engineering projects.
              </p>
              
              <p>
                I believe that engineering is not just about building things, but about creating solutions 
                that enhance human capabilities and solve real-world problems. Every project I undertake is 
                an opportunity to learn, innovate, and contribute to the advancement of technology.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-robotic-gray/30 rounded-lg border border-robotic-yellow/20"
                >
                  <div className="text-3xl font-bold text-robotic-yellow mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-white/70">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="robotic-card group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-robotic-yellow/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-robotic-yellow/30 transition-colors">
                    <Icon className="text-robotic-yellow" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-robotic-yellow transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Education & Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="gradient-text">Education</span> & Experience
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="robotic-card">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="text-robotic-yellow" size={24} />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-robotic-yellow pl-4">
                  <div className="text-robotic-yellow font-semibold">2022 - 2026</div>
                  <div className="text-white font-medium">High School</div>
                  <div className="text-white/70">Lynbrook High School, CA</div>
                </div>
                <div className="border-l-2 border-robotic-yellow pl-4">
                  <div className="text-robotic-yellow font-semibold">2023 - 2026</div>
                  <div className="text-white font-medium">Advanced Engineering Courses</div>
                  <div className="text-white/70">AP Physics, AP Computer Science(s), AP Calculus BC, AP Statistics</div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="robotic-card">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="text-robotic-yellow" size={24} />
                <h4 className="text-xl font-semibold text-white">Experience</h4>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-robotic-yellow pl-4">
                  <div className="text-robotic-yellow font-semibold">2022 - Present</div>
                  <div className="text-white font-medium">FRC Team 846</div>
                  <div className="text-white/70">Member ➝ Electrical Lead/Subsystem Designer/Robot Driver ➝ President/Robot Driver</div>
                </div>
                <div className="border-l-2 border-robotic-yellow pl-4">
                  <div className="text-robotic-yellow font-semibold">2020 - Present</div>
                  <div className="text-white font-medium">Independent Developer</div>
                  <div className="text-white/70">Building Web Applications & Software Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
