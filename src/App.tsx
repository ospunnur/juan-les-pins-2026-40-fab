import Hero from './components/Hero'
import HotelSection from './components/HotelSection'
import ItinerarySection from './components/ItinerarySection'
import TipsSection from './components/TipsSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <HotelSection />
        <ItinerarySection />
        <TipsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
