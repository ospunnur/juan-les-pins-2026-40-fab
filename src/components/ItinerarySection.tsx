import { itinerary } from '../data/itinerary'
import DayCard from './DayCard'

export default function ItinerarySection() {
  return (
    <section className="itinerary" id="itinerary">
      <div className="itinerary__intro">
        <p className="section-eyebrow">Dagskráin</p>
        <h2>Dagur fyrir dag</h2>
        <div className="itinerary__legend">
          <span className="itinerary__legend-swatch itinerary__legend-swatch--reserved" />
          Merkt svona þýðir að borð, bátur eða annað er þegar frátekið fyrir allan hópinn
          - mætum stundvís!
        </div>
      </div>
      <div className="itinerary__grid">
        {itinerary.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </section>
  )
}
