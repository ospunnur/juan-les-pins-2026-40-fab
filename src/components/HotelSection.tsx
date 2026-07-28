export default function HotelSection() {
  return (
    <section className="hotel" id="hotel">
      <div className="hotel__intro">
        <p className="section-eyebrow">Heimili okkar í fimm daga</p>
        <h2>Le 1932 Hôtel &amp; Spa</h2>
        <p className="hotel__lead">
          Art Deco-hótel með fjögurra stjörnu andrými á Cap d'Antibes - endurgert í anda
          gullaldar frönsku rivíerunnar, með útsýni yfir Miðjarðarhafið svo langt sem
          augað eygir.
        </p>
      </div>
      <div className="hotel__grid">
        <div className="hotel__card">
          <h3>Rooftop &amp; sundlaug</h3>
          <p>
            Svalandi sundlaug og sólbekkir uppi á þaki hótelsins - fullkominn staður
            fyrir kokteil í kvöldsólinni.
          </p>
        </div>
        <div className="hotel__card">
          <h3>Le Quinto Cielo</h3>
          <p>
            Veitinga- og barpallur með útsýni yfir hafið - staðurinn fyrir Dolce Vita
            augnablikin okkar.
          </p>
        </div>
        <div className="hotel__card">
          <h3>Spa Codage</h3>
          <p>
            Persónuleg dekurmeðferð, sauna og núvitund fyrir þær sem vilja hlaða
            batteríin milli stranda- og bæjarferða.
          </p>
        </div>
        <div className="hotel__card">
          <h3>Staðsetning</h3>
          <p>
            5 Avenue Saramartel, Antibes - á jaðri Cap d'Antibes, gengt bæði
            Juan-les-Pins og gamla bænum í Antibes.
          </p>
        </div>
      </div>
      <a
        className="hotel__link"
        href="https://www.le1932hotelspa.com/en/"
        target="_blank"
        rel="noreferrer"
      >
        Skoða hótelið nánar ↗
      </a>
    </section>
  )
}
