import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Code, Cpu, Brain, Zap } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  demoUrl?: string
  featured: boolean
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "FRC Monkey",
      description: "Interactive educational platform for learning FRC robotics concepts and electrical systems",
      longDescription: "FRC Monkey is a comprehensive educational platform designed to make learning FRC robotics concepts engaging and interactive. The tool provides hands-on experience with electrical systems, programming concepts, and FRC-specific software through interactive simulations and guided tutorials. Built with modern web technologies, it helps students and teams understand complex robotics concepts in a practical, visual way. The platform features interactive demos, step-by-step tutorials, and real-world examples that bridge the gap between theory and practical application in competitive robotics.",
      image: "/frcmonkey-screenshot.png",
      category: "education",
      technologies: ["React", "JavaScript", "HTML/CSS", "FRC Software", "Electrical Concepts", "Interactive Learning"],
      githubUrl: "https://github.com",
      liveUrl: "https://frcmonkey.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "Swara",
      description: "Music app for filtering songs based on deity, ragam, talam, and other cultural filters",
      longDescription: "Swara is a cultural music application that allows users to upload their song collections and filter music based on traditional Indian musical parameters like deity, ragam (melodic framework), and talam (rhythmic cycle). The app helps preserve and organize cultural music while making it easily discoverable for users interested in specific musical traditions.",
      image: "/api/placeholder/400/300",
      category: "mobile-app",
      technologies: ["React Native", "JavaScript", "Music APIs", "Cultural Music", "Filtering System"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Algae Harvester Subsystem",
      description: "Mechanical subsystem for 2025 FRC Robot - Team 846 The Funky Monkeys",
      longDescription: "Designed and built a complete mechanical subsystem for the 2025 FRC competition robot. The algae harvester subsystem demonstrates advanced mechanical engineering principles including gear design, material selection, and integration with the main robot control system. This project showcases hands-on engineering skills and teamwork in a competitive robotics environment.",
      image: "/api/placeholder/400/300",
      category: "robotics",
      technologies: ["Autodesk Inventor", "Mechanical Design", "FRC Robotics", "Gear Systems", "Team Collaboration"],
      githubUrl: "https://github.com",
      featured: true
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'education', label: 'Education', icon: Brain },
    { id: 'mobile-app', label: 'Mobile App', icon: Zap },
    { id: 'robotics', label: 'Robotics', icon: Cpu }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my robotics and engineering projects, demonstrating innovation, 
            technical expertise, and real-world problem-solving capabilities.
          </p>
          <div className="w-24 h-1 bg-robotic-yellow mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.id
            
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-robotic-yellow text-robotic-black'
                    : 'bg-robotic-gray/50 text-white/70 hover:bg-robotic-yellow hover:text-robotic-black'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="robotic-card cursor-pointer group"
              onClick={() => openProjectModal(project)}
  
            >
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-robotic-gray/50 rounded-lg flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="text-robotic-yellow/50 text-4xl font-bold hidden">PROJECT</div>
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-robotic-yellow text-robotic-black px-2 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-robotic-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="text-white text-4xl" />
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-robotic-yellow transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-robotic-yellow/10 text-robotic-yellow text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-robotic-gray/50 text-white/50 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="robotic-card max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <button
                  onClick={closeProjectModal}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              {/* Project Image */}
              <div className="w-full h-64 bg-robotic-gray/50 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="text-robotic-yellow/50 text-6xl font-bold hidden">PROJECT</div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-robotic-yellow/10 text-robotic-yellow rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {selectedProject.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="robotic-button flex items-center space-x-2"
                    >
                      <Github size={18} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  
                  {selectedProject.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="robotic-button-outline flex items-center space-x-2"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                  
                  {selectedProject.demoUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="robotic-button-outline flex items-center space-x-2"
                    >
                      <Play size={18} />
                      <span>Watch Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
