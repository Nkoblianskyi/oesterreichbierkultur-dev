import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/#craftbier", label: "Craftbiere" },
  { href: "/geschichte", label: "Geschichte" },
  { href: "/bierkultur", label: "Bierkultur" },
  { href: "/#info", label: "Über uns" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <span className="font-serif text-xl font-bold text-primary">
            Österreich
          </span>
          <span className="font-serif text-xl font-bold text-foreground">
            Bierkultur
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button className="flex flex-col gap-1.5 md:hidden" aria-label="Menü öffnen">
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-6 bg-foreground" />
          <span className="h-0.5 w-4 bg-foreground" />
        </button>
      </div>
    </header>
  )
}
