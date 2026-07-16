import { motion } from 'framer-motion'
import { MapPin, MessageCircle, ChevronDown } from 'lucide-react'
import { business } from '../data/business.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Bobby's Hair Salon introduction">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/hero-source.png"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          BRADFORD BARBER · WALK-INS WELCOME
        </motion.p>

        <motion.h1
          className="hero__heading"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.1}
        >
          Sharp Cuts.
          <br />
          <span className="text-accent">Classic Service.</span>
        </motion.h1>

        <motion.p
          className="hero__description"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
        >
          Professional fades, beard trims and family haircuts from an experienced local barber.
          No booking needed — simply walk in.
        </motion.p>

        <motion.ul
          className="hero__trust-points"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.3}
        >
          <li>15+ Years’ Experience</li>
          <li>Fade Specialist</li>
          <li>Free Parking</li>
        </motion.ul>

        <motion.div
          className="hero__actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.4}
        >
          <a href={business.mapsDirectionsHref} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            <MapPin size={18} aria-hidden="true" />
            <span>Get Directions</span>
          </a>
          <a href={business.whatsapp.href} className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Message on WhatsApp</span>
          </a>
        </motion.div>

        <motion.p
          className="hero__hours-note"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.5}
        >
          Open Wednesday–Monday, 10:30am–7pm · Closed Tuesdays
        </motion.p>
      </div>

      <a href="#services" className="hero__scroll-indicator" aria-label="Scroll to services">
        <ChevronDown size={22} aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
