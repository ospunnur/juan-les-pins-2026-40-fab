import Hero from './components/Hero'
import HotelSection from './components/HotelSection'
import ItinerarySection from './components/ItinerarySection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="page">
      <Hero />
      <main>
        <HotelSection />
        <ItinerarySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
