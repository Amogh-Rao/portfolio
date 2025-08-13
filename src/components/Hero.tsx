import { motion } from 'framer-motion'

import { ChevronDown, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeroProps {
  onScrollToSection: (sectionId: string) => void
}

// Cycling Text Component
function CyclingText() {
  const words = ['Inventor', 'Engineer', 'Developer', 'Entrepreneur', 'Creator', 'Problem Solver', 'Innovator']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 600)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <motion.span
      key={currentWordIndex}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="text-white"
    >
      {words[currentWordIndex]}
    </motion.span>
  )
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const scrollToAbout = () => onScrollToSection('about')

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-robotic-black/50 backdrop-blur-sm">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-robotic-yellow/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-robotic-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-robotic-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-robotic-yellow font-mono text-lg sm:text-xl">
            &lt;Hello World /&gt;
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">I'm </span>
          <span className="text-robotic-yellow font-bold drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
            Amogh
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-white/80 text-center"
        >
          <span className="text-robotic-yellow">High School </span>
          <CyclingText />
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('projects')}
            className="robotic-button group"
          >
            <span className="flex items-center space-x-2">
              <span>View My Work</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('contact')}
            className="robotic-button-outline group"
          >
            <span className="flex items-center space-x-2">
              <span>Get In Touch</span>
              <Mail className="group-hover:scale-110 transition-transform" />
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-robotic-yellow hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Robot Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-robotic-yellow/30 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 left-1/4 w-12 h-12 border-2 border-robotic-yellow/20 rounded-full"
        />
      </div>
    </section>
  )
}
