export const business = {
  name: 'Bobby’s Hair Salon',
  barberName: 'Kamal',
  address: {
    line1: '963 Leeds Road',
    city: 'Bradford',
    postcode: 'BD3 8JB',
    country: 'United Kingdom',
    full: '963 Leeds Road, Bradford, BD3 8JB',
  },
  phone: {
    display: '01274 668779',
    href: 'tel:01274668779',
  },
  whatsapp: {
    display: '07462 458888',
    href: 'https://wa.me/447462458888?text=Hi%20Kamal%2C%20I%20found%20Bobby%27s%20Hair%20Salon%20through%20the%20website%20and%20wanted%20to%20ask%20about%20your%20services.',
  },
  mapsDirectionsHref:
    'https://www.google.com/maps/dir/?api=1&destination=963%20Leeds%20Road%2C%20Bradford%2C%20BD3%208JB',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=963+Leeds+Road,+Bradford,+BD3+8JB&output=embed',
}

// 0 = Sunday ... 6 = Saturday, matching Date#getDay()
export const openingHours = [
  { day: 'Sunday', dayIndex: 0, opens: '10:30', closes: '19:00', closed: false },
  { day: 'Monday', dayIndex: 1, opens: '10:30', closes: '19:00', closed: false },
  { day: 'Tuesday', dayIndex: 2, opens: null, closes: null, closed: true },
  { day: 'Wednesday', dayIndex: 3, opens: '10:30', closes: '19:00', closed: false },
  { day: 'Thursday', dayIndex: 4, opens: '10:30', closes: '19:00', closed: false },
  { day: 'Friday', dayIndex: 5, opens: '10:30', closes: '19:00', closed: false },
  { day: 'Saturday', dayIndex: 6, opens: '10:30', closes: '19:00', closed: false },
]

export const services = [
  { name: 'Men’s Haircut & Fade', price: '£10', priceValue: 10 },
  { name: 'Beard Trim & Shape-Up', price: '£5', priceValue: 5 },
  { name: 'Haircut & Beard', price: '£15', priceValue: 15 },
  { name: 'Children’s Haircut', price: '£8', priceValue: 8 },
  { name: 'Newborn Head Shave', price: 'Ask in store', priceValue: null },
  { name: 'Eyebrow & Nose Waxing', price: 'Ask in store', priceValue: null },
]

export const featuredServices = [
  {
    image: '/assets/fade-service.png',
    title: 'Haircuts & Fades',
    description: 'Clean, balanced cuts and sharp fades tailored to your style.',
    price: '£10',
    alt: 'A sharp fade haircut being finished by a barber',
  },
  {
    image: '/assets/beard-service.png',
    title: 'Beard Grooming',
    description: 'Beard trimming, shaping and clean line-ups for a sharper finish.',
    price: '£5',
    alt: 'A neatly trimmed and shaped beard',
  },
  {
    image: '/assets/kids-service.png',
    title: 'Children’s Haircuts',
    description: 'Patient, friendly haircuts in a welcoming family environment.',
    price: '£8',
    alt: 'A child receiving a friendly haircut in the salon',
  },
]

export const sellingPoints = [
  'More than 15 years of barbering experience',
  'Fade specialist',
  'Family-friendly service',
  'Haircuts for adults and children',
  'Affordable local prices',
  'Walk-ins welcome',
  'Free parking directly outside',
  'Friendly personal service',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Hours', href: '#hours' },
  { label: 'Location', href: '#location' },
]
