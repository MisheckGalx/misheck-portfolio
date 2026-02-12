import React, { useRef, useEffect } from 'react'
import { portfolioData } from '../data/portfolioData.jsx'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'
import { FaWhatsapp, FaFileDownload } from 'react-icons/fa'
import { slideInFromBottom, fadeIn } from '../utils/animations'

const Contact = () => {
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) slideInFromBottom(containerRef.current)
    if (headingRef.current) slideInFromBottom(headingRef.current, 0.2)
    if (textRef.current) fadeIn(textRef.current, 0.4)
    if (buttonsRef.current) fadeIn(buttonsRef.current, 0.6)
  }, [])

  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-500">
      <div ref={containerRef} className="max-w-4xl mx-auto border border-black/10 dark:border-white/10 rounded-lg p-12 md:p-24 relative overflow-hidden bg-gray-50/50 dark:bg-white/[0.01] opacity-0">
        <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15] pointer-events-none" style={{ backgroundImage: `radial-gradient(currentColor 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px', color: 'inherit' }} />
        <div className="relative z-10 flex flex-col items-center text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400 font-bold">Collaborate</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white leading-none">
              <span ref={headingRef} className="inline-block">Let's build <span className="text-black dark:text-white italic">it.</span></span>
            </h2>
            <p ref={textRef} className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm md:text-base font-light opacity-0">I'm available for freelance projects and full-time opportunities. Let's connect and create something amazing together.</p>
          </div>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto opacity-0">
            <a href={portfolioData.personal.social.email} className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5 active:scale-95">
              <FiMail size={18} />
              <span>Email Me</span>
            </a>
            <a href={portfolioData.personal.social.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20ba5f] text-white rounded-2xl font-bold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 active:scale-95 group">
              <FaWhatsapp size={18} />
              <span>Chat on WhatsApp</span>
              <FiArrowUpRight className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            <a onClick={() => {
              const link = document.createElement('a')
              link.href = '/files/Misheck_Gogo_CV.pdf'
              link.download = 'Misheck_Gogo_CV.pdf'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
             }} className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 text-white dark:text-black rounded-2xl font-bold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer">
              <FaFileDownload size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
