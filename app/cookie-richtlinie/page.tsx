import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | Österreich Bierkultur",
  description:
    "Cookie-Richtlinie von oesterreichbierkultur.com – Informationen zu Art, Zweck und Verwaltung von Cookies auf dieser Website.",
  alternates: { canonical: "https://oesterreichbierkultur.com/cookie-richtlinie" },
}

const COOKIE_TYPES = [
  {
    name: "Notwendige Cookies",
    required: true,
    description:
      "Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen grundlegende Funktionen wie die Navigation auf der Seite und den Zugang zu gesicherten Bereichen. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.",
    examples: [
      { name: "cookie-consent", purpose: "Speichert Ihre Cookie-Einwilligung", duration: "12 Monate" },
    ],
  },
  {
    name: "Analyse-Cookies",
    required: false,
    description:
      "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Alle Daten werden anonymisiert gesammelt und nicht an Dritte weitergegeben. Sie helfen uns, die Website kontinuierlich zu verbessern.",
    examples: [
      { name: "Vercel Analytics", purpose: "Anonymisierte Seitenanalyse (kein Tracking)", duration: "Session" },
    ],
  },
]

export default function CookieRichtliniePage() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <main className="pt-16">
        {/* Page header */}
        <section className="border-b border-border bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              ← Startseite
            </Link>
            <span className="block mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Rechtliches
            </span>
            <h1 className="font-serif text-4xl font-bold text-foreground text-balance md:text-5xl">
              Cookie-Richtlinie
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Letzte Aktualisierung: 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 md:px-12 space-y-12">

            {/* Intro */}
            <div className="text-sm leading-relaxed text-muted-foreground space-y-4">
              <p>
                Diese Cookie-Richtlinie erklärt, was Cookies sind, wie wir sie auf{" "}
                <strong className="text-foreground">oesterreichbierkultur.com</strong>{" "}
                einsetzen, und welche Möglichkeiten Sie haben, Ihre Cookie-Einstellungen zu verwalten.
              </p>
              <p>
                Beim erstmaligen Besuch unserer Website werden Sie um Ihre Einwilligung zur Verwendung
                nicht-notwendiger Cookies gebeten. Sie können Ihre Einwilligung jederzeit widerrufen,
                indem Sie Ihren Browser-Cache leeren oder uns kontaktieren.
              </p>
            </div>

            {/* What are cookies */}
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Was sind Cookies?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät
                (Computer, Tablet, Smartphone) gespeichert werden. Sie ermöglichen es der Website,
                Ihren Browser bei einem erneuten Besuch wiederzuerkennen. Cookies können von der
                besuchten Website selbst (First-Party-Cookies) oder von Drittanbietern (Third-Party-Cookies)
                gesetzt werden.
              </p>
            </div>

            {/* Cookie types */}
            <div className="space-y-8">
              <h2 className="font-serif text-xl font-bold text-foreground">Welche Cookies verwenden wir?</h2>
              {COOKIE_TYPES.map((type) => (
                <div key={type.name} className="rounded-lg border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-serif text-lg font-bold text-card-foreground">
                      {type.name}
                    </h3>
                    <span
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                        type.required
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {type.required ? "Notwendig" : "Optional"}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                    {type.description}
                  </p>
                  {/* Cookie table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="pb-2 text-left font-semibold text-foreground pr-6">Name</th>
                          <th className="pb-2 text-left font-semibold text-foreground pr-6">Zweck</th>
                          <th className="pb-2 text-left font-semibold text-foreground">Speicherdauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {type.examples.map((ex) => (
                          <tr key={ex.name} className="border-b border-border last:border-0">
                            <td className="py-3 pr-6 font-mono text-foreground">{ex.name}</td>
                            <td className="py-3 pr-6 text-muted-foreground">{ex.purpose}</td>
                            <td className="py-3 text-muted-foreground">{ex.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            {/* Managing cookies */}
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Cookies verwalten</h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                Sie können Cookies jederzeit in Ihrem Browser deaktivieren oder löschen. Bitte beachten Sie,
                dass das Deaktivieren bestimmter Cookies die Funktionalität unserer Website beeinträchtigen kann.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Informationen zur Cookie-Verwaltung in gängigen Browsern:
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Google Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                <li>Mozilla Firefox: Einstellungen → Datenschutz &amp; Sicherheit → Cookies</li>
                <li>Safari: Einstellungen → Datenschutz → Cookies</li>
                <li>Microsoft Edge: Einstellungen → Cookies und Websiteberechtigungen</li>
              </ul>
            </div>

            {/* Third parties */}
            <div>
              <h2 className="font-serif text-xl font-bold text-foreground mb-3">Drittanbieter</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Diese Website wird auf der Plattform <strong className="text-foreground">Vercel</strong> gehostet.
                Vercel kann im Rahmen des Hostings technische Daten verarbeiten. Weitere Informationen
                finden Sie in der{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-brand-green-light"
                >
                  Datenschutzerklärung von Vercel
                </a>.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-lg border border-border bg-secondary p-6">
              <h2 className="font-serif text-lg font-bold text-foreground mb-2">Fragen zu Cookies?</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns unter:{" "}
                <a href="mailto:info@oesterreichbierkultur.com" className="text-primary underline hover:text-brand-green-light">
                  info@oesterreichbierkultur.com
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Weitere Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-primary underline hover:text-brand-green-light">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
