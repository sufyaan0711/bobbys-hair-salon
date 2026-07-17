import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { business, navLinks } from '../data/business.js'

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)
  const closeButtonRef = useRef(null)
  // Set right before closing for an in-page #anchor link, so the cleanup
  // below doesn't fight that navigation by snapping back to the old scroll
  // position (X / Escape / resize closes still restore it as normal).
  const skipScrollRestoreRef = useRef(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-close the mobile menu if the viewport grows into the desktop layout.
  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 960px)')
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    desktopQuery.addEventListener('change', handleChange)
    return () => desktopQuery.removeEventListener('change', handleChange)
  }, [])

  // While open: lock body scroll (iOS-safe), trap focus and handle Escape.
  // Cleanup runs on every close path (X button, link, Escape, resize) and
  // always returns focus to the toggle button, restoring scroll position
  // too unless an in-page anchor link is about to take over that scroll.
  useEffect(() => {
    if (!menuOpen) return undefined

    const scrollY = window.scrollY
    const { body } = document
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'

    const getFocusable = () => Array.from(menuRef.current?.querySelectorAll(FOCUSABLE_SELECTOR) ?? [])

    ;(closeButtonRef.current ?? getFocusable()[0])?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const items = getFocusable()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    const toggleButton = toggleRef.current

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      if (skipScrollRestoreRef.current) {
        skipScrollRestoreRef.current = false
      } else {
        // Instant, not smooth: the page must land exactly back where it was
        // without an animated scroll fighting the site-wide smooth-scroll CSS.
        window.scrollTo({ top: scrollY, left: 0, behavior: 'instant' })
      }
      toggleButton?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  // For links that navigate to an in-page #anchor: let that navigation's
  // own scroll stand, rather than restoring the pre-menu scroll position.
  const closeMenuForAnchor = () => {
    skipScrollRestoreRef.current = true
    setMenuOpen(false)
  }

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

      {createPortal(
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <div className="mobile-menu__top">
            <a
              href="#home"
              className="mobile-menu__logo-link"
              aria-label="Bobby's Hair Salon home"
              onClick={closeMenuForAnchor}
            >
              <img src="/assets/logo.png" alt="Bobby's Hair Salon" className="mobile-menu__logo" />
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label="Mobile">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenuForAnchor}>
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
        </div>,
        document.body,
      )}
    </header>
  )
}

export default Header
