export const craftBeers = [
  {
    slug: "bergwald-ipa",
    name: "Bergwald IPA",
    type: "India Pale Ale",
    alcohol: 7.2,
    bitterness: "IBU 65",
    color: "Kupferrot",
    description:
      "Ein kräftiges, aromatisches IPA mit intensiven Hopfenaromen von Zitrus und Kiefernharz. Gebraut mit österreichischen Bergquellwasser und ausgewählten Aromahopfen. Der stärkste Vertreter unserer Craftbier-Kollektion.",
    shortDescription: "Unser stärkstes Craftbier – intensiv, harzig, unvergesslich.",
    image: "/images/craft-beer-1.jpg",
    tags: ["Hopfig", "Stark", "Aromatisch"],
    origin: "Steiermark",
    featured: true,
  },
  {
    slug: "wiener-weizen",
    name: "Wiener Weizen",
    type: "Hefeweizen",
    alcohol: 5.4,
    bitterness: "IBU 15",
    color: "Goldgelb",
    description:
      "Ein traditionelles Hefeweizen nach Wiener Art. Cremige Textur, Bananen- und Gewürznelkenaromen. Perfekt an einem warmen Sommertag im Biergarten genossen. Gebraut nach einem Rezept aus dem 19. Jahrhundert.",
    shortDescription: "Cremig, fruchtig und nach echter Wiener Tradition gebraut.",
    image: "/images/craft-beer-2.jpg",
    tags: ["Fruchtig", "Klassisch", "Cremig"],
    origin: "Wien",
    featured: true,
  },
  {
    slug: "alpendunkel-stout",
    name: "Alpendunkel Stout",
    type: "Dry Stout",
    alcohol: 6.8,
    bitterness: "IBU 42",
    color: "Dunkelbraun bis Schwarz",
    description:
      "Ein samtiger Dry Stout mit Röstaromen von Kaffee und dunkler Schokolade. Die cremige Schaumkrone ist ein Markenzeichen dieses handwerklich gebrauten Meisterwerks. Lang im Abgang, komplex im Geschmack.",
    shortDescription: "Samtiger Stout mit Röstaromen von Kaffee und Schokolade.",
    image: "/images/craft-beer-3.jpg",
    tags: ["Dunkel", "Röstaromen", "Komplex"],
    origin: "Tirol",
    featured: true,
  },
  {
    slug: "salzburger-maerzen",
    name: "Salzburger Märzen",
    type: "Märzenbier",
    alcohol: 5.6,
    bitterness: "IBU 22",
    color: "Bernsteinfarben",
    description:
      "Das klassische Märzenbier nach Salzburger Art – malzbetont, vollmundig und mit einem sauberen, trockenen Abgang. Gebraut nach dem Deutschen Reinheitsgebot mit österreichischer Gerste und Hopfen aus der Hallertau.",
    shortDescription: "Das klassische österreichische Märzenbier – vollmundig und malzbetont.",
    image: "/images/craft-beer-4.jpg",
    tags: ["Klassisch", "Malzig", "Vollmundig"],
    origin: "Salzburg",
    featured: false,
  },
]

export function formatAlcoholVolDe(alcohol: number): string {
  return `${alcohol.toLocaleString("de-AT", { minimumFractionDigits: 0, maximumFractionDigits: 1 })} % vol`
}

export function maxCraftBeerAlcohol(): number {
  return Math.max(...craftBeers.map((b) => b.alcohol))
}
