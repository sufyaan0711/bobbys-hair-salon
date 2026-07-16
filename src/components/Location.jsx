import { MapPin, Phone, MessageCircle, ParkingSquare } from 'lucide-react'
import { business } from '../data/business.js'

function Location() {
  return (
    <section id="location" className="location section" aria-labelledby="location-heading">
      <div className="container location__grid">
        <div className="location__details">
          <p className="section-label">FIND US</p>
          <h2 id="location-heading" className="section-heading">
            {business.name}
          </h2>

          <address className="location__address">
            {business.address.line1}
            <br />
            {business.address.city}
            <br />
            {business.address.postcode}
          </address>

          <ul className="location__contact-list">
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={business.phone.href}>{business.phone.display}</a>
            </li>
            <li>
              <MessageCircle size={16} aria-hidden="true" />
              <a href={business.whatsapp.href} target="_blank" rel="noopener noreferrer">
                {business.whatsapp.display}
              </a>
            </li>
            <li>
              <ParkingSquare size={16} aria-hidden="true" />
              <span>Free parking directly outside</span>
            </li>
          </ul>

          <div className="location__actions">
            <a href={business.mapsDirectionsHref} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" />
              <span>Get Directions</span>
            </a>
            <a href={business.phone.href} className="btn btn--secondary">
              <Phone size={18} aria-hidden="true" />
              <span>Call the Shop</span>
            </a>
            <a href={business.whatsapp.href} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden="true" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="location__map-wrap">
          <iframe
            className="location__map"
            src={business.mapsEmbedSrc}
            title="Map showing Bobby's Hair Salon at 963 Leeds Road, Bradford"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Location
