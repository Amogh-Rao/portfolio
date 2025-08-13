import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Cpu, Brain } from 'lucide-react'

export default function KonamiEasterEgg() {
  const [sequence, setSequence] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...sequence, e.code]
      setSequence(newCode)

      // Check if the last 10 keys match the Konami sequence
      if (newCode.length >= 10) {
        const lastTen = newCode.slice(-10)
        if (lastTen.every((key, index) => key === konamiSequence[index])) {
          activateEasterEgg()
        }
        // Keep only the last 9 keys for the next check
        setSequence(newCode.slice(-9))
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [sequence])

  const activateEasterEgg = () => {
    setShowEasterEgg(true)
    
    // Add some fun effects
    document.body.style.filter = 'hue-rotate(180deg) saturate(2)'
    
    // Reset after 5 seconds
    setTimeout(() => {
      document.body.style.filter = 'none'
      setShowEasterEgg(false)
    }, 5000)
  }

  if (!showEasterEgg) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="fixed inset-0 z-[10000] pointer-events-none"
      >
        {/* Matrix-style background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 animate-pulse" />
        
        {/* Floating robot parts */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 360,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {i % 3 === 0 ? (
              <Cpu className="text-green-400" size={24} />
            ) : i % 3 === 1 ? (
              <Zap className="text-blue-400" size={24} />
            ) : (
              <Brain className="text-purple-400" size={24} />
            )}
          </motion.div>
        ))}

        {/* Center message */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-green-400 mb-4 font-mono">
            KONAMI ACTIVATED!
          </h1>
          <p className="text-2xl text-blue-400 font-mono">
            Robot Override Sequence Initiated
          </p>
          <p className="text-lg text-purple-400 mt-4 font-mono">
            Welcome to the Matrix, Amogh...
          </p>
        </motion.div>

        {/* Corner indicators */}
        <motion.div
          className="absolute top-4 left-4 text-green-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          SYSTEM: OVERRIDE
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 text-blue-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          STATUS: ACTIVE
        </motion.div>
        <motion.div
          className="absolute bottom-4 left-4 text-purple-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          MODE: KONAMI
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 text-yellow-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          TIME: {new Date().toLocaleTimeString()}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
