import { useState } from 'react'
import { itinerary } from '../data/itinerary'
import DayToggle from './DayToggle'
import DayTimeline from './DayTimeline'

export default function ItinerarySection() {
  const [selectedId, setSelectedId] = useState(itinerary[0].id)
  const selectedDay = itinerary.find((day) => day.id === selectedId) ?? itinerary[0]

  return (
    <section className="itinerary" id="itinerary">
      <div className="itinerary__intro">
        <p className="section-eyebrow">Dagskráin</p>
        <h2>Day by Day</h2>
        <div className="itinerary__legend">
          <span className="itinerary__legend-swatch itinerary__legend-swatch--reserved" />
          Það sem er í lituðum kassa merkir að borð, bátur eða annað er búið að bóka fyrir
          allan hópinn - verum stundvís!
        </div>
      </div>

      <DayToggle days={itinerary} selectedId={selectedDay.id} onSelect={setSelectedId} />
      <DayTimeline day={selectedDay} />
    </section>
  )
}
