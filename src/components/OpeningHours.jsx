import { Clock } from 'lucide-react'
import { openingHours } from '../data/business.js'
import { formatTime } from '../utils/openingHours.js'
import { useOpeningStatus } from '../utils/useOpeningStatus.js'

const displayOrder = [1, 2, 3, 4, 5, 6, 0]

function OpeningHours() {
  const status = useOpeningStatus()

  return (
    <section id="hours" className="opening-hours section" aria-labelledby="hours-heading">
      <div className="container container--narrow">
        <div className="section-intro section-intro--center">
          <p className="section-label">OPENING HOURS</p>
          <h2 id="hours-heading" className="section-heading">
            When to find us.
          </h2>

          {status.isOpen !== null && (
            <p className={`opening-hours__status ${status.isOpen ? 'opening-hours__status--open' : 'opening-hours__status--closed'}`}>
              <Clock size={16} aria-hidden="true" />
              <span>{status.message}</span>
            </p>
          )}
        </div>

        <ul className="opening-hours__list">
          {displayOrder.map((dayIndex) => {
            const day = openingHours.find((d) => d.dayIndex === dayIndex)
            return (
              <li
                key={day.day}
                className={`opening-hours__row ${day.closed ? 'opening-hours__row--closed' : ''}`}
              >
                <span className="opening-hours__day">{day.day}</span>
                <span className="opening-hours__time">
                  {day.closed ? 'Closed' : `${formatTime(day.opens)}–${formatTime(day.closes)}`}
                </span>
              </li>
            )
          })}
        </ul>

        <p className="opening-hours__note">No booking needed. Walk in during opening hours.</p>
      </div>
    </section>
  )
}

export default OpeningHours
