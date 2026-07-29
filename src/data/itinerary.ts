export type DayTheme = 'sand' | 'apricot' | 'coral' | 'seafoam' | 'ocean' | 'lavender'

export interface ItineraryEvent {
  time?: string
  title: string
  reserved?: boolean
  note?: string
}

export interface ItineraryDay {
  id: string
  weekday: string
  date: string
  theme: DayTheme
  vibeTag: string
  vibeDescription: string
  events: ItineraryEvent[]
}

export const itinerary: ItineraryDay[] = [
  {
    id: 'day-1',
    weekday: 'Miðvikudagur',
    date: '19. ágúst',
    theme: 'sand',
    vibeTag: 'Lendum á Rivíerunni 🛬',
    vibeDescription:
      'Fyrsti dagurinn - frá Keflavík og beint í frönsku sumarsólina. Innritun á hótelið, drykkur í sólsetrinu og fyrsti kvöldverðurinn.',
    events: [
      { time: '06:20', title: 'Brottför frá Keflavík' },
      { time: '08:20', title: 'Flug til Nice' },
      { time: '14:35', title: 'Lent í Nice' },
      { time: '15:20', title: 'Taxi á hótelið', reserved: true },
      { time: '16:00', title: 'Innritun á Le 1932 Hôtel & Spa' },
      { time: '18:00', title: 'Fordrykkur á rooftopinu' },
      { time: '20:00', title: 'Kvöldverður á La Mamma í Juan-les-Pins', reserved: true },
    ],
  },
  {
    id: 'day-2',
    weekday: 'Fimmtudagur',
    date: '20. ágúst',
    theme: 'apricot',
    vibeTag: 'Fína og fjöruga kvöldið í Cannes ✨',
    vibeDescription:
      'Finnið sparigallann - glimmer og glans, því kvöldið í Cannes fab&fancy 40 - uppdressaðar, borðum frábæran mat í glamúr umhverfi, hlægjum og tökum kannski lagið!',
    events: [
      { title: 'Morgunmatur á hótelinu' },
      { title: 'Chill í Juan-les-Pins' },
      { title: 'Léttur hádegisverður í JLP + drop-in einhversstaðar' },
      { time: '15:00', title: 'Taxi til Cannes' },
      { time: '20:30', title: 'Kvöldverður í Cannes : Le Speakeasy', reserved: true },
    ],
  },
  {
    id: 'day-3',
    weekday: 'Föstudagur',
    date: '21. ágúst',
    theme: 'coral',
    vibeTag: 'ChaCha-dagurinn 🍹',
    vibeDescription:
      'Einkabeach club-dagurinn okkar. Sól, salt, öldur, svöl stemning og ískaldir kokteilar - ekkert nema núið.',
    events: [
      { title: 'Morgunmatur' },
      { title: 'Chill í JLP' },
      { time: '11:00', title: 'Mæting í ChaCha', reserved: true },
      { time: '14:00', title: 'Hádegisverður hjá ChaCha', reserved: true },
      { title: 'Áfram í ChaCha - sól og kokteilar fram eftir degi', reserved: true },
      { title: 'Easy bites í JLP' },
      { title: 'Óplanað kvöld' },
    ],
  },
  {
    id: 'day-4',
    weekday: 'Laugardagur',
    date: '22. ágúst',
    theme: 'seafoam',
    vibeTag: 'Gömlu bæirnir - Grasse & Antibes 🌸',
    vibeDescription:
      'Dagur þar sem við gleymum okkur í litlum, gömlum frönskum þorpum. Þröngar steinlagðar götur, góður ilmur, krúttleg hús og góðar stundir.',
    events: [
      { title: 'Grasse old town' },
      {
        time: '10:00',
        title: 'Parfumerie Molinard - búum til eigið ilmvatn',
        reserved: true,
        note: '60 Boulevard Victor Hugo, Grasse',
      },
      { time: '13:00', title: 'Hádegisverður í Grasse' },
      { title: 'Antibes old town' },
      { time: '19:30', title: 'Kvöldverður í Antibes : Restó Nananere', reserved: true },
    ],
  },
  {
    id: 'day-5',
    weekday: 'Sunnudagur',
    date: '23. ágúst',
    theme: 'ocean',
    vibeTag: 'Bátsferð, sjór og eyjur ⛵',
    vibeDescription:
      'Heill dagur á sjó, franska rivíeran eins og hún leggur sig - þetta verður einn af þeim dögum sem við tölum um árum saman.',
    events: [
      { time: '09:00', title: 'Bátsferð leggur af stað', reserved: true },
      { title: 'Sigling og eyjahopp allan daginn', reserved: true },
      {
        time: '14:00',
        title: 'Hádegisverður : La Tonnelle',
        reserved: true,
        note: 'Dresscode: bannað að vera í sundfatnaði · missum borðið ef mætum seint',
      },
      { time: '18:00', title: 'Komin úr bátsferð' },
      { title: 'Easy bites í JLP' },
      { title: 'Óplanað kvöld' },
    ],
  },
  {
    id: 'day-6',
    weekday: 'Mánudagur',
    date: '24. ágúst',
    theme: 'lavender',
    vibeTag: 'Heimför 🛫',
    vibeDescription:
      'Síðasti morgunninn í sólinni áður en förinni er heitið heim - róleg kveðjustund við Miðjarðarhafið.',
    events: [
      { title: 'Morgunmatur' },
      { title: 'Chill í JLP' },
      { time: '12:40', title: 'Taxi á flugvöll', reserved: true },
      { time: '13:20', title: 'Á flugvellinum' },
      { time: '15:35', title: 'Flug heim' },
      { time: '18:00', title: 'Lent á Íslandi' },
    ],
  },
]

export interface Tip {
  title: string
  description: string
}

export const tips: Tip[] = [
  {
    title: 'Café Azul',
    description: 'Drop-in staður fyrir kaffi og léttar veitingar - fínt að þekkja fyrir chill morgna.',
  },
]
