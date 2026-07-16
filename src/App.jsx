import AnnouncementBar from './components/AnnouncementBar.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import PriceList from './components/PriceList.jsx'
import About from './components/About.jsx'
import Craft from './components/Craft.jsx'
import Benefits from './components/Benefits.jsx'
import OpeningHours from './components/OpeningHours.jsx'
import Location from './components/Location.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import MobileActionBar from './components/MobileActionBar.jsx'

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <PriceList />
        <About />
        <Craft />
        <Benefits />
        <OpeningHours />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}

export default App
