import Image from "next/image"
import Link from "next/link"
import { craftBeers, formatAlcoholVolDe, maxCraftBeerAlcohol } from "@/lib/beers"
import { cn } from "@/lib/utils"

export default function CraftBeerPreview() {
  const maxAlcohol = maxCraftBeerAlcohol()

  return (
    <section id="craftbier" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
            Handgefertigt in Österreich
          </span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Unsere <span className="text-primary">Craftbiere</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
            Jedes Bier erzählt eine Geschichte – von der Leidenschaft unserer Braumeister,
            der österreichischen Natur und jahrhundertealten Rezepten.
          </p>
        </div>

        {/* Hinweis & Maximalwert — im Seitenstil (Card / Primary) */}
        <div className="mb-14 mx-auto max-w-2xl rounded-2xl border border-border bg-card px-6 py-6 text-center shadow-sm sm:px-8 sm:py-7">
          <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.28em] text-brand-slate">
            Maximalwert
          </span>
          <p className="font-serif text-4xl font-bold leading-none text-primary sm:text-5xl">
            {formatAlcoholVolDe(maxAlcohol)}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground text-pretty">
            Diese Website ist ein{" "}
            <strong className="font-semibold text-foreground">Informationsangebot</strong> über
            alkoholische Getränke (kein Verkauf, keine Bestellmöglichkeit).
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <span className="font-semibold text-primary">18+</span>
            {" — "}
            Dieser Alkohol ist nur für Personen ab 18 Jahren. Bitte trinken Sie
            verantwortungsbewusst.
          </p>
        </div>

        {/* Beer grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {craftBeers.map((beer) => {
            const isMaxAlcohol = beer.alcohol === maxAlcohol
            return (
            <Link
              key={beer.slug}
              href={`/biere/${beer.slug}`}
              className={cn(
                "group rounded-2xl overflow-hidden border bg-card transition-all hover:shadow-xl hover:-translate-y-1",
                isMaxAlcohol
                  ? "border-primary/45 ring-2 ring-primary/15 shadow-md"
                  : "border-border",
              )}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={beer.image}
                  alt={beer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isMaxAlcohol && (
                  <div className="absolute top-3 right-3 rounded-full border border-primary/75 bg-primary/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                    Maximalwert
                  </div>
                )}
                <div className="absolute bottom-3 left-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-bold text-background backdrop-blur-sm">
                  {beer.alcohol}% Vol.
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-1 text-xs font-medium text-brand-slate uppercase tracking-wide">
                  {beer.type}
                </div>
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {beer.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4 line-clamp-2">
                  {beer.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {beer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                  <span>{beer.bitterness}</span>
                  <span className="font-medium text-foreground">{beer.origin}</span>
                </div>
              </div>
            </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/bierkultur"
            className="inline-flex rounded-lg border border-primary px-8 py-4 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Zur Bierkultur
          </Link>
        </div>
      </div>
    </section>
  )
}
