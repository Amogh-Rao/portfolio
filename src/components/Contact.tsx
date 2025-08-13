import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Download } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon. Thanks for reaching out!')
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amoghrao5238@gmail.com",
      link: "mailto:amoghrao5238@gmail.com"
    },
    {
      icon: MapPin,
      title: "School",
      value: "Lynbrook High School",
      link: "#"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Jose, CA",
      link: "#"
    }
  ]

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/amogh-rao-17725726b/", color: "hover:text-blue-400" },
    { name: "Resume", icon: Download, url: "/resume.pdf", color: "hover:text-green-400" },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-robotic-yellow mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-robotic-gray/50 border border-robotic-yellow/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-robotic-yellow focus:ring-2 focus:ring-robotic-yellow/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-robotic-gray/50 border border-robotic-yellow/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-robotic-yellow focus:ring-2 focus:ring-robotic-yellow/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-robotic-gray/50 border border-robotic-yellow/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-robotic-yellow focus:ring-2 focus:ring-robotic-yellow/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-robotic-gray/50 border border-robotic-yellow/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-robotic-yellow focus:ring-2 focus:ring-robotic-yellow/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="robotic-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
    
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-robotic-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-robotic-gray/30 rounded-lg border border-robotic-yellow/20 hover:border-robotic-yellow/40 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-robotic-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-robotic-yellow/30 transition-colors">
                        <Icon className="text-robotic-yellow" size={24} />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm">{info.title}</div>
                        <div className="text-white font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Follow My Journey
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 bg-robotic-gray/50 border border-robotic-yellow/30 rounded-lg flex items-center justify-center text-robotic-yellow hover:bg-robotic-yellow hover:text-robotic-black transition-all duration-300 ${social.color}`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
