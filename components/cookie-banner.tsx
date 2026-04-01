"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] border-t border-border bg-background/98 backdrop-blur-sm p-4 md:p-6 shadow-lg">
      <div className="mx-auto max-w-6xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground mb-1">
            Wir verwenden Cookies
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Wir setzen Cookies ein, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Durch die Nutzung dieser Website stimmen Sie unserer{" "}
            <Link href="/datenschutz" className="underline text-primary hover:text-brand-green-light">
              Datenschutzerklärung
            </Link>{" "}
            und{" "}
            <Link href="/cookie-richtlinie" className="underline text-primary hover:text-brand-green-light">
              Cookie-Richtlinie
            </Link>{" "}
            zu.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={acceptEssential}
            className="rounded-lg border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Nur Notwendige
          </button>
          <button
            onClick={acceptAll}
            className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-brand-green-light"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
