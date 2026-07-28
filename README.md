# Juan-les-Pins & Antibes — Fab 40 🥂

Microsite for the trip, 19.–24. ágúst 2026. Built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Outputs static files to `dist/`, ready to deploy to Netlify.

## Editing the itinerary

Day-by-day content lives in `src/data/itinerary.ts`. Each event can be marked
`reserved: true` to show the "Frátekið fyrir hópinn" badge (used for anything
locked in for the whole group).
