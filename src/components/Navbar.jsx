import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#pendidikan', label: 'Pendidikan' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#beranda" className="font-extrabold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Andra LR</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-700 hover:text-indigo-600 transition-colors">{l.label}</a>
          ))}
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-indigo-600">{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
