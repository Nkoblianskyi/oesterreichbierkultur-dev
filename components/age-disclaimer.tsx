"use client"

import { useState } from "react"
import Link from "next/link"

export default function AgeDisclaimer() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-beer-dark/90 backdrop-blur-sm">
      <div className="mx-4 max-w-md rounded-2xl bg-beer-foam p-8 text-center shadow-2xl border border-beer-gold/30">
        <div className="mb-4 text-6xl font-serif font-bold text-primary">18+</div>
        <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
          Willkommen bei Österreich Bierkultur
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          Diese Website enthält Informationen über alkoholische Getränke. Der Genuss von Alkohol ist erst ab 18 Jahren erlaubt.
          Bitte bestätigen Sie Ihr Alter, um fortzufahren.
        </p>
        <p className="mb-6 text-xs text-muted-foreground italic">
          Alkohol in Maßen – trinken Sie verantwortungsvoll. Bitte nicht trinken und fahren.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setDismissed(true)}
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-beer-copper hover:scale-105"
          >
            Ja, ich bin 18+
          </button>
          <Link
            href="https://www.google.com"
            className="rounded-lg border border-border px-8 py-3 font-semibold text-muted-foreground transition-all hover:bg-muted"
          >
            Nein, verlassen
          </Link>
        </div>
      </div>
    </div>
  )
}
