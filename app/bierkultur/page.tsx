import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Bierkultur in Österreich | Österreich Bierkultur",
  description:
    "Bier ist mehr als ein Getränk – es ist ein Teil der österreichischen Identität. Entdecken Sie die Rolle des Bieres im Alltag der Österreicher: Biergarten, Stammtisch, Feste und Traditionen.",
  alternates: { canonical: "https://oesterreichbierkultur.com/bierkultur" },
}

const CULTURE_ITEMS = [
  {
    title: "Der Biergarten",
    subtitle: "Wo Wien sich trifft",
    text: "Der Biergarten ist das Herzstück des österreichischen Sommerlebens. Unter alten Kastanienbäumen, an langen Holztischen, treffen sich Familien, Freunde und Fremde. In Wien allein gibt es über 200 Biergärten. Das älteste, der Schweizerhaus im Prater, ist seit 1920 geöffnet. Hier ist Bier kein schnelles Getränk, sondern ein Anlass zum Verweilen.",
    image: "/images/culture-bg.jpg",
    imageAlt: "Österreichischer Biergarten im Sommer",
    stat: "200+",
    statLabel: "Biergärten allein in Wien",
  },
  {
    title: "Der Stammtisch",
    subtitle: "Gemeinschaft im Gasthaus",
    text: "Der Stammtisch – ein reservierter Tisch für Stammgäste im Gasthaus – ist eine der tiefsten sozialen Institutionen Österreichs. Er ist Diskussionsforum, Freundeskreis und lokales Parlament in einem. Über Bier werden Meinungen ausgetauscht, Handschläge gegeben und Jahrzehnte lange Freundschaften gepflegt. Kein Stammtisch ohne sein Bier.",
    image: "/images/kultur-stammtisch.jpg",
    imageAlt: "Stammtisch in einem österreichischen Gasthaus",
    stat: "12. Jhd.",
    statLabel: "Erste Gasthäuser in Österreich",
  },
  {
    title: "Feste & Märkte",
    subtitle: "Tracht, Musik und Bierkultur",
    text: "Von den Wiener Volksfesten über das Gäubodenvolksfest in Straubing bis zum Villacher Kirchtag – österreichische Feste sind untrennbar mit Bier verbunden. In Tracht gekleidete Besucher, ohrenbetäubende Blasmusik und große Krüge schaumigen Bieres sind das Bild dieser Veranstaltungen. Das Bier ist hier nicht nur Getränk, sondern Symbol der Zusammengehörigkeit.",
    image: "/images/kultur-markt.jpg",
    imageAlt: "Österreichisches Volksfest mit Tracht und Bier",
    stat: "300+",
    statLabel: "Volksfeste pro Jahr in Österreich",
  },
  {
    title: "Die Craft-Beer-Taprooms",
    subtitle: "Die neue Bierkultur",
    text: "Seit den 2010er Jahren ergänzen moderne Taprooms und Craft-Beer-Bars das traditionelle Gasthaus. Hier treffen Bierliebhaber auf Braumeister, diskutieren über Hopfensorten und entdecken neue Stile. Städte wie Wien und Graz haben sich zu echten Craft-Beer-Destinationen entwickelt, mit Tap Takeovers, Brauerei-Touren und Beer-Pairing-Dinners.",
    image: "/images/kultur-brauerei.jpg",
    imageAlt: "Moderner Craft-Beer-Taproom in Wien",
    stat: "300+",
    statLabel: "Aktive Brauereien in Österreich heute",
  },
]

const FACTS = [
  {
    number: "106 L",
    description: "Pro-Kopf-Bierkonsum in Österreich pro Jahr – einer der höchsten in Europa",
  },
  {
    number: "300+",
    description: "Aktive Brauereien – mehr als je zuvor in der Geschichte des Landes",
  },
  {
    number: "1841",
    description: "Das Jahr, in dem Wien die Bierwelt mit dem ersten Lagerbier revolutionierte",
  },
  {
    number: "12. Jhd.",
    description: "Beginn der dokumentierten Brautradition in österreichischen Klöstern",
  },
]

export default function BierkulturPage() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <main className="pt-16">

        {/* — HERO — */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <Image
            src="/images/culture-bg.jpg"
            alt="Bierkultur in Österreich"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/25 to-transparent" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 md:px-12">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-background/60 hover:text-background transition-colors"
            >
              ← Startseite
            </Link>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/60">
              Mehr als ein Getränk
            </p>
            <h1 className="font-serif text-5xl font-bold leading-none text-background text-balance md:text-7xl lg:text-8xl">
              Bierkultur<br />
              <span className="text-background/50">in Österreich</span>
            </h1>
          </div>
        </section>

        {/* — INTRO — */}
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:flex md:items-start md:gap-16">
            <p className="font-serif text-2xl font-medium text-foreground text-balance md:max-w-lg md:text-3xl">
              Bier ist in Österreich nicht einfach ein Getränk – es ist eine Sprache der Gemeinschaft.
            </p>
            <div className="mt-6 md:mt-1 md:max-w-sm">
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                Vom morgendlichen Radler nach der Arbeit bis zum feierlichen Anstoß beim Volksfest durchzieht das Bier alle Schichten des österreichischen Alltags. Es verbindet Generationen, Städte und Traditionen.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                Der durchschnittliche Österreicher trinkt über 100 Liter Bier pro Jahr – doch Quantität ist nicht das Entscheidende. Es geht um das Ritual, das Zusammensein, die Qualität.
              </p>
            </div>
          </div>
        </section>

        {/* — FACTS BAR — */}
        <section className="border-b border-border bg-foreground">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
            <div className="grid grid-cols-2 gap-px bg-background/10 lg:grid-cols-4">
              {FACTS.map((fact) => (
                <div key={fact.number} className="bg-foreground px-6 py-8">
                  <p className="font-serif text-3xl font-bold text-background md:text-4xl">{fact.number}</p>
                  <p className="mt-2 text-xs leading-relaxed text-background/50 text-pretty">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* — CULTURE SECTIONS: alternating layout — */}
        <section>
          {CULTURE_ITEMS.map((item, i) => (
            <article key={item.title} className="border-b border-border last:border-0">
              <div
                className={`mx-auto max-w-7xl md:grid md:grid-cols-2 md:items-stretch ${
                  i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden md:h-auto">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center px-6 py-14 md:px-12">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.subtitle}
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground text-balance mb-5 md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground text-pretty mb-8">
                    {item.text}
                  </p>
                  {/* Stat callout */}
                  <div className="inline-flex items-baseline gap-3 border-l-4 border-primary pl-4">
                    <span className="font-serif text-3xl font-bold text-primary">{item.stat}</span>
                    <span className="text-xs text-muted-foreground leading-snug max-w-[12rem]">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* — CLOSING QUOTE — */}
        <section className="bg-foreground py-24">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
            <span className="font-serif text-9xl font-bold leading-none text-background/10 select-none">&ldquo;</span>
            <blockquote className="-mt-12 font-serif text-2xl font-medium text-background text-balance md:text-4xl">
              In Österreich beginnt der Feierabend mit dem ersten Schluck – und das Gespräch endet nie.
            </blockquote>
            <p className="mt-6 text-sm font-medium uppercase tracking-widest text-background/40">
              Österreichische Weisheit
            </p>
          </div>
        </section>

        {/* — CTA — */}
        <section className="border-t border-border py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 md:px-12 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
                Die Geschichte dahinter.
              </h2>
              <p className="mt-3 text-muted-foreground text-pretty max-w-md">
                Erfahren Sie, wie Österreichs Bierkultur über 800 Jahre gewachsen ist – von den Klosterbrauern bis heute.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 md:mt-0 md:shrink-0">
              <Link
                href="/geschichte"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-brand-green-light"
              >
                Geschichte lesen
              </Link>
              <Link
                href="/#craftbier"
                className="inline-flex items-center rounded-lg border border-border bg-background px-8 py-4 font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Craftbiere entdecken
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
