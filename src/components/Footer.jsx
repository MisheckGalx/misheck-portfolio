cat > src/components/Footer.jsx << 'ENDFILE'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData.jsx'

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: portfolioData.personal.social.github,
      label: 'GitHub',
      color: 'text-black dark:text-white'
    },
    {
      icon: FaLinkedin,
      href: portfolioData.personal.social.linkedin,
      label: 'LinkedIn',
      color: 'text-[#0A66C2]'
    },
  ]

  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
        <div className="group cursor-default">
          <span className="text-5xl font-bold tracking-tighter italic text-black/10 dark:text-white/10 group-hover:text-black dark:group-hover:text-white transition-colors duration-700 ease-in-out select-none">MG</span>
        </div>
        <div className="flex items-center gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`${social.color} hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1`} aria-label={social.label}>
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
ENDFILE
