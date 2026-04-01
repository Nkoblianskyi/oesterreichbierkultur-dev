import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { craftBeers } from "@/lib/beers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const beer = craftBeers.find((b) => b.slug === slug)
  if (!beer) return { title: "Bier nicht gefunden" }

  return {
    title: `${beer.name} – ${beer.type} | Österreich Bierkultur`,
    description: beer.description,
    alternates: {
      canonical: `https://oesterreichbierkultur.com/biere/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return craftBeers.map((b) => ({ slug: b.slug }))
}

export default async function BeerDetailPage({ params }: Props) {
  const { slug } = await params
  const beer = craftBeers.find((b) => b.slug === slug)
  if (!beer) notFound()

  const maxAlcohol = Math.max(...craftBeers.map((b) => b.alcohol))
  const isStrongest = beer.alcohol === maxAlcohol
  const otherBeers = craftBeers.filter((b) => b.slug !== slug).slice(0, 3)

  return (
    <>
      <CookieBanner />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={beer.image}
              alt={beer.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/70" />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16">
            <Link
              href="/#craftbier"
              className="mb-6 inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              ← Zurück zu den Craftbieren
            </Link>

            <div className="flex flex-wrap items-start gap-4 mb-4">
              {isStrongest && (
                <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground">
                  Stärkstes Craftbier
                </span>
              )}
              <span className="rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
                {beer.type}
              </span>
              <span className="rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
                {beer.origin}
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold text-background md:text-7xl text-balance mb-4">
              {beer.name}
            </h1>
            <p className="text-xl text-background/80 max-w-xl text-pretty">
              {beer.shortDescription}
            </p>
          </div>
        </section>

        {/* Details */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              {/* Main description */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Über dieses Bier
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-8 text-pretty">
                  {beer.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {beer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 18+ notice */}
                <div className="rounded-xl border border-border bg-secondary p-6">
                  <p className="text-sm font-semibold text-foreground mb-1">Hinweis zum Alkoholgehalt</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Dieses Bier enthält {beer.alcohol}% Alkohol vol. Der Konsum von Alkohol ist erst ab 18 Jahren erlaubt.
                    Bitte trinken Sie verantwortungsvoll und fahren Sie nicht nach dem Alkoholkonsum.
                  </p>
                </div>
              </div>

              {/* Stats panel */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-serif text-xl font-bold text-card-foreground mb-6">
                  Bierdaten
                </h3>
                <dl className="space-y-5">
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-sm text-muted-foreground">Alkoholgehalt</dt>
                    <dd className="font-semibold text-primary">{beer.alcohol}% Vol.</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-sm text-muted-foreground">Biersorte</dt>
                    <dd className="font-semibold text-foreground">{beer.type}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-sm text-muted-foreground">Bitterkeit</dt>
                    <dd className="font-semibold text-foreground">{beer.bitterness}</dd>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <dt className="text-sm text-muted-foreground">Farbe</dt>
                    <dd className="font-semibold text-foreground">{beer.color}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-muted-foreground">Herkunft</dt>
                    <dd className="font-semibold text-foreground">{beer.origin}</dd>
                  </div>
                </dl>

                {/* Alcohol bar */}
                <div className="mt-8">
                  <div className="flex justify-between mb-2 text-xs text-muted-foreground">
                    <span>Alkoholstärke</span>
                    <span>{beer.alcohol}% / 10%</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${(beer.alcohol / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other beers */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-10 text-center">
              Weitere Craftbiere
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {otherBeers.map((other) => (
                <Link
                  key={other.slug}
                  href={`/biere/${other.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-card transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 rounded-full bg-foreground/80 px-3 py-1 text-xs font-bold text-background backdrop-blur-sm">
                      {other.alcohol}% Vol.
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-medium text-brand-slate uppercase tracking-wide mb-1">{other.type}</div>
                    <h3 className="font-serif text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                      {other.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
