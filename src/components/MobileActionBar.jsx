import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { business } from '../data/business.js'

function MobileActionBar() {
  return (
    <>
      <nav className="mobile-action-bar" aria-label="Quick contact">
        <a href={business.phone.href} className="mobile-action-bar__item" aria-label="Call the shop">
          <Phone size={20} aria-hidden="true" />
          <span>Call</span>
        </a>
        <a
          href={business.mapsDirectionsHref}
          className="mobile-action-bar__item"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions"
        >
          <MapPin size={20} aria-hidden="true" />
          <span>Directions</span>
        </a>
        <a
          href={business.whatsapp.href}
          className="mobile-action-bar__item mobile-action-bar__item--accent"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle size={20} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </nav>

      <a
        href={business.whatsapp.href}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </>
  )
}

export default MobileActionBar
