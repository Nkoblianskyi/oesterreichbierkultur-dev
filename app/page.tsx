import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import InfoSection from "@/components/info-section"
import CraftBeerPreview from "@/components/craft-beer-preview"
import HistoryPreviewSection from "@/components/history-preview-section"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: "Österreich Bierkultur – Craft & Traditionsbiere aus Österreich",
  description:
    "Entdecken Sie österreichisches Craft- und Traditionsbier. Authentische Bierkultur, Geschichte und handwerkliche Braukunst aus dem Herzen Österreichs.",
  alternates: { canonical: "https://oesterreichbierkultur.com" },
}

export default function HomePage() {
  return (
    <>
      <CookieBanner />
      <Navbar />
      <main>
        <HeroSection />
        <InfoSection />
        <CraftBeerPreview />
        <HistoryPreviewSection />
      </main>
      <Footer />
    </>
  )
}
