import Image from "next/image"
import Link from "next/link"

const INFO_ITEMS = [
  {
    label: "01",
    title: "Reinheitsgebot",
    description:
      "Wir brauen ausschließlich nach dem Deutschen Reinheitsgebot von 1516 – Wasser, Malz, Hopfen und Hefe. Keine Zusatzstoffe, nur pure Qualität.",
  },
  {
    label: "02",
    title: "Regionale Zutaten",
    description:
      "Unsere Gerste wächst in den Feldern der Steiermark, unser Hopfen kommt aus Niederösterreich. Lokale Ressourcen für authentischen Geschmack.",
  },
  {
    label: "03",
    title: "Handwerkliche Braukunst",
    description:
      "Jeder Sud wird von unseren Braumeistern persönlich überwacht. Kleine Mengen, höchste Qualität – das ist das Prinzip der Craft-Brauerei.",
  },
]

export default function InfoSection() {
  return (
    <section id="info" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: text content */}
          <div>
            <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate">
              Was uns auszeichnet
            </span>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance mb-6">
              Bierkultur mit{" "}
              <span className="text-primary">Leidenschaft</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-10 text-pretty">
              Österreich hat eine jahrtausendealte Brautradition. Von den Klosterbrauereien der Benediktiner
              bis zu den modernen Craft-Brauereien in Wien und Graz – die Bierkultur ist ein zentraler Teil
              der österreichischen Identität.
            </p>

            <div className="space-y-6">
              {INFO_ITEMS.map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary text-xs font-bold text-primary">
                    {item.label}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/geschichte"
                className="inline-flex rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Zur Geschichte
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl lg:h-[520px]">
              <Image
                src="/images/brewing-process.jpg"
                alt="Handwerkliche Brauerei in Österreich"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl">
              <div className="font-serif text-3xl font-bold">800+</div>
              <div className="text-sm mt-1 text-primary-foreground/80">Jahre Brautradition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
