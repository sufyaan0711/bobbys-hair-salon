import { Award, Scissors, Wallet, Users, DoorOpen, ParkingSquare } from 'lucide-react'

const benefits = [
  { icon: Award, label: '15+ Years’ Experience' },
  { icon: Scissors, label: 'Specialist Fades' },
  { icon: Wallet, label: 'Affordable Prices' },
  { icon: Users, label: 'Family-Friendly Service' },
  { icon: DoorOpen, label: 'Walk-Ins Welcome' },
  { icon: ParkingSquare, label: 'Free Parking Outside' },
]

function Benefits() {
  return (
    <section className="benefits section" aria-labelledby="benefits-heading">
      <div className="container">
        <h2 id="benefits-heading" className="visually-hidden">
          Why choose Bobby’s Hair Salon
        </h2>
        <ul className="benefits__grid">
          {benefits.map(({ icon: Icon, label }) => (
            <li key={label} className="benefits__item">
              <Icon size={22} aria-hidden="true" className="benefits__icon" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
