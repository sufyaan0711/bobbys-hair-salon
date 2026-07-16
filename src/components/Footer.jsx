import { business, navLinks } from '../data/business.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/assets/logo.png" alt="Bobby's Hair Salon" className="footer__logo" />
          <p className="footer__description">
            Experienced local barbering in Bradford. Sharp fades, beard grooming and family
            haircuts with no booking required.
          </p>
        </div>

        <div className="footer__contact">
          <p className="footer__heading">Contact</p>
          <address>
            {business.address.line1}
            <br />
            {business.address.city}, {business.address.postcode}
          </address>
          <p>
            <a href={business.phone.href}>{business.phone.display}</a>
          </p>
          <p>
            <a href={business.whatsapp.href} target="_blank" rel="noopener noreferrer">
              WhatsApp: {business.whatsapp.display}
            </a>
          </p>
          <p className="footer__hours-summary">Wed–Mon, 10:30am–7pm · Closed Tuesdays</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <p className="footer__heading">Explore</p>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer__bottom container">
        <p>
          © {year} {business.name}. All rights reserved.
        </p>
        <p className="footer__credit">
          Website by{' '}
          <a href="#" className="footer__credit-link">
            Nexora Web
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
