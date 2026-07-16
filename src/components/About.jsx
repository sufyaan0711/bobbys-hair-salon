import { Scissors, Users, DoorOpen, ParkingSquare } from 'lucide-react'

const benefits = [
  { icon: Scissors, label: 'Fade Specialist' },
  { icon: Users, label: 'Family Friendly' },
  { icon: DoorOpen, label: 'Walk-Ins Welcome' },
  { icon: ParkingSquare, label: 'Free Parking' },
]

function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__image-wrap">
          <img
            src="/assets/interior-wide.png"
            alt="Interior of Bobby's Hair Salon barbershop"
            loading="lazy"
            className="about__image"
          />
        </div>

        <div className="about__content">
          <p className="section-label">MEET YOUR BARBER</p>
          <h2 id="about-heading" className="section-heading">
            15+ years behind the chair.
          </h2>
          <p className="section-copy">
            With more than 15 years of barbering experience, Kamal has built his service around
            clean cuts, sharp fades and a friendly welcome. Bobby’s Hair Salon serves adults,
            children and families looking for reliable barbering at honest local prices.
          </p>
          <p className="about__signature">Kamal — Barber at Bobby’s</p>

          <ul className="about__benefits">
            {benefits.map(({ icon: Icon, label }) => (
              <li key={label} className="about__benefit">
                <Icon size={18} aria-hidden="true" className="about__benefit-icon" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
