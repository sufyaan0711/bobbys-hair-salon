import { useEffect, useRef, useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { business, navLinks } from '../data/business.js'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    document.body.classList.add('no-scroll')

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#home" className="header__logo-link" aria-label="Bobby's Hair Salon home">
          <img src="/assets/logo.png" alt="Bobby's Hair Salon" className="header__logo" />
        </a>

        <nav className="header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={business.whatsapp.href} className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="header__menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <a href={business.phone.href} className="btn btn--secondary" onClick={closeMenu}>
            <Phone size={18} aria-hidden="true" />
            <span>Call the Shop</span>
          </a>
          <a
            href={business.whatsapp.href}
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
