import { motion } from 'framer-motion'
import { featuredServices } from '../data/business.js'

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

function Services() {
  return (
    <section id="services" className="services section" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-intro">
          <p className="section-label">SERVICES &amp; PRICES</p>
          <h2 id="services-heading" className="section-heading">
            Quality barbering.
            <br />
            Honest prices.
          </h2>
          <p className="section-copy">
            From everyday cuts to sharp fades and beard grooming, Bobby’s keeps things simple:
            experienced service, fair prices and no booking required.
          </p>
        </div>

        <div className="service-cards">
          {featuredServices.map((service, index) => (
            <motion.article
              key={service.title}
              className="service-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index * 0.12}
            >
              <div className="service-card__image-wrap">
                <img src={service.image} alt={service.alt} loading="lazy" className="service-card__image" />
                <div className="service-card__gradient" aria-hidden="true" />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <p className="service-card__price">{service.price}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="services__note">Walk-ins welcome. Ask in store about any additional services.</p>
      </div>
    </section>
  )
}

export default Services
