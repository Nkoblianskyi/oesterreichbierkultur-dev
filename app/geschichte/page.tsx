import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Geschichte des österreichischen Bieres | Österreich Bierkultur",
  description:
    "Erfahren Sie mehr über die faszinierende Geschichte des österreichischen Bieres – von den Klosterbrauereien des Mittelalters bis zur modernen Craft-Beer-Bewegung.",
  alternates: { canonical: "https://oesterreichbierkultur.com/geschichte" },
}

const CHAPTERS = [
  {
    number: "I",
    year: "12. Jahrhundert",
    title: "Die Klosterbrauer",
    lead: "Wo Glaube und Braukunst sich begegneten.",
    body: "Die ersten dokumentierten Brauereien auf österreichischem Boden entstehen in Benediktinerklöstern. Das Stift Kremsmünster in Oberösterreich gilt als eine der ältesten Brauereien des Landes. Die Mönche brauten Bier sowohl zur Eigenversorgung als auch zur Bewirtung von Pilgern und Reisenden. Bier war für sie nicht nur Nahrung, sondern auch ein Mittel der Nächstenliebe.",
    image: "/images/history-bg.jpg",
    imageAlt: "Mittelalterliche Klosterbrauerei",
    imageRight: false,
  },
  {
    number: "II",
    year: "1516",
    title: "Das Reinheitsgebot",
    lead: "Das älteste noch gültige Lebensmittelgesetz der Welt.",
    body: "Das Bayerische Reinheitsgebot von 1516 etabliert Wasser, Gerste und Hopfen als einzige zulässige Zutaten für Bier. Österreich übernimmt diesen Standard und prägt damit seine Bierkultur nachhaltig. Jahrhundertelang bleibt das Reinheitsgebot der Eckpfeiler der österreichischen Brautradition – und ist bis heute ein wichtiges Symbol für Qualität.",
    image: "/images/brewing-process.jpg",
    imageAlt: "Historische Brauanlage",
    imageRight: true,
  },
  {
    number: "III",
    year: "1841",
    title: "Das Wiener Lager – Eine Revolution",
    lead: "Anton Dreher verändert die Bierwelt für immer.",
    body: "Anton Dreher, Braumeister aus Wien, revolutioniert die Bierwelt: Er entwickelt das erste untergärige Lagerbier der Geschichte. Mit seiner bernsteinfarbenen, malzbetonten Note und der klaren Farbe wird das Wiener Lager zum Vorbild für unzählige Bierstile weltweit. Bis heute tragen das Märzen, das Oktoberfest-Bier und zahlreiche internationale Lager seine DNA.",
    image: "/images/craft-beer-4.jpg",
    imageAlt: "Klassisches Wiener Lager im Masskrug",
    imageRight: false,
  },
  {
    number: "IV",
    year: "2000er – heute",
    title: "Die Craft-Beer-Revolution",
    lead: "Tradition trifft Experimentiergeist.",
    body: "Inspiriert von der amerikanischen Craft-Beer-Bewegung entstehen ab den 2000er Jahren in ganz Österreich kleine, unabhängige Brauereien. Braumeister experimentieren mit außergewöhnlichen Zutaten, vergessenen Stilen und neuen Techniken. Wien, Graz und Innsbruck werden zu Hotspots der österreichischen Craft-Beer-Szene. Heute gibt es über 300 aktive Brauereien in Österreich.",
    image: "/images/craft-beer-1.jpg",
    imageAlt: "Modernes Craft Beer in Österreich",
    imageRight: true,
  },
]

const BREWING_STEPS = [
  {
    step: "01",
    title: "Mälzen",
    description:
      "Gerste wird eingeweicht, zum Keimen gebracht und dann bei verschiedenen Temperaturen gedarrt. Dieser Prozess wandelt Stärke in vergärbare Zucker um und verleiht dem Bier seine Farbe.",
  },
  {
    step: "02",
    title: "Maischen",
    description:
      "Das Malz wird geschrotet und mit heißem Wasser gemischt. Enzyme aktivieren die Stärke und wandeln sie in Malzzucker um. Das Ergebnis ist die Maische.",
  },
  {
    step: "03",
    title: "Läutern",
    description:
      "Die Maische wird gefiltert: Die flüssige Würze trennt sich von den festen Trebern. Die Treber werden oft als Tierfutter oder für Backwaren weiterverwendet.",
  },
  {
    step: "04",
    title: "Hopfengabe",
    description:
      "Die Würze wird aufgekocht und Hopfen zugegeben. Frühe Gabe erzeugt Bitterkeit, späte Gabe Aroma. Dieser Schritt dauert typischerweise 60–90 Minuten.",
  },
  {
    step: "05",
    title: "Gärung",
    description:
      "Nach dem Abkühlen wird Hefe hinzugegeben. Untergärige Hefe arbeitet bei 8–12 °C für Lager, obergärige bei 18–22 °C für Ales. In wenigen Tagen entsteht Alkohol.",
  },
  {
    step: "06",
    title: "Reifung & Abfüllen",
    description:
      "Das Bier reift für mehrere Wochen im Lagertank. Dann wird es filtriert oder naturtrüb belassen und schließlich abgefüllt – fertig für das Glas.",
  },
]

export default function GeschichtePage() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <main className="pt-16">

        {/* — HERO: full-bleed, text anchored bottom-left, large editorial feel — */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <Image
            src="/images/history-bg.jpg"
            alt="Geschichte des österreichischen Bieres"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-12">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-background/60 hover:text-background transition-colors"
            >
              ← Startseite
            </Link>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
              Seit dem 12. Jahrhundert
            </p>
            <h1 className="font-serif text-5xl font-bold leading-none text-background text-balance md:text-7xl lg:text-8xl">
              Geschichte<br />
              <span className="text-background/50">des Bieres</span>
            </h1>
          </div>
        </section>

        {/* — INTRO STRIP — */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-10 md:px-12 md:flex md:items-center md:justify-between md:gap-12">
            <p className="font-serif text-xl font-medium text-foreground text-balance md:text-2xl md:max-w-lg">
              Über 800 Jahre Brautradition – von den Mönchen des Mittelalters bis zur modernen Craft-Beer-Bewegung.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:mt-0 md:max-w-sm text-pretty">
              Österreich ist eines der ältesten Brauereiländer der Welt. Die Geschichte seines Bieres ist untrennbar mit seiner Kultur, seinem Klima und dem Erfindungsgeist seiner Braumeister verbunden.
            </p>
          </div>
        </section>

        {/* — CHAPTERS: alternating editorial layout — */}
        <section className="py-4">
          {CHAPTERS.map((ch) => (
            <article key={ch.number} className="border-b border-border last:border-0">
              <div
                className={`mx-auto max-w-7xl px-6 py-16 md:px-12 md:grid md:grid-cols-2 md:gap-0 md:items-stretch ${
                  ch.imageRight ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image column */}
                <div className="relative h-64 mb-8 overflow-hidden md:h-auto md:mb-0">
                  <Image
                    src={ch.image}
                    alt={ch.imageAlt}
                    fill
                    className="object-cover"
                  />
                  {/* Chapter number watermark */}
                  <span className="absolute top-4 left-4 font-serif text-8xl font-bold text-background/20 leading-none select-none">
                    {ch.number}
                  </span>
                </div>

                {/* Text column */}
                <div
                  className={`flex flex-col justify-center px-0 md:px-12 ${
                    ch.imageRight ? "md:pr-0" : "md:pl-0"
                  }`}
                >
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {ch.year}
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground text-balance mb-4 md:text-4xl">
                    {ch.title}
                  </h2>
                  <p className="font-serif text-xl italic text-muted-foreground mb-6 text-pretty border-l-4 border-primary pl-4">
                    {ch.lead}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {ch.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* — PULL QUOTE — */}
        <section className="relative overflow-hidden bg-foreground py-24">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="font-serif text-9xl font-bold leading-none text-background/10 select-none">&ldquo;</span>
            <blockquote className="-mt-12 font-serif text-2xl font-medium text-background text-balance md:text-4xl">
              Bier ist der Beweis, dass Gott uns liebt und will, dass wir glücklich sind.
            </blockquote>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-background/40">
              Frei nach Benjamin Franklin
            </p>
          </div>
        </section>

        {/* — BREWING PROCESS — */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Handwerk
                </p>
                <h2 className="font-serif text-4xl font-bold text-foreground text-balance md:text-5xl">
                  Vom Korn ins Glas
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:max-w-xs text-pretty">
                Die Braukunst ist ein sorgfältiger, mehrstufiger Prozess, der Jahrhunderte der Erfahrung in sich trägt.
              </p>
            </div>

            {/* Steps: horizontal numbered list */}
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {BREWING_STEPS.map((step) => (
                <div key={step.step} className="bg-background p-8 group">
                  <p className="font-serif text-5xl font-bold text-border group-hover:text-primary transition-colors mb-6">
                    {step.step}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* — CTA — */}
        <section className="border-t border-border py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 md:px-12 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
                Geschichte schmeckt man.
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty max-w-md">
                Probieren Sie unsere handgefertigten Craftbiere, die auf jahrhundertealten Traditionen aufbauen.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 md:mt-0 md:shrink-0">
              <Link
                href="/#craftbier"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-brand-green-light"
              >
                Craftbiere ansehen
              </Link>
              <Link
                href="/bierkultur"
                className="inline-flex items-center rounded-lg border border-border bg-background px-8 py-4 font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Bierkultur entdecken
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
