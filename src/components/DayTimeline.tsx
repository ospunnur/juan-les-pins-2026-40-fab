import type { ItineraryDay } from '../data/itinerary'
import ReservedBadge from './ReservedBadge'

export default function DayTimeline({ day }: { day: ItineraryDay }) {
  return (
    <div className={`day-timeline day-timeline--${day.theme}`} role="tabpanel">
      <div className="day-timeline__header">
        <p className="day-timeline__date">
          <span className="day-timeline__weekday">{day.weekday}</span>
          <span>{day.date}</span>
        </p>
        <h3 className="day-timeline__vibe">{day.vibeTag}</h3>
        <p className="day-timeline__description">{day.vibeDescription}</p>
      </div>

      <ol className="day-timeline__list">
        {day.events.map((event, index) => (
          <li
            key={index}
            className={`day-timeline__item${event.reserved ? ' day-timeline__item--reserved' : ''}`}
          >
            <span className="day-timeline__dot" aria-hidden="true" />
            <div className="day-timeline__content">
              <div className="day-timeline__row">
                {event.time && <span className="day-timeline__time">{event.time}</span>}
                <span className="day-timeline__title">{event.title}</span>
              </div>
              {event.note && <p className="day-timeline__note">{event.note}</p>}
              {event.reserved && <ReservedBadge label={event.reservedLabel} />}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
