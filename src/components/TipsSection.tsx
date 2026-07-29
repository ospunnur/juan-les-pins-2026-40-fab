import { tips } from '../data/itinerary'

export default function TipsSection() {
  return (
    <section className="tips" id="tips">
      <p className="section-eyebrow">Ábendingar</p>
      <h2>Tips</h2>
      <div className="tips__grid">
        {tips.map((tip) => (
          <div className="tips__card" key={tip.title}>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
