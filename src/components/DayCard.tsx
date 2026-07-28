import type { ItineraryDay } from '../data/itinerary'
import ReservedBadge from './ReservedBadge'

export default function DayCard({ day }: { day: ItineraryDay }) {
  return (
    <article className={`day-card day-card--${day.theme}`}>
      <div className="day-card__header">
        <div className="day-card__date">
          <span className="day-card__weekday">{day.weekday}</span>
          <span className="day-card__day-number">{day.date}</span>
        </div>
        {day.highlight && <span className="day-card__highlight">Dagur með stóran karakter</span>}
      </div>

      <h3 className="day-card__vibe">{day.vibeTag}</h3>
      <p className="day-card__description">{day.vibeDescription}</p>

      <ul className="day-card__events">
        {day.events.map((event, index) => (
          <li
            key={index}
            className={`day-card__event${event.reserved ? ' day-card__event--reserved' : ''}`}
          >
            <div className="day-card__event-row">
              {event.time && <span className="day-card__time">{event.time}</span>}
              <span className="day-card__event-title">{event.title}</span>
            </div>
            {event.note && <p className="day-card__note">{event.note}</p>}
            {event.reserved && <ReservedBadge />}
          </li>
        ))}
      </ul>

      {day.tip && (
        <div className="day-card__tip">
          <span className="day-card__tip-label">Ábending</span>
          <p>
            <strong>{day.tip.title}</strong> — {day.tip.description}
          </p>
        </div>
      )}
    </article>
  )
}
