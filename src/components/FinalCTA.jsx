import { MapPin, Phone } from 'lucide-react'
import { business } from '../data/business.js'

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta__media">
        <img src="/assets/final-cta.png" alt="" loading="lazy" className="final-cta__image" />
        <div className="final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="container">
        <div className="final-cta__content">
          <p className="section-label">NO BOOKING NEEDED</p>
          <h2 id="final-cta-heading" className="section-heading">
            Ready for a fresh cut?
          </h2>
          <p className="section-copy">
            Walk in today for experienced barbering, honest prices and friendly local service.
          </p>

          <div className="final-cta__actions">
            <a href={business.mapsDirectionsHref} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" />
              <span>Get Directions</span>
            </a>
            <a href={business.phone.href} className="btn btn--secondary">
              <Phone size={18} aria-hidden="true" />
              <span>Call 01274 668779</span>
            </a>
          </div>

          <p className="final-cta__trust">Walk-ins welcome · Free parking outside</p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
