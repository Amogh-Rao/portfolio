import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Background3D from './components/Background3D'
import KonamiEasterEgg from './components/KonamiEasterEgg'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [isRobotVisible, setIsRobotVisible] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Scroll-based section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setCurrentSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
    }
  }

  const toggleRobot = () => {
    setIsRobotVisible(!isRobotVisible)
    console.log('Robot toggled, visible:', !isRobotVisible)
  }

  if (isLoading) {
    return (
      <div className="h-screen bg-robotic-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 border-4 border-robotic-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold gradient-text">AMOGH</h1>
          <p className="text-robotic-yellow/70 mt-2">Robotics Engineer</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Konami Easter Egg */}
      <KonamiEasterEgg />
      
      {/* 3D Background */}
      <Background3D isRobotVisible={isRobotVisible} />
      
      {/* Navigation */}
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={scrollToSection}
        isRobotVisible={isRobotVisible}
        onToggleRobot={toggleRobot}
      />
      
      {/* Main Content */}
      <main className="relative z-20">
        <Hero onScrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Additional spacing for scroll-based robot building */}
        <div className="h-screen bg-transparent"></div>
      </main>
      
      {/* Floating Elements */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="fixed bottom-8 right-8 z-50 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-16 h-16 bg-robotic-yellow/20 backdrop-blur-sm rounded-full border border-robotic-yellow/30 flex items-center justify-center animate-float group">
            <div className="w-8 h-8 bg-robotic-yellow rounded-full animate-glow group-hover:scale-110 transition-transform duration-300"></div>
            {/* Hover tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-robotic-black/90 text-robotic-yellow text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to Top
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
