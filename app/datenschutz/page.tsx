import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Österreich Bierkultur",
  description:
    "Datenschutzerklärung von oesterreichbierkultur.com – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "https://oesterreichbierkultur.com/datenschutz" },
}

export default function DatenschutzPage() {
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
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Letzte Aktualisierung: 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 md:px-12">
            <div className="prose prose-slate max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground">

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Verantwortlicher</h2>
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <address className="not-italic mt-3 space-y-1">
                  <p className="font-semibold text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
                  <p>Myrianthous Anna</p>
                  <p>Panagioti Kaspi 5A</p>
                  <p>Nicosia 1095, Cyprus</p>
                  <p>
                    E-Mail:{" "}
                    <a href="mailto:info@oesterreichbierkultur.com" className="text-primary underline hover:text-brand-green-light">
                      info@oesterreichbierkultur.com
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Arten der verarbeiteten Daten</h2>
                <p>
                  Im Rahmen des Betriebs dieser Website werden folgende Datenkategorien verarbeitet:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Nutzungsdaten (z. B. besuchte Seiten, Zugriffszeitpunkt)</li>
                  <li>Kommunikationsdaten (z. B. IP-Adressen, Browser-Typ)</li>
                  <li>Kontaktdaten, sofern Sie uns per E-Mail kontaktieren</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Zweck der Verarbeitung</h2>
                <p>
                  Wir verarbeiten Ihre Daten ausschließlich zu folgenden Zwecken:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Bereitstellung und Betrieb der Website</li>
                  <li>Analyse und Verbesserung der Nutzererfahrung</li>
                  <li>Beantwortung von Anfragen per E-Mail</li>
                  <li>Einhaltung gesetzlicher Verpflichtungen</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Rechtsgrundlage</h2>
                <p>
                  Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 DSGVO:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li><strong className="text-foreground">lit. a</strong> – Einwilligung (z. B. für nicht-essentielle Cookies)</li>
                  <li><strong className="text-foreground">lit. b</strong> – Vertragserfüllung oder vorvertragliche Maßnahmen</li>
                  <li><strong className="text-foreground">lit. f</strong> – Berechtigte Interessen (z. B. Website-Sicherheit, Statistik)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Cookies</h2>
                <p>
                  Diese Website verwendet Cookies. Detaillierte Informationen zu Art, Zweck und Speicherdauer der eingesetzten Cookies finden Sie in unserer{" "}
                  <Link href="/cookie-richtlinie" className="text-primary underline hover:text-brand-green-light">
                    Cookie-Richtlinie
                  </Link>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. Webanalyse (Vercel Analytics)</h2>
                <p>
                  Diese Website verwendet Vercel Analytics zur anonymisierten Analyse des Nutzerverhaltens. Es werden keine personenbezogenen Daten gespeichert oder an Dritte weitergegeben. Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Weitergabe an Dritte</h2>
                <p>
                  Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt ausschließlich, wenn dies gesetzlich erforderlich ist oder Sie ausdrücklich eingewilligt haben. Wir verkaufen keine personenbezogenen Daten.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">8. Speicherdauer</h2>
                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Danach werden die Daten gelöscht oder anonymisiert.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">9. Ihre Rechte</h2>
                <p>
                  Gemäß DSGVO haben Sie folgende Rechte:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  <li>Beschwerderecht bei der zuständigen Aufsichtsbehörde</li>
                </ul>
                <p className="mt-3">
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                  <a href="mailto:info@oesterreichbierkultur.com" className="text-primary underline hover:text-brand-green-light">
                    info@oesterreichbierkultur.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-3">10. Hinweis zu Altersschranken</h2>
                <p>
                  Diese Website richtet sich ausschließlich an Personen ab 18 Jahren. Wir erheben wissentlich keine Daten von Minderjährigen. Sollten Sie Kenntnis davon erhalten, dass uns Daten von Minderjährigen übermittelt wurden, bitten wir um sofortige Benachrichtigung.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
