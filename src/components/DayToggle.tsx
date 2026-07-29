import type { ItineraryDay } from '../data/itinerary'

interface DayToggleProps {
  days: ItineraryDay[]
  selectedId: string
  onSelect: (id: string) => void
}

export default function DayToggle({ days, selectedId, onSelect }: DayToggleProps) {
  return (
    <div className="day-toggle" role="tablist" aria-label="Veldu dag">
      {days.map((day) => {
        const isActive = day.id === selectedId
        return (
          <button
            key={day.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={`day-toggle__dot day-toggle__dot--${day.theme}${
              isActive ? ' day-toggle__dot--active' : ''
            }`}
            onClick={() => onSelect(day.id)}
          >
            <span className="day-toggle__marker" aria-hidden="true" />
            <span className="day-toggle__label">
              <span className="day-toggle__weekday">{day.weekday.slice(0, 3)}</span>
              <span className="day-toggle__date">{day.date.split('.')[0]}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
