import Image from "next/image"
import Link from "next/link"
import { formatAlcoholVolDe, maxCraftBeerAlcohol } from "@/lib/beers"

export default function HeroSection() {
  const maxAlcohol = maxCraftBeerAlcohol()
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Top thin brand stripe */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary z-10" />

      {/* Split layout: left text / right image */}
      <div className="flex flex-1 flex-col lg:flex-row min-h-screen">

        {/* LEFT – content panel */}
        <div className="relative flex flex-col justify-center px-8 py-32 lg:w-1/2 lg:px-16 xl:px-24 bg-brand-light order-2 lg:order-1">

          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
            Seit Jahrhunderten
          </span>

          <h1 className="font-serif text-5xl font-bold leading-tight text-foreground xl:text-6xl text-balance mb-6">
            Österreichische{" "}
            <span className="text-primary">Bierkultur</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-muted-foreground text-pretty mb-10">
            Entdecken Sie die reiche Tradition des österreichischen Bieres – von klassischen
            Lagerbieren bis hin zu innovativen Craftbieren aus den besten Brauereien des Landes.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#craftbier"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-brand-green-light text-sm"
            >
              Craftbiere entdecken
            </Link>
            <Link
              href="/geschichte"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-8 py-4 font-semibold text-foreground transition-colors hover:bg-secondary text-sm"
            >
              Geschichte des Bieres
            </Link>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
            <div>
              <div className="font-serif text-3xl font-bold text-primary">200+</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">Brauereien in Österreich</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">1000+</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">Jahre Braugeschichte</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-primary">300+</div>
              <div className="mt-1 text-xs text-muted-foreground leading-snug">Craftbier-Sorten</div>
            </div>
          </div>

          {/* Hinweis / Maximalwert — wie im Craftbier-Bereich */}
          <div className="mt-8 max-w-lg border-t border-border pt-6">
            <div className="rounded-2xl border border-border bg-card px-5 py-5 shadow-sm sm:px-6 sm:py-6">
              <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-brand-slate">
                Maximalwert
              </span>
              <p className="font-serif text-3xl font-bold leading-none text-primary sm:text-4xl">
                {formatAlcoholVolDe(maxAlcohol)}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Diese Website ist ein{" "}
                <strong className="font-semibold text-foreground">Informationsangebot</strong> über
                alkoholische Getränke (kein Verkauf, keine Bestellmöglichkeit).
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">18+</span>
                {" — "}
                Dieser Alkohol ist nur für Personen ab 18 Jahren. Bitte trinken Sie
                verantwortungsbewusst. Alkohol am Steuer – nein danke.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – full-height image */}
        <div className="relative h-72 lg:h-auto lg:w-1/2 order-1 lg:order-2">
          <Image
            src="/images/hero-bg.jpg"
            alt="Österreichische Biergarten Landschaft in den Alpen"
            fill
            className="object-cover"
            priority
          />
          {/* subtle dark overlay for contrast */}
          <div className="absolute inset-0 bg-foreground/10" />
        </div>
      </div>
    </section>
  )
}
