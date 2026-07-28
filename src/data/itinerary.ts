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
  highlight?: boolean
  events: ItineraryEvent[]
  tip?: { title: string; description: string }
}

export const itinerary: ItineraryDay[] = [
  {
    id: 'day-1',
    weekday: 'Miðvikudagur',
    date: '19. ágúst',
    theme: 'sand',
    vibeTag: 'Lending á Rivíerunni',
    vibeDescription:
      'Fyrsti dagurinn - úr Keflavík og beint í frönsku sumarsóluna. Innritun á hótelið, freyðivínsglas á sólsetrinu og fyrsti sameiginlegi kvöldverðurinn.',
    events: [
      { time: '06:20', title: 'Brottför frá Keflavík' },
      { time: '08:20', title: 'Flug til Nice' },
      { time: '14:35', title: 'Lent í Nice' },
      { time: '15:20', title: 'Taxi á hótelið', reserved: true },
      { time: '16:00', title: 'Innritun á Le 1932 Hôtel & Spa' },
      { time: '18:00', title: 'Fordrykkur á rooftopinu' },
      { time: '20:00', title: 'Kvöldverður á La Mamma í Juan-les-Pins', reserved: true },
    ],
    tip: {
      title: 'Café Azul',
      description: 'Drop-in staður fyrir kaffi og léttar veitingar - fínt að þekkja fyrir chill morgna.',
    },
  },
  {
    id: 'day-2',
    weekday: 'Fimmtudagur',
    date: '20. ágúst',
    theme: 'apricot',
    vibeTag: 'Fína kvöldið í Cannes',
    vibeDescription:
      'Peysan fína út úr töskunni. Kvöldið í Cannes er fyrir fínni útgáfuna af okkur öllum - dressað upp, borðað vel, hlegið í leynilegum speakeasy og kannski tekið lagið áður en yfir lýkur.',
    highlight: true,
    events: [
      { title: 'Morgunmatur á hótelinu' },
      { title: 'Chill í Juan-les-Pins' },
      { title: 'Léttur hádegisverður í JLP' },
      { title: 'Drop-in einhvers staðar' },
      { time: '15:00', title: 'Taxi til Cannes' },
      { title: 'Kvöldverður í Cannes', reserved: true },
      { time: '20:30', title: 'Le Speakeasy' },
    ],
  },
  {
    id: 'day-3',
    weekday: 'Föstudagur',
    date: '21. ágúst',
    theme: 'coral',
    vibeTag: 'ChaCha-dagurinn',
    vibeDescription:
      'Einkabeach club-dagurinn okkar. Sól, salt, öldur, svöl stemning og ískaldir kokteilar - ekkert nema núið.',
    highlight: true,
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
    vibeTag: 'Gömlu bæirnir - Grasse & Antibes',
    vibeDescription:
      'Dagur fyrir litlu, gömlu, frönsku þorpin. Flæktar steinlagðar götur, ilmvatnssaga og fyrir sum okkar: að búa til okkar eigið ilmvatn.',
    highlight: true,
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
      { title: 'Kvöldverður í Antibes', reserved: true },
      { time: '19:30', title: 'Restó Nananere' },
    ],
  },
  {
    id: 'day-5',
    weekday: 'Sunnudagur',
    date: '23. ágúst',
    theme: 'ocean',
    vibeTag: 'Báturinn & eyjan',
    vibeDescription:
      'Heill dagur á sjó og við eyjuna - þetta verður einn af þeim dögum sem við tölum um árum saman.',
    highlight: true,
    events: [
      { time: '09:00', title: 'Bátsferð leggur af stað', reserved: true },
      { title: 'Sigling og eyjan allan daginn', reserved: true },
      { title: 'Hádegisverður um borð', reserved: true },
      {
        time: '14:00',
        title: 'La Tonnelle',
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
    vibeTag: 'Heim á leið',
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
