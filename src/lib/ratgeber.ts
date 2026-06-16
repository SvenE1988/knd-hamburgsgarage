// Ratgeber-Artikel als typisierte Daten. Jeder Artikel erzeugt eine Seite
// unter /ratgeber/<slug>/ und erscheint automatisch in Übersicht, Startseite & Sitemap.

export type RatgeberSection = { h2?: string; paragraphs: string[]; bullets?: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  heroImage: string;
  heroAlt: string;
  intro: string[];
  sections: RatgeberSection[];
  relatedServices: string[];
};

export const articles: Article[] = [
  {
    slug: "inspektion-was-gehoert-dazu",
    title: "Inspektion beim Auto: Was gehört dazu – und bleibt die Garantie erhalten?",
    description:
      "Was bei der Inspektion geprüft wird, welche Intervalle gelten und warum die Herstellergarantie auch in der freien Werkstatt in Hamburg-Eimsbüttel erhalten bleibt.",
    date: "2026-06-02",
    heroImage: "/images/werkstatt-07.webp",
    heroAlt: "Ölservice und Inspektion in der Werkstatt der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Die Inspektion ist mehr als ein Ölwechsel: Sie hält Ihr Auto sicher, werthaltig und zuverlässig. Viele Autofahrerinnen und Autofahrer in Hamburg fragen sich aber, was dabei eigentlich passiert – und ob sie dafür wirklich zum teuren Vertragshändler müssen. Die kurze Antwort: müssen Sie nicht.",
    ],
    sections: [
      {
        h2: "Was bei der Inspektion geprüft wird",
        paragraphs: ["Eine Inspektion folgt dem Wartungsplan Ihres Fahrzeugherstellers. Geprüft, gewartet und bei Bedarf ersetzt werden unter anderem:"],
        bullets: [
          "Motoröl und Ölfilter sowie Luft-, Innenraum- und Kraftstofffilter",
          "Bremsen: Beläge, Scheiben und Bremsflüssigkeit",
          "Fahrwerk, Lenkung und Stoßdämpfer",
          "Beleuchtung, Scheibenwischer und alle Flüssigkeitsstände",
          "Reifen: Profil, Zustand und Reifendruck",
          "Batterie sowie sichtbare Leitungen und Schläuche",
        ],
      },
      {
        h2: "Welche Intervalle gelten?",
        paragraphs: [
          "Maßgeblich sind die Vorgaben Ihres Herstellers – meist nach Laufleistung (oft alle 15.000 bis 30.000 km) oder nach Zeit (in der Regel jährlich). Moderne Fahrzeuge melden die fällige Wartung über die Serviceanzeige.",
          "Wer viel im Stadtverkehr von Hamburg unterwegs ist – mit häufigen Kaltstarts und Stop-and-go – bewegt sich eher im „erschwerten Betrieb“, bei dem kürzere Intervalle sinnvoll sein können.",
        ],
      },
      {
        h2: "Freie Werkstatt und Garantie – passt das zusammen?",
        paragraphs: [
          "Ja. Dank EU-Recht bleibt Ihre Neuwagen- bzw. Herstellergarantie erhalten, wenn die Inspektion nach Herstellervorgaben und mit qualitativ gleichwertigen Ersatzteilen durchgeführt und ordentlich dokumentiert wird.",
          "Genau so arbeiten wir: nach Plan, mit Originalteilen in Erstausrüsterqualität und mit Eintrag im Serviceheft – in der Regel deutlich günstiger als beim Vertragshändler.",
        ],
      },
      {
        h2: "Inspektion in Eimsbüttel – ohne Stress",
        paragraphs: [
          "In unserem Meisterbetrieb an der Osterstraße erklären wir vorab transparent, was ansteht, und reparieren nur, was wirklich nötig ist. Auf Wunsch erhalten Sie einen Werkstattersatzwagen, damit Sie währenddessen mobil bleiben.",
        ],
      },
    ],
    relatedServices: ["inspektion-wartung", "hu-au", "werkstattersatzwagen"],
  },
  {
    slug: "hu-au-vorbereiten",
    title: "HU/AU in Hamburg vorbereiten: So kommt Ihr Auto sicher durch den TÜV",
    description:
      "Mit dieser Checkliste bereiten Sie Ihr Auto auf Haupt- und Abgasuntersuchung vor und vermeiden eine Nachprüfung – Tipps von Ihrem KFZ-Meisterbetrieb in Hamburg-Eimsbüttel.",
    date: "2026-04-08",
    heroImage: "/images/werkstatt-04.webp",
    heroAlt: "Fahrzeug auf der Hebebühne – Vorbereitung auf HU/AU bei der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Alle zwei Jahre steht die Hauptuntersuchung an. Mit ein wenig Vorbereitung kommen Sie ohne Stress und ohne teure Nachprüfung durch HU und AU. Diese Punkte können Sie selbst prüfen – oder vorab von uns prüfen lassen.",
    ],
    sections: [
      {
        h2: "Die wichtigste Checkliste vor der HU",
        paragraphs: ["Kontrollieren Sie vorab vor allem diese Punkte:"],
        bullets: [
          "Beleuchtung: Funktionieren alle Lampen vorn, hinten und am Kennzeichen?",
          "Reifen: Ausreichend Profil und keine Beschädigungen?",
          "Bremsen: Keine Geräusche, guter Druckpunkt?",
          "Flüssigkeiten: Öl-, Kühl- und Scheibenwaschwasserstand in Ordnung?",
          "Warnleuchten: Leuchtet eine Kontrollleuchte dauerhaft?",
          "Scheibenwischer und Hupe funktionsfähig?",
        ],
      },
      {
        h2: "Häufige Gründe, warum Autos durchfallen",
        paragraphs: ["Die meisten Mängel sind harmlos und schnell behoben. Besonders oft sind es:"],
        bullets: [
          "Defekte Beleuchtung (der Klassiker)",
          "Zu wenig Reifenprofil oder beschädigte Reifen",
          "Verschlissene Bremsen oder zu alte Bremsflüssigkeit",
          "Ölundichtigkeiten und gerissene Achsmanschetten",
          "Eine dauerhaft leuchtende Motorkontrollleuchte",
        ],
      },
      {
        h2: "Vorabcheck spart die Nachprüfung",
        paragraphs: [
          "Wer eine kostenpflichtige Nachprüfung vermeiden will, lässt das Fahrzeug vorher durchsehen. In unserem Betrieb in Eimsbüttel prüfen wir die relevanten Punkte und beheben kleinere Mängel direkt – so kommt Ihr Auto in einem Termin durch HU und AU. Die AU führen wir im Haus durch, die HU nimmt eine amtlich anerkannte Prüforganisation direkt bei uns ab.",
        ],
      },
      {
        h2: "Mobil bleiben während der Prüfung",
        paragraphs: [
          "Auf Wunsch stellen wir Ihnen für die Dauer der Untersuchung einen Werkstattersatzwagen bereit, damit Sie in Hamburg flexibel bleiben. Den HU/AU-Termin stimmen wir kurz telefonisch mit Ihnen ab.",
        ],
      },
    ],
    relatedServices: ["hu-au", "inspektion-wartung", "werkstattersatzwagen"],
  },
  {
    slug: "achsvermessung-wann-sinnvoll",
    title: "Achsvermessung: Wann sie sinnvoll ist – und woran Sie eine falsche Spur erkennen",
    description:
      "Schiefes Lenkrad, einseitiger Reifenverschleiß, Seitenzug: Wann eine Achsvermessung wirklich nötig ist und was sie bringt – erklärt von Ihrer Werkstatt in Hamburg-Eimsbüttel.",
    date: "2026-05-20",
    heroImage: "/images/felge-audi.webp",
    heroAlt: "Felge und Reifen zum Thema Achsvermessung, Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Eine falsch eingestellte Fahrwerksgeometrie kostet bares Geld: Reifen verschleißen schneller, der Spritverbrauch steigt und das Fahrverhalten leidet. Die gute Nachricht – eine Achsvermessung schafft schnell Klarheit.",
    ],
    sections: [
      {
        h2: "Typische Anzeichen für eine falsche Spur",
        paragraphs: ["Diese Symptome deuten darauf hin, dass eine Vermessung sinnvoll ist:"],
        bullets: [
          "Das Lenkrad steht bei Geradeausfahrt schief.",
          "Das Auto zieht spürbar zur Seite.",
          "Die Reifen sind einseitig (innen oder außen) stärker abgefahren.",
          "Nach Bordsteinkontakt, Schlaglöchern oder Arbeiten am Fahrwerk.",
        ],
      },
      {
        h2: "Warum sich die Vermessung lohnt",
        paragraphs: [
          "Eine korrekt eingestellte Achse sorgt für sicheres, spurtreues Fahren und reduziert den Reifenverschleiß deutlich. Gerade im Stop-and-go-Verkehr in Hamburg und auf den Kopfsteinpflaster-Abschnitten rund um Eimsbüttel wird das Fahrwerk stark beansprucht.",
        ],
      },
      {
        h2: "So läuft die Achsvermessung ab",
        paragraphs: [
          "Wir messen mit moderner, computergestützter Technik Spur und Sturz, vergleichen die Werte mit den Herstellervorgaben und stellen das Fahrwerk exakt ein. Die Messwerte vor und nach der Einstellung dokumentieren wir – volle Transparenz.",
        ],
      },
      {
        h2: "Am besten direkt beim Reifenwechsel",
        paragraphs: [
          "Wenn Sie ohnehin neue Reifen aufziehen, ist der ideale Zeitpunkt für eine Achsvermessung gekommen – so schützen Sie die neuen Reifen von Anfang an vor ungleichmäßigem Verschleiß.",
        ],
      },
    ],
    relatedServices: ["achsvermessung", "reifenservice", "bremsenservice"],
  },
  {
    slug: "reifenwechsel-einlagerung-hamburg",
    title: "Reifenwechsel & Einlagerung in Hamburg: das Platzproblem clever lösen",
    description:
      "Von O bis O: Wann der Reifenwechsel ansteht, ab welcher Profiltiefe neue Reifen fällig sind und wie die Einlagerung im eigenen Reifenlager in Eimsbüttel den Kellerärger spart.",
    date: "2026-03-10",
    heroImage: "/images/werkstatt-03.webp",
    heroAlt: "Reifen und Felgen beim Reifenservice der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Zweimal im Jahr steht der Reifenwechsel an – und in einer Stadt wie Hamburg, in der viele in einer Wohnung ohne Keller oder Garage leben, ist die Lagerung oft das eigentliche Problem. So lösen Sie beides entspannt.",
    ],
    sections: [
      {
        h2: "Wann ist der richtige Zeitpunkt?",
        paragraphs: [
          "Als Faustregel gilt „von O bis O“ – von Ostern bis Oktober Sommerreifen, danach Winterreifen. Wichtiger als das Datum ist die Temperatur: Sobald es dauerhaft unter etwa 7 °C fällt, bieten Winterreifen den besseren Grip. In Hamburg lohnt es sich, früh einen Termin zu sichern, bevor der erste Kälteeinbruch den Ansturm auslöst.",
        ],
      },
      {
        h2: "Ab welcher Profiltiefe brauche ich neue Reifen?",
        paragraphs: ["Das Gesetz schreibt mindestens 1,6 mm vor – sicherheitstechnisch ist das aber sehr wenig. Wir empfehlen den Wechsel früher:"],
        bullets: [
          "Sommerreifen: neue Reifen ab ca. 3 mm Restprofil",
          "Winterreifen: neue Reifen ab ca. 4 mm Restprofil",
          "Risse, Beulen oder einseitiger Verschleiß? Dann unabhängig vom Profil prüfen lassen.",
        ],
      },
      {
        h2: "Einlagerung: kein Schleppen, kein Platzproblem",
        paragraphs: [
          "Mit unserem eigenen Reifenlager direkt am Betrieb in Eimsbüttel müssen Sie nichts mehr durchs Treppenhaus tragen. Sie lassen Ihre Räder nach dem Wechsel einfach bei uns, wir lagern sie fachgerecht ein und montieren sie zum nächsten Saisonwechsel wieder.",
        ],
      },
      {
        h2: "Wuchten und Achsvermessung nicht vergessen",
        paragraphs: [
          "Beim Wechsel wuchten wir die Räder für einen ruhigen Lauf. Bei auffälligem oder einseitigem Verschleiß empfiehlt sich zusätzlich eine Achsvermessung – das schützt die neuen Reifen und spart langfristig Geld.",
        ],
      },
    ],
    relatedServices: ["reifenservice", "achsvermessung", "inspektion-wartung"],
  },
  {
    slug: "klimaservice-wann-warum",
    title: "Klimaservice: Wann, warum – und was er wirklich bringt",
    description:
      "Warum die Klimaanlage jedes Jahr Leistung verliert, wann ein Klimaservice fällig ist und wie Sie Gerüche und Bakterien loswerden. Tipps aus Hamburg-Eimsbüttel.",
    date: "2026-04-28",
    heroImage: "/images/werkstatt-smart.webp",
    heroAlt: "Fahrzeug beim Klimaservice in der Werkstatt der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Spätestens am ersten warmen Tag im Hamburger Frühling fällt es auf: Die Klimaanlage kühlt nicht mehr richtig. Das ist normal – und ein klares Zeichen, dass ein Klimaservice fällig ist.",
    ],
    sections: [
      {
        h2: "Warum die Klimaanlage Leistung verliert",
        paragraphs: [
          "Jede Klimaanlage verliert pro Jahr etwa 10 % ihres Kältemittels über Dichtungen und Schläuche – ganz ohne Defekt. Mit der Zeit reicht die Menge nicht mehr für volle Kühlleistung, und der Kompressor läuft weniger effizient.",
        ],
      },
      {
        h2: "Daran erkennen Sie, dass ein Service fällig ist",
        paragraphs: ["Typische Anzeichen sind:"],
        bullets: [
          "Die Kühlleistung lässt spürbar nach.",
          "Ein muffiger oder unangenehmer Geruch beim Einschalten.",
          "Die Scheiben beschlagen schlechter frei.",
          "Der letzte Klimaservice ist mehr als zwei Jahre her.",
        ],
      },
      {
        h2: "Was beim Klimaservice passiert",
        paragraphs: [
          "Wir saugen das alte Kältemittel ab, prüfen das System auf Dichtheit, trocknen es und befüllen es mit der korrekten Menge nach Herstellervorgabe. Dazu kommen ein Funktions- und Drucktest sowie auf Wunsch eine Hygiene-Desinfektion und ein neuer Innenraumfilter gegen Gerüche und Bakterien – wichtig gerade für Allergiker.",
        ],
      },
      {
        h2: "Der beste Zeitpunkt: vor dem Sommer",
        paragraphs: [
          "Ideal ist ein Klimaservice im Frühjahr, bevor die ersten heißen Tage kommen. So fahren Sie den Sommer über mit voller Kühlung und sauberer Luft. Tipp: Lassen Sie die Klimaanlage auch im Winter regelmäßig laufen, das hält Dichtungen und Kompressor fit.",
        ],
      },
    ],
    relatedServices: ["klimaservice", "inspektion-wartung", "reifenservice"],
  },
  {
    slug: "bremsen-warnzeichen",
    title: "Bremsen: 6 Warnzeichen, die Sie nicht ignorieren sollten",
    description:
      "Quietschen, längerer Bremsweg, Vibrationen: Diese sechs Warnzeichen deuten auf fällige Bremsen hin – was sie bedeuten und wann Sie in die Werkstatt sollten. Hamburg-Eimsbüttel.",
    date: "2026-02-18",
    heroImage: "/images/werkstatt-08.webp",
    heroAlt: "Werkzeug für den Bremsenservice der Hamburgs GaRage in Hamburg-Eimsbüttel",
    intro: [
      "Die Bremse ist das wichtigste Sicherheitssystem Ihres Autos – und im dichten Stadtverkehr von Hamburg besonders gefordert. Diese sechs Warnzeichen sollten Sie ernst nehmen.",
    ],
    sections: [
      {
        h2: "Die wichtigsten Warnzeichen im Überblick",
        paragraphs: ["Achten Sie auf diese Signale:"],
        bullets: [
          "Quietschen oder Schleifen beim Bremsen – oft sind die Beläge verschlissen.",
          "Längerer Bremsweg oder schwammiges Pedalgefühl.",
          "Vibrationen oder Rubbeln im Lenkrad beim Bremsen – mögliche Hinweise auf verzogene Scheiben.",
          "Das Auto zieht beim Bremsen zur Seite.",
          "Eine Bremswarnleuchte im Display.",
          "Sichtbar dünne Bremsbeläge oder Rost-/Riefenbildung an den Scheiben.",
        ],
      },
      {
        h2: "Warum gerade der Stadtverkehr die Bremsen fordert",
        paragraphs: [
          "Ständiges Anfahren und Abbremsen an Ampeln, Zebrastreifen und im Stop-and-go rund um Eimsbüttel beansprucht Beläge und Scheiben deutlich stärker als lange Autobahnfahrten. Wer viel in der Stadt unterwegs ist, sollte die Bremsen daher häufiger prüfen lassen.",
        ],
      },
      {
        h2: "Was wir prüfen und tauschen",
        paragraphs: [
          "Beim Bremsenservice kontrollieren wir Beläge, Scheiben, Leitungen und Bremsflüssigkeit. Verschlissene Teile ersetzen wir fachgerecht in Erstausrüsterqualität, und die Bremsflüssigkeit wechseln wir nach Herstellervorgabe für einen sicheren Druckpunkt.",
        ],
      },
      {
        h2: "Nicht aufschieben",
        paragraphs: [
          "Bei der Bremse geht es um Sicherheit – Ihre und die der anderen. Bemerken Sie eines der Anzeichen, warten Sie nicht bis zur nächsten Inspektion, sondern lassen Sie die Bremsen kurzfristig prüfen. Oft ist es schneller und günstiger erledigt, als man denkt.",
        ],
      },
    ],
    relatedServices: ["bremsenservice", "hu-au", "achsvermessung"],
  },
  {
    slug: "wintercheck-urlaubscheck",
    title: "Wintercheck & Urlaubscheck: sicher durch jede Saison",
    description:
      "Mit dem richtigen Check kommen Sie sicher durch Winter und Urlaubsreise. Diese Punkte sollten Sie prüfen lassen – kompakt erklärt von Ihrer Werkstatt in Hamburg-Eimsbüttel.",
    date: "2026-05-05",
    heroImage: "/images/schaufenster-werkstatt.webp",
    heroAlt: "Hamburgs GaRage in Hamburg-Eimsbüttel – Werkstatt für Winter- und Urlaubscheck",
    intro: [
      "Ob nass-kalter Hamburger Winter oder die lange Fahrt in den Sommerurlaub: Ein kurzer Check vorab gibt Sicherheit und beugt Pannen vor. Diese Punkte gehören dazu.",
    ],
    sections: [
      {
        h2: "Warum ein saisonaler Check sinnvoll ist",
        paragraphs: [
          "Die häufigste Pannenursache ist und bleibt die Batterie – besonders bei Kälte. Dazu kommen Reifen, Beleuchtung und Flüssigkeiten, die je nach Saison unterschiedlich gefordert werden. Ein kompakter Check deckt Schwachstellen auf, bevor sie zum Problem werden.",
        ],
      },
      {
        h2: "Wintercheck – das gehört dazu",
        paragraphs: ["Vor der kalten Jahreszeit prüfen wir vor allem:"],
        bullets: [
          "Batterie und Ladezustand",
          "Winterreifen, Profiltiefe und Reifendruck",
          "Frostschutz von Kühl- und Scheibenwaschwasser",
          "Beleuchtung und Scheibenwischer",
          "Bremsen und Türdichtungen",
        ],
      },
      {
        h2: "Urlaubscheck – entspannt in die Ferien",
        paragraphs: ["Vor der großen Reise – oft voll beladen – lohnt sich ein Blick auf:"],
        bullets: [
          "Reifen inkl. Reserverad und korrektem Druck bei Beladung",
          "Öl-, Kühl- und Bremsflüssigkeitsstand",
          "Bremsen und Beleuchtung",
          "Klimaanlage für angenehme Temperaturen unterwegs",
          "Funktion von Anhängerkupplung oder Dachträger, falls genutzt",
        ],
      },
      {
        h2: "Alles in einem Termin",
        paragraphs: [
          "In unserem Betrieb in Eimsbüttel erledigen wir den Saison-Check in einem Termin und sagen Ihnen ehrlich, was nötig ist – und was nicht. Auf Wunsch bleiben Sie mit einem Werkstattersatzwagen mobil.",
        ],
      },
    ],
    relatedServices: ["inspektion-wartung", "reifenservice", "klimaservice"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const articleSlugs = articles.map((a) => a.slug);
