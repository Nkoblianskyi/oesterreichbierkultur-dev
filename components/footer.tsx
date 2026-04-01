import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 font-serif text-2xl font-bold">
              <span className="text-primary-foreground opacity-70">Österreich</span>
              <span className="text-background"> Bierkultur</span>
            </div>
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              Authentische Bierkultur aus dem Herzen Österreichs. Wir feiern die Tradition und Innovation des österreichischen Bieres.
            </p>
            <p className="mt-4 text-xs text-background/40">
              Dieser Inhalt richtet sich ausschließlich an Personen über 18 Jahre. Alkohol in Maßen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link href="/" className="hover:text-background transition-colors">Startseite</Link></li>
              <li><Link href="/#craftbier" className="hover:text-background transition-colors">Craftbiere</Link></li>
              <li><Link href="/geschichte" className="hover:text-background transition-colors">Geschichte</Link></li>
              <li><Link href="/bierkultur" className="hover:text-background transition-colors">Bierkultur</Link></li>
              <li><Link href="/datenschutz" className="hover:text-background transition-colors">Datenschutz</Link></li>
              <li><Link href="/cookie-richtlinie" className="hover:text-background transition-colors">Cookie-Richtlinie</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-background/50">
              Kontakt
            </h3>
            <address className="not-italic text-sm text-background/70 space-y-2">
              <p className="font-semibold text-background">FISCUS NOSTRUM FUND SERVICES LIMITED</p>
              <p>Myrianthous Anna</p>
              <p>Panagioti Kaspi 5A</p>
              <p>Nicosia 1095, Cyprus</p>
              <a
                href="mailto:info@oesterreichbierkultur.com"
                className="mt-3 block text-background/60 hover:text-background underline"
              >
                info@oesterreichbierkultur.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} oesterreichbierkultur.com – Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-background/40">
            Nur für Personen ab 18 Jahren. Bitte trinken Sie verantwortungsvoll.
          </p>
        </div>
      </div>
    </footer>
  )
}
