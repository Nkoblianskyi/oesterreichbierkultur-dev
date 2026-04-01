import Image from "next/image"
import Link from "next/link"

export default function HistoryPreviewSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">

        {/* Section label */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
            Mehr entdecken
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Geschichte card */}
          <div className="group flex flex-col overflow-hidden border border-border bg-background">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/history-bg.jpg"
                alt="Geschichte des österreichischen Bieres"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-background/70">
                  Seit dem 12. Jahrhundert
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Geschichte
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground text-balance mb-4 md:text-3xl">
                Wie das Bier nach Österreich kam
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty mb-8 flex-1">
                Von den Klostermönchen des 12. Jahrhunderts bis zur Erfindung des Wiener Lagers 1841 –
                Österreich hat die Bierwelt entscheidend geprägt. Erfahren Sie die ganze Geschichte.
              </p>
              <Link
                href="/geschichte"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-green-light transition-colors"
              >
                Geschichte lesen →
              </Link>
            </div>
          </div>

          {/* Bierkultur card */}
          <div className="group flex flex-col overflow-hidden border border-border bg-background">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/culture-bg.jpg"
                alt="Bierkultur in Österreich"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-background/70">
                  Alltag & Tradition
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Bierkultur
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground text-balance mb-4 md:text-3xl">
                Bier im Leben der Österreicher
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground text-pretty mb-8 flex-1">
                Biergarten, Stammtisch, Volksfest – Bier ist in Österreich weit mehr als ein Getränk.
                Es ist ein Ritual, eine Sprache, ein Teil der nationalen Identität.
              </p>
              <Link
                href="/bierkultur"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-brand-green-light transition-colors"
              >
                Bierkultur entdecken →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
