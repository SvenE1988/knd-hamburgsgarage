// Alle Leistungen als typisierte Daten. Jede Leistung erzeugt eine SEO-Seite
// unter /leistungen/<slug>/. Preise = Richt-/Platzhalterpreise (Kunde bestätigt final).

export type ServiceFaq = { q: string; a: string };
export type ServiceBlock = { title: string; text: string };
export type PriceItem = { label: string; from: number };
export type ServicePrice = { from: number; items?: PriceItem[] };

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  blocks: ServiceBlock[];
  bullets: string[];
  faq: ServiceFaq[];
  related: string[];
  bookable: boolean; // online über GHL buchbar?
  price?: ServicePrice;
};

export const services: Service[] = [
  {
    slug: "inspektion-wartung",
    name: "Inspektion & Wartung",
    navLabel: "Inspektion & Wartung",
    tagline: "Inspektion und Ölservice nach Herstellervorgaben – mitten in Eimsbüttel",
    metaTitle: "Inspektion & Wartung in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Inspektion und Ölservice nach Herstellervorgaben für alle Marken – ohne Verlust der Garantie. Ihr KFZ-Meisterbetrieb in Hamburg-Eimsbüttel. Jetzt Termin sichern.",
    heroImage: "/images/werkstatt-07.webp",
    heroAlt: "Ölservice in der Werkstatt der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Die regelmäßige Inspektion ist der wichtigste Beitrag zu Sicherheit, Werterhalt und Zuverlässigkeit Ihres Fahrzeugs. In unserem Meisterbetrieb in Hamburg-Eimsbüttel führen wir Inspektionen exakt nach den Vorgaben Ihres Fahrzeugherstellers durch – für alle Marken und Modelle.",
      "Als freie Werkstatt arbeiten wir mit Originalersatzteilen in Erstausrüsterqualität und dokumentieren jeden Service im Serviceheft. So bleibt Ihre Herstellergarantie erhalten – bei fairen Preisen und ehrlicher Beratung.",
    ],
    blocks: [
      { title: "Inspektion nach Herstellervorgabe", text: "Wir arbeiten den kompletten Wartungsplan Ihres Herstellers ab – inklusive Dokumentation im Serviceheft." },
      { title: "Ölservice & Filterwechsel", text: "Motoröl in der korrekten Freigabe sowie Öl-, Luft-, Innenraum- und Kraftstofffilter nach Bedarf." },
      { title: "Sicht- & Funktionsprüfung", text: "Bremsen, Fahrwerk, Beleuchtung, Reifen und Flüssigkeitsstände werden geprüft und protokolliert." },
      { title: "Originalteile & Garantieerhalt", text: "Erstausrüsterqualität sichert Funktion und Werterhalt – ohne Verlust der Herstellergarantie." },
    ],
    bullets: ["Alle Marken & Modelle", "Originalteile in Erstausrüsterqualität", "Garantie bleibt erhalten", "Kostenvoranschlag vorab"],
    faq: [
      { q: "Bleibt meine Herstellergarantie bei einer freien Werkstatt erhalten?", a: "Ja. Wir führen die Inspektion nach Herstellervorgaben mit passenden Originalersatzteilen durch und dokumentieren sie. Ihre Neuwagen- bzw. Herstellergarantie bleibt erhalten." },
      { q: "Wie oft sollte ich zur Inspektion?", a: "Maßgeblich sind die Intervalle Ihres Herstellers – meist nach Laufleistung oder Zeit. Die Serviceanzeige im Fahrzeug oder wir sagen Ihnen, wann es so weit ist." },
      { q: "Bekomme ich ein Ersatzfahrzeug?", a: "Auf Wunsch stellen wir Ihnen einen Werkstattersatzwagen bereit, damit Sie in Eimsbüttel und ganz Hamburg mobil bleiben." },
    ],
    related: ["hu-au", "bremsenservice", "werkstattersatzwagen"],
    bookable: true,
    price: { from: 199, items: [
      { label: "Ölwechsel", from: 119 },
      { label: "Innenraumfilter", from: 39 },
      { label: "Luftfilter", from: 29 },
      { label: "Zündkerzen", from: 79 },
    ] },
  },
  {
    slug: "hu-au",
    name: "HU & AU (Haupt- und Abgasuntersuchung)",
    navLabel: "HU / AU",
    tagline: "TÜV-Termin in Eimsbüttel – inklusive Vorabcheck",
    metaTitle: "HU/AU & TÜV in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Haupt- und Abgasuntersuchung direkt in Hamburg-Eimsbüttel – mit Vorabcheck und kleinen Reparaturen, damit Ihr Auto sicher durch HU und AU kommt. Jetzt Termin machen.",
    heroImage: "/images/werkstatt-04.webp",
    heroAlt: "Fahrzeug auf der Hebebühne mit Abgasabsaugung in der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Die Hauptuntersuchung (HU) und die Abgasuntersuchung (AU) stehen alle zwei Jahre an – und sollten kein Stress sein. In unserem Meisterbetrieb in Hamburg-Eimsbüttel organisieren wir die Prüfung für Sie und bereiten Ihr Fahrzeug optimal darauf vor.",
      "Auf Wunsch prüfen wir vorab alle relevanten Punkte und beheben kleinere Mängel direkt vor Ort. So vermeiden Sie eine Nachprüfung und kommen sicher durch HU und AU – für Benziner, Diesel und Hybride.",
    ],
    blocks: [
      { title: "HU & AU vor Ort", text: "Die Prüfung erfolgt in Zusammenarbeit mit einer amtlich anerkannten Prüforganisation direkt bei uns im Betrieb." },
      { title: "Vorabcheck", text: "Wir kontrollieren Bremsen, Beleuchtung, Achsen, Reifen und Abgaswerte, bevor der Prüfer kommt." },
      { title: "Mängel direkt beheben", text: "Kleinere Beanstandungen reparieren wir auf Wunsch sofort – das spart die Nachuntersuchung." },
      { title: "Plakette ohne Umwege", text: "Sie erhalten Ihre neue Prüfplakette, ohne mehrere Termine an verschiedenen Orten wahrnehmen zu müssen." },
    ],
    bullets: ["Benziner, Diesel & Hybrid", "Vorabcheck inklusive möglich", "Kleinreparaturen direkt vor Ort", "Ein Termin – ein Ansprechpartner"],
    faq: [
      { q: "Kann ich HU und AU bei euch zusammen machen lassen?", a: "Ja. Die AU führen wir im Betrieb durch, die HU nimmt eine anerkannte Prüforganisation direkt bei uns ab – beides an einem Termin." },
      { q: "Was passiert, wenn mein Auto Mängel hat?", a: "Kleinere Mängel beheben wir auf Wunsch sofort, sodass keine kostenpflichtige Nachprüfung nötig wird. Größere Reparaturen besprechen wir vorher transparent mit Ihnen." },
      { q: "Warum kann ich die HU/AU nicht online buchen?", a: "Die Hauptuntersuchung nimmt ein externer Prüfer zu festen Terminen bei uns ab. Damit alles zusammenpasst, koordinieren wir den Termin kurz persönlich mit Ihnen – ein Anruf genügt." },
    ],
    related: ["inspektion-wartung", "bremsenservice", "achsvermessung"],
    bookable: false,
    price: { from: 149, items: [
      { label: "Vorabcheck", from: 29 },
      { label: "Nachuntersuchung", from: 29 },
      { label: "Lampenservice", from: 19 },
    ] },
  },
  {
    slug: "bremsenservice",
    name: "Bremsenservice",
    navLabel: "Bremsenservice",
    tagline: "Bremsen prüfen, warten und erneuern – sicher durch Hamburg",
    metaTitle: "Bremsenservice in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Bremsbeläge, Bremsscheiben und Bremsflüssigkeit vom Meisterbetrieb in Hamburg-Eimsbüttel. Prüfung, Wartung und Reparatur für alle Marken. Jetzt Termin vereinbaren.",
    heroImage: "/images/werkstatt-08.webp",
    heroAlt: "Hochwertiges Werkzeug für den Bremsenservice der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Die Bremse ist das wichtigste Sicherheitssystem Ihres Fahrzeugs. Im dichten Stadtverkehr von Hamburg und Eimsbüttel ist sie besonders gefordert. In unserem Meisterbetrieb prüfen, warten und erneuern wir Bremsen für alle Marken – zuverlässig und mit hochwertigen Teilen.",
      "Ob quietschende Beläge, nachlassende Bremswirkung oder die fällige Erneuerung von Scheiben und Belägen: Wir beraten Sie ehrlich und reparieren nur, was wirklich nötig ist.",
    ],
    blocks: [
      { title: "Bremsen-Check", text: "Prüfung von Belägen, Scheiben, Leitungen und Bremsflüssigkeit inklusive Sicherheitsbewertung." },
      { title: "Beläge & Scheiben", text: "Fachgerechter Austausch von Bremsbelägen und Bremsscheiben in Erstausrüsterqualität." },
      { title: "Bremsflüssigkeit", text: "Wechsel der Bremsflüssigkeit nach Herstellervorgabe für einen sicheren Druckpunkt." },
      { title: "ABS & Sensorik", text: "Diagnose von ABS-, ESP- und Sensorik-Fehlern mit moderner Werkstatttechnik." },
    ],
    bullets: ["Sicherheitsrelevante Prüfung", "Beläge & Scheiben für alle Marken", "Ehrliche Beratung", "Faire Festpreise"],
    faq: [
      { q: "Woran erkenne ich, dass meine Bremsen fällig sind?", a: "Typische Anzeichen sind Quietschen, ein längerer Bremsweg, Vibrationen beim Bremsen oder eine Warnleuchte. Im Zweifel prüfen wir die Bremsen kurzfristig für Sie." },
      { q: "Wie lange dauert ein Bremsenwechsel?", a: "Ein Belag- und Scheibenwechsel an einer Achse ist meist am selben Tag erledigt. Den genauen Aufwand nennen wir Ihnen vorab." },
    ],
    related: ["inspektion-wartung", "achsvermessung", "hu-au"],
    bookable: true,
    price: { from: 249, items: [
      { label: "Bremsencheck", from: 19 },
      { label: "Bremsflüssigkeit wechseln", from: 69 },
      { label: "Bremsbeläge vorne", from: 149 },
      { label: "Scheiben + Beläge vorne", from: 249 },
    ] },
  },
  {
    slug: "achsvermessung",
    name: "Achsvermessung",
    navLabel: "Achsvermessung",
    tagline: "Präzise Fahrwerkseinstellung für sicheres Fahren und weniger Reifenverschleiß",
    metaTitle: "Achsvermessung in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Moderne Achsvermessung in Hamburg-Eimsbüttel: korrekt eingestellte Fahrwerksgeometrie für mehr Sicherheit und weniger Reifenverschleiß. Jetzt Termin sichern.",
    heroImage: "/images/felge-audi.webp",
    heroAlt: "Rad und Felge bei der Achsvermessung in der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Jedes Fahrzeug hat eine spezifische Achsgeometrie, die für die Fahreigenschaften entscheidend ist. Nach einer Fahrwerksreparatur, dem Wechsel von Fahrwerksteilen oder bei ungleichmäßigem Reifenverschleiß sollte eine Achsvermessung durchgeführt werden.",
      "In der Hamburgs GaRage in Hamburg-Eimsbüttel stellen wir Ihr Fahrzeug mit modernster Achsvermessungstechnik ein. Ein korrekt eingestelltes Fahrwerk fährt sich sicherer, spurtreu und reduziert den Reifenverschleiß spürbar.",
    ],
    blocks: [
      { title: "Computergestützte Vermessung", text: "Präzise Messung von Spur und Sturz mit moderner Vermessungstechnik." },
      { title: "Einstellung nach Sollwerten", text: "Korrektur der Fahrwerksgeometrie exakt nach Herstellervorgaben." },
      { title: "Eingangs- & Kontrollmessung", text: "Dokumentierte Messwerte vor und nach der Einstellung – volle Transparenz." },
      { title: "Weniger Verschleiß", text: "Korrekte Geometrie schont Reifen, Fahrwerk und Spritverbrauch." },
    ],
    bullets: ["Modernste Messtechnik", "Mehr Sicherheit & Spurtreue", "Weniger Reifenverschleiß", "Dokumentierte Messwerte"],
    faq: [
      { q: "Wann ist eine Achsvermessung sinnvoll?", a: "Nach Bordsteinkontakt oder Schlaglöchern, bei einseitigem Reifenverschleiß, schiefem Lenkrad oder nach Arbeiten am Fahrwerk – und grundsätzlich beim Wechsel auf neue Reifen." },
      { q: "Mein Auto zieht zur Seite – hilft eine Achsvermessung?", a: "Sehr oft ja. Ein Seitenzug oder ein schief stehendes Lenkrad deutet auf eine falsche Fahrwerksgeometrie hin, die wir messen und einstellen." },
    ],
    related: ["reifenservice", "bremsenservice", "inspektion-wartung"],
    bookable: true,
    price: { from: 89, items: [
      { label: "Spur einstellen", from: 59 },
      { label: "Feinjustierung", from: 29 },
      { label: "Fahrwerkscheck", from: 29 },
    ] },
  },
  {
    slug: "reifenservice",
    name: "Reifenservice",
    navLabel: "Reifenservice",
    tagline: "Reifenwechsel, Auswuchten und Einlagerung – mit eigenem Reifenlager",
    metaTitle: "Reifenservice & Einlagerung in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Reifenwechsel, Auswuchten und Einlagerung in Hamburg-Eimsbüttel – mit eigenem Reifenlager. Kein Schleppen, kein Platzproblem. Jetzt Reifentermin vereinbaren.",
    heroImage: "/images/werkstatt-03.webp",
    heroAlt: "Reifen und Felgen beim Reifenservice der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Zweimal im Jahr steht der Reifenwechsel an – in einer Stadt wie Hamburg, in der viele in einer Wohnung ohne Keller oder Garage leben, oft ein echtes Platzproblem. Hier hilft unser eigenes Reifenlager direkt am Betrieb in Eimsbüttel.",
      "Sie lagern Ihre Räder fachgerecht bei uns ein und müssen zum Wechsel nichts schleppen. Wir wechseln, wuchten und prüfen Ihre Reifen – und beraten Sie bei Neukauf passend zu Fahrzeug und Fahrprofil.",
    ],
    blocks: [
      { title: "Eigenes Reifenlager", text: "Fachgerechte Einlagerung Ihrer Räder direkt bei uns – ohne Schleppen, ohne Platzproblem zu Hause." },
      { title: "Wechsel & Auswuchten", text: "Saisonaler Reifenwechsel inklusive Auswuchten für ruhigen Lauf und gleichmäßigen Verschleiß." },
      { title: "Reifenprüfung", text: "Kontrolle von Profiltiefe, Reifendruck und Beschädigungen an Lauffläche und Flanke." },
      { title: "Neureifen-Beratung", text: "Beratung und Montage neuer Reifen passend zu Fahrzeug, Budget und Fahrprofil." },
    ],
    bullets: ["Eigenes Reifenlager in Eimsbüttel", "Wechsel, Wuchten & Prüfen", "Kein Schleppen mehr", "Herstellerunabhängige Beratung"],
    faq: [
      { q: "Wie funktioniert die Einlagerung?", a: "Sie lassen Ihre Räder nach dem Wechsel einfach bei uns. Wir lagern sie fachgerecht ein und montieren sie zum nächsten Saisonwechsel wieder – Sie müssen nichts transportieren." },
      { q: "Wann sollte ich die Reifen wechseln?", a: "Als Faustregel gilt „von O bis O“ – von Ostern bis Oktober Sommerreifen. Sobald die Temperaturen dauerhaft fallen, sind Winterreifen sinnvoll." },
      { q: "Ab welcher Profiltiefe brauche ich neue Reifen?", a: "Gesetzlich sind 1,6 mm Minimum, wir empfehlen den Wechsel jedoch früher – bei Sommerreifen ab ca. 3 mm, bei Winterreifen ab ca. 4 mm." },
    ],
    related: ["achsvermessung", "inspektion-wartung", "klimaservice"],
    bookable: true,
    price: { from: 79, items: [
      { label: "Räderwechsel", from: 39 },
      { label: "Auswuchten", from: 49 },
      { label: "Einlagerung (Saison)", from: 49 },
      { label: "Reifenmontage", from: 79 },
    ] },
  },
  {
    slug: "klimaservice",
    name: "Klimaservice",
    navLabel: "Klimaservice",
    tagline: "Klimaanlage warten, befüllen und desinfizieren",
    metaTitle: "Klimaservice in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Klimaservice in Hamburg-Eimsbüttel: Wartung, Befüllung, Desinfektion und Lecksuche für eine leistungsstarke, hygienische Klimaanlage. Jetzt Termin vereinbaren.",
    heroImage: "/images/werkstatt-smart.webp",
    heroAlt: "Fahrzeug beim Klimaservice in der Werkstatt der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Eine Klimaanlage verliert jedes Jahr Kältemittel und damit an Leistung. Spätestens wenn die Kühlung nachlässt oder ein unangenehmer Geruch auftritt, ist ein Klimaservice fällig. In unserem Betrieb in Hamburg-Eimsbüttel bringen wir Ihre Klimaanlage wieder auf volle Leistung.",
      "Wir warten Systeme mit den gängigen Kältemitteln, prüfen auf Dichtheit und sorgen mit einer Desinfektion für ein hygienisch sauberes Innenraumklima – wichtig gerade für Allergiker.",
    ],
    blocks: [
      { title: "Klima-Wartung & Befüllung", text: "Absaugen, Trocknen und Neubefüllen mit der korrekten Kältemittelmenge nach Herstellervorgabe." },
      { title: "Funktions- & Drucktest", text: "Prüfung von Kühlleistung, Kompressor und Systemdruck." },
      { title: "Lecksuche", text: "Aufspüren von Undichtigkeiten, damit das Kältemittel nicht erneut entweicht." },
      { title: "Desinfektion & Filter", text: "Hygiene-Reinigung gegen Gerüche und Wechsel des Innenraumfilters." },
    ],
    bullets: ["Für gängige Kältemittel", "Mehr Kühlleistung", "Hygienisch sauberer Innenraum", "Ideal vor dem Sommer"],
    faq: [
      { q: "Wie oft braucht die Klimaanlage einen Service?", a: "Wir empfehlen alle ein bis zwei Jahre einen Klimaservice, da das System jährlich Kältemittel verliert und an Leistung einbüßt." },
      { q: "Warum riecht meine Klimaanlage unangenehm?", a: "Im Verdampfer sammeln sich Feuchtigkeit, Bakterien und Pilze. Eine Desinfektion und ein neuer Innenraumfilter beseitigen den Geruch." },
    ],
    related: ["inspektion-wartung", "reifenservice", "werkstattersatzwagen"],
    bookable: true,
    price: { from: 99, items: [
      { label: "Desinfektion", from: 29 },
      { label: "Kältemittel auffüllen", from: 79 },
      { label: "Innenraumfilter", from: 39 },
      { label: "Lecksuche / Klimacheck", from: 49 },
    ] },
  },
  {
    slug: "unfall-lack-glas",
    name: "Unfall, Lack & Glas",
    navLabel: "Unfall, Lack & Glas",
    tagline: "Unfallinstandsetzung, Lackierarbeiten und Glasschäden aus einer Hand",
    metaTitle: "Unfallreparatur, Lack & Glas in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Unfallinstandsetzung, Lackierarbeiten und Glasschäden in Hamburg-Eimsbüttel – inklusive Unfallabwicklung. Wir bringen Ihr Auto sicher und sauber wieder in Form.",
    heroImage: "/images/werkstatt-01.webp",
    heroAlt: "Reparaturannahme der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Nach einem Unfall oder bei Beschädigungen an Karosserie, Lack oder Scheiben sind wir Ihr Ansprechpartner in Hamburg-Eimsbüttel. Wir koordinieren die Instandsetzung von der Schadensaufnahme bis zur Rückgabe – und nehmen Ihnen den Aufwand ab.",
      "Karosserie- und Unfallinstandsetzung führen wir fachgerecht durch. Lackierarbeiten übernimmt ein erfahrenes Partnerunternehmen, mit dem wir eng und zuverlässig zusammenarbeiten. So erhalten Sie ein sauberes Ergebnis aus einer Hand.",
    ],
    blocks: [
      { title: "Unfallinstandsetzung", text: "Fachgerechte Reparatur von Karosserie- und Unfallschäden – auf Wunsch mit Unterstützung bei der Unfallabwicklung." },
      { title: "Lackierarbeiten (Partner)", text: "Professionelle Lackierungen und Lackausbesserungen über unser erfahrenes Partnerunternehmen." },
      { title: "Glasschäden", text: "Reparatur und Austausch von Frontscheibe und Fahrzeugglas inklusive Abwicklung mit der Versicherung." },
      { title: "Alles koordiniert", text: "Ein Ansprechpartner für Karosserie, Lack und Glas – wir organisieren die Schritte für Sie." },
    ],
    bullets: ["Unfallinstandsetzung", "Lack über Partnerbetrieb", "Steinschlag & Scheibentausch", "Hilfe bei der Schadensabwicklung"],
    faq: [
      { q: "Übernehmt ihr auch die Abwicklung mit der Versicherung?", a: "Auf Wunsch unterstützen wir Sie bei der Schadensaufnahme und der Abwicklung mit der Versicherung, damit für Sie möglichst wenig Aufwand entsteht." },
      { q: "Wird in der Werkstatt selbst lackiert?", a: "Die Lackierarbeiten übernimmt ein eng mit uns zusammenarbeitendes Partnerunternehmen. Sie haben trotzdem nur einen Ansprechpartner – uns." },
      { q: "Kann ein Steinschlag repariert werden?", a: "Kleinere Steinschläge lassen sich oft reparieren, ohne die ganze Scheibe zu tauschen. Ist der Schaden zu groß, tauschen wir die Scheibe fachgerecht aus." },
    ],
    related: ["werkstattersatzwagen", "inspektion-wartung", "hu-au"],
    bookable: false,
  },
  {
    slug: "werkstattersatzwagen",
    name: "Werkstattersatzwagen",
    navLabel: "Werkstattersatzwagen",
    tagline: "Mobil bleiben, während wir Ihr Auto reparieren",
    metaTitle: "Werkstattersatzwagen in Hamburg-Eimsbüttel | Hamburgs GaRage",
    metaDescription:
      "Werkstattersatzwagen in Hamburg-Eimsbüttel: Bleiben Sie mobil, während wir Ihr Fahrzeug warten oder reparieren. Auf Wunsch zu Ihrem Werkstatttermin. Jetzt anfragen.",
    heroImage: "/images/werkstatt-smart.webp",
    heroAlt: "Kompakter Werkstattersatzwagen der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Ihr Alltag in Hamburg soll nicht stillstehen, nur weil Ihr Auto in der Werkstatt ist. Deshalb stellen wir Ihnen auf Wunsch einen Werkstattersatzwagen bereit – damit Sie in Eimsbüttel und der ganzen Stadt mobil bleiben.",
      "Sagen Sie uns bei der Terminvereinbarung einfach Bescheid, wenn Sie ein Ersatzfahrzeug benötigen. So überbrücken Sie die Dauer von Inspektion, HU/AU oder Reparatur ganz entspannt.",
    ],
    blocks: [
      { title: "Ersatzwagen zum Termin", text: "Auf Wunsch steht zu Ihrem Werkstatttermin ein Fahrzeug bereit – einfach vorab anfragen." },
      { title: "Für Service & Reparatur", text: "Ideal, um die Zeit von Inspektion, HU/AU, Bremsen- oder Unfallreparatur zu überbrücken." },
      { title: "Unkomplizierte Abwicklung", text: "Schlüssel gegen Schlüssel – wir halten die Formalitäten so einfach wie möglich." },
    ],
    bullets: ["Mobil bleiben in Hamburg", "Auf Wunsch zum Termin", "Für alle größeren Arbeiten", "Einfach vorab anfragen"],
    faq: [
      { q: "Ist der Werkstattersatzwagen kostenlos?", a: "Bitte fragen Sie den Ersatzwagen bei der Terminvereinbarung an. Wir informieren Sie dann transparent über Verfügbarkeit und mögliche Konditionen." },
      { q: "Muss ich den Ersatzwagen reservieren?", a: "Ja, da die Zahl der Fahrzeuge begrenzt ist, reservieren Sie ihn am besten direkt bei der Terminvereinbarung." },
    ],
    related: ["inspektion-wartung", "unfall-lack-glas", "hu-au"],
    bookable: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);
