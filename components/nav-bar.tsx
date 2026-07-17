'use client'

import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'creds', label: 'creds' },
  { id: 'contact', label: 'contact' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-primary text-glow"
          aria-label="Home"
        >
          <Terminal className="size-5" aria-hidden="true" />
          <span className="text-sm font-bold tracking-tight">~/pranavrbm</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary hover:text-glow"
              >
                <span className="text-primary/70">$ </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded border border-primary/40 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          ./connect
        </a>
      </nav>
    </header>
  )
}
