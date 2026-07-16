import { openingHours } from '../data/business.js'

const WEEKDAY_TO_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

function toMinutes(hhmm) {
  const [hours, minutes] = hhmm.split(':').map(Number)
  return hours * 60 + minutes
}

function formatTime(hhmm) {
  const [hours, minutes] = hhmm.split(':').map(Number)
  const period = hours >= 12 ? 'pm' : 'am'
  const displayHour = hours % 12 === 0 ? 12 : hours % 12
  const displayMinute = String(minutes).padStart(2, '0')
  return `${displayHour}:${displayMinute}${period}`
}

function getLondonNowParts(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const lookup = {}
  for (const part of parts) lookup[part.type] = part.value

  const dayIndex = WEEKDAY_TO_INDEX[lookup.weekday]
  const hour = Number(lookup.hour) % 24
  const minute = Number(lookup.minute)

  if (dayIndex === undefined || Number.isNaN(hour) || Number.isNaN(minute)) {
    throw new Error('Unable to resolve Europe/London time')
  }

  return { dayIndex, minutes: hour * 60 + minute }
}

function findNextOpenDay(fromIndex) {
  for (let step = 1; step <= 7; step += 1) {
    const idx = (fromIndex + step) % 7
    const day = openingHours.find((d) => d.dayIndex === idx)
    if (day && !day.closed) {
      return { day, isTomorrow: step === 1 }
    }
  }
  return null
}

const FALLBACK_STATUS = {
  isOpen: null,
  label: 'Walk-ins welcome',
  message: 'See opening hours below.',
}

// Returns a live-friendly opening status using Europe/London time.
// Wrapped defensively so a timezone/Intl issue never breaks the page.
export function getOpeningStatus(date = new Date()) {
  try {
    const { dayIndex, minutes } = getLondonNowParts(date)
    const today = openingHours.find((d) => d.dayIndex === dayIndex)
    if (!today) return FALLBACK_STATUS

    if (today.closed) {
      const next = findNextOpenDay(dayIndex)
      if (!next) return { isOpen: false, label: 'Currently closed', message: `Closed ${today.day}` }
      const nextLabel = next.isTomorrow ? 'tomorrow' : next.day.day
      return {
        isOpen: false,
        label: 'Currently closed',
        message: `Closed ${today.day} · Opens ${nextLabel} at ${formatTime(next.day.opens)}`,
      }
    }

    const openMinutes = toMinutes(today.opens)
    const closeMinutes = toMinutes(today.closes)

    if (minutes < openMinutes) {
      return {
        isOpen: false,
        label: 'Currently closed',
        message: `Opens today at ${formatTime(today.opens)}`,
      }
    }

    if (minutes < closeMinutes) {
      return {
        isOpen: true,
        label: 'Currently open',
        message: `Open today until ${formatTime(today.closes)}`,
      }
    }

    const next = findNextOpenDay(dayIndex)
    if (!next) return { isOpen: false, label: 'Currently closed', message: 'Currently closed' }
    const nextLabel = next.isTomorrow ? 'tomorrow' : next.day.day
    return {
      isOpen: false,
      label: 'Currently closed',
      message: `Opens ${nextLabel} at ${formatTime(next.day.opens)}`,
    }
  } catch {
    return FALLBACK_STATUS
  }
}

export { formatTime }
