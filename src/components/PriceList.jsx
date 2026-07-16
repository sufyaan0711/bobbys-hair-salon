import { MessageCircle } from 'lucide-react'
import { services, business } from '../data/business.js'

function PriceList() {
  return (
    <section className="price-list section" aria-labelledby="price-list-heading">
      <div className="container container--narrow">
        <div className="section-intro section-intro--center">
          <p className="section-label">FULL PRICE LIST</p>
          <h2 id="price-list-heading" className="section-heading">
            Every service, upfront.
          </h2>
        </div>

        <ul className="price-list__items">
          {services.map((service) => (
            <li key={service.name} className="price-list__item">
              <span className="price-list__name">{service.name}</span>
              <span className="price-list__line" aria-hidden="true" />
              <span className={`price-list__price ${service.priceValue === null ? 'price-list__price--muted' : ''}`}>
                {service.price}
              </span>
            </li>
          ))}
        </ul>

        <div className="price-list__cta">
          <p>Questions about a service? Message Kamal</p>
          <a href={business.whatsapp.href} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default PriceList
