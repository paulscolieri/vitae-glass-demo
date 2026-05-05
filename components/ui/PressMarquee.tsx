import Image from "next/image";

const pressItems = [
  {
    name: "Herb",
    image: "/images/marquee/as_seen_on_Herb_5kb.png",
    quote: "The Best Bongs 2025 — Best Percolator Bong",
  },
  {
    name: "High Times",
    image: "/images/marquee/high_times_as_seen_on_9kb.webp",
    quote: "Best known for impressive looks and functionality",
  },
  {
    name: "Forbes",
    image: "/images/marquee/2023_-_Forbes_9kb.webp",
    quote: "Quality glass. This investment will certainly pay for itself.",
  },
  {
    name: "Greenstate",
    image: "/images/marquee/as_seen_on_Greenstate_9kb.png",
    quote: "A smart design built for smokers who appreciate good engineering",
  },
  {
    name: "Hip Hop Wired",
    image: "/images/marquee/as_seen_on_Hip_hop_wired_15kb.png",
    quote: "Mix-and-match design invites full customization",
  },
  {
    name: "Dope Magazine",
    image: "/images/marquee/2023_-_Dope_magazine_9kb.webp",
    quote: "A modular system that redefines the ritual",
  },
  {
    name: "Fat Nugs",
    image: "/images/marquee/as_seen_on_Fat_nugs.webp",
    quote: "Precision glass for the serious collector",
  },
  {
    name: "Dank City",
    image: "/images/marquee/Dank_City_VITAE_glass_review_9cfcd9e1-b566-43f6-9163-bbb8dd87770a.webp",
    quote: "Vitae Glass sets a new standard",
  },
  {
    name: "Stoner Mom",
    image: "/images/marquee/2023-_Stonermom_10kb.webp",
    quote: "Cleaning takes minutes. Absolutely worth it.",
  },
  {
    name: "Mary",
    image: "/images/marquee/as_seen_on_Mary_12kb.webp",
    quote: "Laboratory luxury for the modern consumer",
  },
];

function MarqueeItem({ item }: { item: (typeof pressItems)[number] }) {
  return (
    <div className="flex-shrink-0 flex items-center px-10">
      <div className="relative h-36 w-80">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="320px"
          className="object-contain object-center grayscale opacity-80"
        />
      </div>
    </div>
  );
}

export default function PressMarquee() {
  return (
    <section className="border-y border-neutral-100 py-10 overflow-hidden bg-white">
      <p className="text-xs tracking-[0.25em] uppercase text-neutral-300 text-center mb-8">
        As Seen On
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:pause-marquee">
          {/* Render twice for seamless loop */}
          {[...pressItems, ...pressItems].map((item, i) => (
            <MarqueeItem key={`${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
