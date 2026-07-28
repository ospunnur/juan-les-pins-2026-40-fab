export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__waves" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="var(--cream)"
            d="M0,64 C240,110 480,10 720,40 C960,70 1200,110 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      <p className="hero__eyebrow">Millurnar fara á stjá · 19.–24. ágúst 2026</p>
      <h1 className="hero__headline">
        Juan Les Pins &amp; Antibes
        <span className="hero__headline-line">Fab 40 🥂</span>
      </h1>
      <p className="hero__subtitle">
        Fimm dagar, átta vinkonur, ein rúmlega fjörug rivíera. Sól, salt og systrafélag
        í anda villtrar ró.
      </p>
    </header>
  )
}
