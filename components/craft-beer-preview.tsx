import Image from "next/image"
import Link from "next/link"
import { craftBeers } from "@/lib/beers"
import { cn } from "@/lib/utils"

function formatVolDe(at: number) {
  return `${at.toLocaleString("de-AT", { minimumFractionDigits: 0, maximumFractionDigits: 1 })} % vol`
}

export default function CraftBeerPreview() {
  const maxAlcohol = Math.max(...craftBeers.map((b) => b.alcohol))

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
                  ? "border-[#a68b5b]/80 ring-2 ring-[#a68b5b]/35 shadow-lg shadow-[#1a1210]/15"
                  : "border-border",
              )}
            >
              {/* Image */}
              <div
                className={cn(
                  "relative overflow-hidden",
                  isMaxAlcohol ? "h-[17rem] sm:h-[18rem]" : "h-56",
                )}
              >
                <Image
                  src={beer.image}
                  alt={beer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {isMaxAlcohol && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120c0a] via-[#120c0a]/75 to-transparent" />
                    <div className="absolute inset-x-3 bottom-3 border border-[#a68b5b]/85 bg-[#1a1210]/92 p-3.5 font-serif shadow-md backdrop-blur-[2px] sm:inset-x-3.5 sm:bottom-3.5 sm:p-4">
                      <p className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#c9a86c]">
                        Maximalwert
                      </p>
                      <p className="text-[2.1rem] font-bold leading-none tracking-tight text-[#f2ece6] sm:text-[2.35rem]">
                        {formatVolDe(beer.alcohol)}
                      </p>
                      <p className="mt-3 text-[0.7rem] leading-snug text-[#c8bfb5] sm:text-xs">
                        Diese Seite ist ein{" "}
                        <strong className="font-semibold text-[#e8e2da]">Informationsangebot</strong>{" "}
                        über alkoholische Getränke (kein Verkauf, keine Bestellmöglichkeit).
                      </p>
                      <p className="mt-2.5 text-[0.65rem] leading-snug text-[#a69e94] sm:text-[0.7rem]">
                        <span className="font-semibold text-[#c9a86c]">18+</span>
                        {" — "}
                        Dieser Alkohol ist nur für Personen ab 18 Jahren. Bitte trinken Sie
                        verantwortungsbewusst.
                      </p>
                    </div>
                  </>
                )}
                {/* Alcohol badge */}
                {!isMaxAlcohol && (
                  <div className="absolute bottom-3 left-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-bold text-background backdrop-blur-sm">
                    {beer.alcohol}% Vol.
                  </div>
                )}
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
