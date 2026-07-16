import { useEffect, useState } from 'react'
import { getOpeningStatus } from './openingHours.js'

// Live opening status, refreshed once a minute. Defensive by design —
// getOpeningStatus() never throws, so this can't break the page.
export function useOpeningStatus() {
  const [status, setStatus] = useState(() => getOpeningStatus())

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getOpeningStatus())
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  return status
}
