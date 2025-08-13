import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail, Eye, EyeOff } from 'lucide-react'

interface NavigationProps {
  currentSection: string
  onSectionChange: (sectionId: string) => void
  isRobotVisible: boolean
  onToggleRobot: () => void
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Navigation({ currentSection, onSectionChange, isRobotVisible, onToggleRobot }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-robotic-black/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-robotic-yellow rounded-lg flex items-center justify-center">
                <span className="text-robotic-black font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">AMOGH</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = currentSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-robotic-yellow border-b-2 border-robotic-yellow'
                        : 'text-white/70 hover:text-robotic-yellow hover:bg-robotic-gray/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </motion.button>
                )
              })}
              
              {/* Robot Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onToggleRobot}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-robotic-yellow hover:bg-robotic-yellow hover:text-robotic-black border border-robotic-yellow/50 hover:border-robotic-yellow"
              >
                {isRobotVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                <span>{isRobotVisible ? 'Hide Robot' : 'Show Robot'}</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="text-white hover:text-robotic-yellow transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-robotic-black/95 backdrop-blur-md md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = currentSection === item.id
                
                return (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onSectionChange(item.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-robotic-yellow bg-robotic-yellow/10 border border-robotic-yellow/30'
                        : 'text-white/70 hover:text-robotic-yellow hover:bg-robotic-gray/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-lg">{item.label}</span>
                  </motion.button>
                )
              })}
              
              {/* Mobile Robot Toggle Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={onToggleRobot}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 text-robotic-yellow bg-robotic-yellow/10 border border-robotic-yellow/30 hover:bg-robotic-yellow hover:text-robotic-black"
              >
                {isRobotVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                <span className="text-lg">{isRobotVisible ? 'Hide Robot' : 'Show Robot'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-robotic-yellow to-robotic-yellow-dark origin-left z-50"
        style={{
          transformOrigin: 'left',
          transform: `scaleX(${scrolled ? 1 : 0})`
        }}
      />
    </>
  )
}
