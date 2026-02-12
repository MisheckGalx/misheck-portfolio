import React, { useState, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { portfolioData } from '../data/portfolioData.jsx'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'
import { FiSun, FiMoon } from 'react-icons/fi'
import { SiGmail } from 'react-icons/si'
import { fadeIn, slideInFromBottom } from '../utils/animations'

const About = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const headingRef = useRef(null)
  const statsRef = useRef(null)
  const socialRef = useRef(null)
  const aboutHeadingRef = useRef(null)
  const aboutTextRef = useRef(null)
  const profileImageRef = useRef(null)

  useEffect(() => {
    if (headingRef.current) slideInFromBottom(headingRef.current, 0.1)
    if (statsRef.current) fadeIn(statsRef.current, 0.3)
    if (socialRef.current) fadeIn(socialRef.current, 0.5)
    if (aboutHeadingRef.current) slideInFromBottom(aboutHeadingRef.current, 0.2)
    if (aboutTextRef.current) fadeIn(aboutTextRef.current, 0.4)
    if (profileImageRef.current) fadeIn(profileImageRef.current, 0.35)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleTheme = async () => {
    if (!document.startViewTransition) {
      setDarkMode(!darkMode)
      document.documentElement.classList.toggle('dark')
      return
    }
    document.documentElement.classList.add('disable-transitions')
    try {
      await document.startViewTransition(() => {
        flushSync(() => {
          setDarkMode(!darkMode)
          document.documentElement.classList.toggle('dark')
        })
      }).finished
    } finally {
      document.documentElement.classList.remove('disable-transitions')
    }
  }

  const downloadCV = () => {
    const cvUrl = '/Misheck_Gogo_CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Misheck_Gogo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen text-[#111111] dark:text-[#f0f0f0] selection:bg-blue-500/20 transition-colors duration-500 overflow-hidden">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md px-6 py-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex gap-8">
            {['Home', 'Projects'].map((item) => (
              <a key={item} href={item === 'Projects' ? '#work' : `#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button onClick={downloadCV} className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2">
              <FaFileDownload size={12} /> CV
            </button>
          </div>
          <button onClick={toggleTheme} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 md:pt-48 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="flex flex-col items-start text-left mb-20 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none">
                    <span ref={headingRef} className="inline-block opacity-0">Hey I'm <span className="relative inline-block ml-1 md:ml-2">
                      <span className="relative z-10 text-white dark:text-black px-1 md:px-2">Misheck</span>
                      <span className="absolute top-[-4px] left-[-6px] right-[-6px] bottom-[-4px] md:top-[-8px] md:left-[-10px] md:right-[-10px] md:bottom-[-8px] lg:top-[-12px] lg:left-[-12px] lg:right-[-12px] lg:bottom-[-12px] bg-black dark:bg-white -rotate-1 md:-rotate-2 z-0"></span>
                    </span></span>
                  </h1>
                </div>
                <div ref={statsRef} className="flex items-center gap-3 text-gray-500 font-medium text-sm md:text-lg opacity-0">
                  <span>{portfolioData.personal.age}</span>
                  <span className="text-gray-300 dark:text-white/10">•</span>
                  <span>{portfolioData.personal.roles[0]}</span>
                  <span className="text-gray-300 dark:text-white/10">•</span>
                  <span>{portfolioData.personal.roles[1]}</span>
                </div>
              </div>
              <div ref={socialRef} className="flex flex-wrap items-center gap-4 sm:gap-6 text-xl opacity-0">
                <a href={portfolioData.personal.social.email} className="text-[#EA4335] hover:text-[#EA4335] transition-colors"><SiGmail /></a>
                <a href={portfolioData.personal.social.github} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:opacity-80 transition-opacity"><FaGithub /></a>
                <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:text-[#0A66C2] transition-colors"><FaLinkedin /></a>
                <a href={portfolioData.personal.social.whatsapp} target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#25D366] transition-colors text-2xl">💬</a>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-gray-400/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 hover:bg-gray-400/10 dark:hover:bg-white/[0.06] whitespace-nowrap shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 font-medium">Available for work</span>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h2 ref={aboutHeadingRef} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 opacity-0">About</h2>
              <p ref={aboutTextRef} className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl opacity-0">{portfolioData.personal.about}</p>
            </div>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end pt-8 md:pt-0">
            <div ref={profileImageRef} className="relative opacity-0">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-black dark:border-white/20 shadow-2xl">
                <img src="https://via.placeholder.com/300/667eea/ffffff?text=Misheck+Gogo" alt="Misheck Gogo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute -inset-4 border-2 border-black/10 dark:border-white/10 rounded-full"></div>
              <div className="absolute -inset-8 border border-black/5 dark:border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
