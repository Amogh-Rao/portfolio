import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Box, Sphere, Cylinder, Grid } from '@react-three/drei'
import * as THREE from 'three'

// Interactive Robot Builder Component
function FloatingParts({ isRobotVisible }: { isRobotVisible: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const [robotMode, setRobotMode] = useState<'idle' | 'building' | 'fighting'>('idle')
  const [buildProgress, setBuildProgress] = useState(0)
  
  // Auto-build robot based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calculate scroll progress more accurately
      const maxScroll = Math.max(documentHeight - windowHeight, 1)
      const scrollProgress = Math.min(scrollY / maxScroll, 1)
      
      setBuildProgress(scrollProgress)
      
      // Change robot mode based on scroll progress
      if (scrollProgress < 0.3) {
        setRobotMode('idle')
      } else if (scrollProgress < 0.7) {
        setRobotMode('building')
      } else {
        setRobotMode('fighting')
      }
    }
    
    // Initial call to set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useFrame((state) => {
    if (groupRef.current && isRobotVisible) {
      // Very subtle animations based on robot mode
      switch (robotMode) {
        case 'idle':
          groupRef.current.rotation.y += 0.001
          groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.02
          break
        case 'building':
          groupRef.current.rotation.y += 0.003
          groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
          break
        case 'fighting':
          groupRef.current.rotation.y += 0.008
          groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.1
          break
      }
    }
    
    // Very subtle pulsing effect for head
    if (headRef.current && isRobotVisible) {
      const pulse = Math.sin(state.clock.elapsedTime * 1) * 0.03 + 1
      headRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <>
      {/* Robot Group */}
      {isRobotVisible && (
        <group ref={groupRef} position={[0, 0, -3]}>
          {/* Robot Head - appears first (starts at 0%) */}
          {buildProgress > 0 && (
            <Box 
              ref={headRef}
              args={[1, 1, 1]} 
              position={[0, 1.5, 0]}
            >
              <meshStandardMaterial 
                color="#FFD700"
                metalness={0.95} 
                roughness={0.05}
                emissive="#FFD700"
                emissiveIntensity={0.1}
              />
            </Box>
          )}
          
          {/* Robot Eyes - appear second (10%) */}
          {buildProgress > 0.1 && (
            <>
              <Sphere 
                args={[0.15, 16, 16]} 
                position={[-0.25, 1.6, 0.45]}
              >
                <meshStandardMaterial 
                  color="#1A1A1A"
                  emissive="#1A1A1A"
                  emissiveIntensity={0.1}
                />
              </Sphere>
              <Sphere 
                args={[0.15, 16, 16]} 
                position={[0.25, 1.6, 0.45]}
              >
                <meshStandardMaterial 
                  color="#1A1A1A"
                  emissive="#1A1A1A"
                  emissiveIntensity={0.1}
                />
              </Sphere>
            </>
          )}
          
          {/* Robot Neck - appears third (20%) */}
          {buildProgress > 0.2 && (
            <Cylinder 
              args={[0.3, 0.4, 0.4]} 
              position={[0, 1.25, 0]}
            >
              <meshStandardMaterial 
                color="#FFD700"
                metalness={0.95} 
                roughness={0.05}
                emissive="#FFD700"
                emissiveIntensity={0.08}
              />
            </Cylinder>
          )}
          
          {/* Robot Body - appears fourth (30%) */}
          {buildProgress > 0.3 && (
            <Box 
              args={[1.4, 1.8, 0.8]} 
              position={[0, 0.5, 0]}
            >
              <meshStandardMaterial 
                color="#FFD700"
                metalness={0.95} 
                roughness={0.05}
                emissive="#FFD700"
                emissiveIntensity={0.12}
              />
            </Box>
          )}
          
          {/* Robot Arms - appear fifth (40%) */}
          {buildProgress > 0.4 && (
            <>
              {/* Left Arm */}
              <Cylinder 
                args={[0.2, 0.15, 1.4]} 
                position={[-1.2, 0.8, 0]} 
                rotation={[0, 0, Math.PI / 8]}
              >
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.95} 
                  roughness={0.05}
                  emissive="#FFD700"
                  emissiveIntensity={0.08}
                />
              </Cylinder>
              {/* Right Arm */}
              <Cylinder 
                args={[0.2, 0.15, 1.4]} 
                position={[1.2, 0.8, 0]} 
                rotation={[0, 0, -Math.PI / 8]}
              >
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.95} 
                  roughness={0.05}
                  emissive="#FFD700"
                  emissiveIntensity={0.08}
                />
              </Cylinder>
            </>
          )}
          
          {/* Robot Legs - appear sixth (50%) */}
          {buildProgress > 0.5 && (
            <>
              {/* Left Leg */}
              <Cylinder 
                args={[0.25, 0.25, 1.8]} 
                position={[-0.6, -1.5, 0]} 
              >
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.95} 
                  roughness={0.05}
                  emissive="#FFD700"
                  emissiveIntensity={0.08}
                />
              </Cylinder>
              {/* Right Leg */}
              <Cylinder 
                args={[0.25, 0.25, 1.8]} 
                position={[0.6, -1.5, 0]} 
              >
                <meshStandardMaterial 
                  color="#FFD700"
                  metalness={0.95} 
                  roughness={0.05}
                  emissive="#FFD700"
                  emissiveIntensity={0.08}
                />
              </Cylinder>
            </>
          )}
          
          {/* Robot Shoes - appear last (60%) */}
          {buildProgress > 0.6 && (
            <>
              <Box 
                args={[0.5, 0.3, 1]} 
                position={[-0.6, -2.4, 0.2]}
              >
                <meshStandardMaterial 
                  color="#1A1A1A"
                  metalness={0.9} 
                  roughness={0.1}
                  emissive="#333333"
                  emissiveIntensity={0.05}
                />
              </Box>
              <Box 
                args={[0.5, 0.3, 1]} 
                position={[0.6, -2.4, 0.2]}
              >
                <meshStandardMaterial 
                  color="#1A1A1A"
                  metalness={0.9} 
                  roughness={0.1}
                  emissive="#333333"
                  emissiveIntensity={0.05}
                />
              </Box>
            </>
          )}
        </group>
      )}
    </>
  )
}

// Main Background Component
function Background3DContent({ isRobotVisible }: { isRobotVisible: boolean }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#FFD700" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#FFD700" />
      <pointLight position={[0, 5, 5]} intensity={0.5} color="#FFD700" />
      
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      <FloatingParts isRobotVisible={isRobotVisible} />
      
      {/* Grid Floor */}
      <Grid 
        args={[20, 20]} 
        cellSize={1} 
        cellThickness={0.3} 
        cellColor="#FFD700" 
        sectionSize={5} 
        sectionThickness={0.8} 
        sectionColor="#1A1A1A" 
        position={[0, -2, 0]} 
      />
    </>
  )
}

export default function Background3D({ isRobotVisible }: { isRobotVisible: boolean }) {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)' }}
      >
        <Background3DContent isRobotVisible={isRobotVisible} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          autoRotate 
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  )
}
