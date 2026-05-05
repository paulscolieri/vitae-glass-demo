import Image from "next/image";
import Link from "next/link";
import VideoHero from "@/components/ui/VideoHero";
import EmailCapture from "@/components/ui/EmailCapture";
import PressMarquee from "@/components/ui/PressMarquee";
import ReviewsCarousel from "@/components/ui/ReviewsCarousel";

const bestSellers = [
  {
    name: "Voyager UFO — Bamboo",
    tag: "Best Seller",
    image: "/images/best-sellers/VoyagerUfopercBamboo.webp",
    href: "/products/voyager-base",
    price: 498,
  },
  {
    name: "Classic UFO — Bamboo Set",
    tag: "Most Popular",
    image: "/images/best-sellers/VITAEGlassClassicUFObambooset.webp",
    href: "/products/classic-beaker-base",
    price: 388,
  },
  {
    name: "Voyager Dual UFO — Bamboo",
    tag: "New",
    image: "/images/best-sellers/VITAE_Glass_Voyager_Dual_ufo_bamboo-217986.webp",
    href: "/products/voyager-base",
    price: 628,
  },
  {
    name: "Classic Beaker Hourglass Set",
    tag: "Fan Favorite",
    image: "/images/best-sellers/VITAEGlassClassicBeakerHourglassbambooset.webp",
    href: "/products/classic-beaker-base",
    price: 418,
  },
  {
    name: "Swiss Freeze Module",
    tag: "Signature",
    image: "/images/best-sellers/Swiss_freezer_module_clear_vitae.webp",
    href: "/products/swiss-freeze-mod-percolator",
    price: 149,
  },
  {
    name: "Arc Mouthpiece",
    tag: "Essential",
    image: "/images/best-sellers/Arc-mouthpiece_side_vitae_tree.webp",
    href: "/products/arc-mouthpiece",
    price: 59,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[100dvh] flex items-end overflow-hidden bg-black">
        <VideoHero
          src="/videos/bong rotating hero video.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 pb-20 lg:pb-32 w-full">
          <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6">
            Laboratory Luxury
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-light leading-none tracking-tight text-white mb-8 max-w-3xl">
            Build your
            <br />
            perfect piece.
          </h1>
          <p className="text-lg text-white/70 max-w-md mb-10 leading-relaxed font-light">
            Modular borosilicate glass. Every component engineered to connect.
            Infinite combinations, zero compromise.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/configurator"
              className="inline-block px-8 py-4 bg-white text-black text-sm tracking-[0.15em] uppercase hover:bg-neutral-100 transition-colors"
            >
              Build Your Own
            </Link>
            <Link
              href="/collections/series"
              className="inline-block px-8 py-4 border border-white/40 text-white text-sm tracking-[0.15em] uppercase hover:border-white transition-colors"
            >
              Shop Components
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-20 z-10">
          <div className="flex items-center gap-3">
            <span className="block w-8 h-px bg-white/40" />
            <p className="text-xs tracking-[0.2em] uppercase text-white/40">Scroll</p>
          </div>
        </div>
      </section>

      {/* Press marquee */}
      <PressMarquee />

      {/* Intro / Build CTA */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-6">
              The Modular System
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-none tracking-tight mb-8">
              Four components.
              <br />
              One piece.
            </h2>
            <p className="text-base text-neutral-500 leading-relaxed mb-4 max-w-sm">
              Mouthpiece. Percolator. Base. Connector. Each crafted to precision
              tolerances that make every joint seamless.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-sm">
              Mix and match across the entire Vitae catalog. Upgrade components
              as the collection grows.
            </p>
            <Link
              href="/configurator"
              className="inline-block px-8 py-4 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors"
            >
              Start Building
            </Link>
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
            <Image
              src="/images/16-inch-Voyager-UFO-Bong-Bamboo-Vitae-Glass.webp"
              alt="Vitae Glass Voyager build"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Steps indicator */}
      <section className="border-y border-neutral-100 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", label: "Mouthpiece", sub: "Choose your draw" },
              { step: "02", label: "Percolator", sub: "Select filtration" },
              { step: "03", label: "Base", sub: "Pick your foundation" },
              { step: "04", label: "Connector", sub: "Finish with wood" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-3">
                <p className="text-3xl font-light text-neutral-200">{item.step}</p>
                <p className="text-sm font-medium tracking-wide">{item.label}</p>
                <p className="text-xs text-neutral-400 tracking-wide">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 lg:px-20 w-full">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-4">
              Best Sellers
            </p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-none tracking-tight">
              Our most-loved builds
            </h2>
          </div>
          <Link
            href="/collections/series"
            className="hidden md:inline-block text-sm tracking-[0.1em] uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
          >
            Shop All
          </Link>
        </div>

        {/* Editorial grid — 2 large + 4 small */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Large feature — first two */}
          {bestSellers.slice(0, 2).map((item) => (
            <Link key={item.name} href={item.href} className="group block col-span-1 md:col-span-1">
              <div className="relative aspect-[3/4] bg-neutral-50 border border-neutral-100 overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs tracking-[0.1em] uppercase bg-black text-white px-2 py-1">
                    {item.tag}
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium">{item.name}</p>
              <p className="text-sm text-neutral-400 mt-0.5">${item.price}</p>
            </Link>
          ))}

          {/* 4 smaller on the right / bottom */}
          <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-4 lg:gap-6">
            {bestSellers.slice(2, 6).map((item) => (
              <Link key={item.name} href={item.href} className="group block">
                <div className="relative aspect-square bg-neutral-50 border border-neutral-100 overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 25vw, 16vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] tracking-[0.08em] uppercase bg-black text-white px-1.5 py-0.5">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <p className="text-xs font-medium leading-snug">{item.name}</p>
                <p className="text-xs text-neutral-400 mt-0.5">${item.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambient video section */}
      <section className="relative h-[60vh] overflow-hidden">
        <VideoHero
          src="/videos/looping video main.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6">Vitae Glass</p>
            <h2 className="text-[clamp(2rem,6vw,5rem)] font-light leading-none tracking-tight text-white mb-8">
              Precision at every scale.
            </h2>
            <Link
              href="/why-vitae"
              className="inline-block text-sm tracking-[0.15em] uppercase text-white border-b border-white/40 pb-0.5 hover:border-white transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 lg:px-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {[
            {
              label: "Borosilicate Glass",
              body: "The same material used in scientific laboratories. Thermal shock resistant. Chemically inert. Uncompromising clarity.",
            },
            {
              label: "Precision Joints",
              body: "Every joint ground to ±0.1mm tolerance. Components connect with a satisfying click and zero play.",
            },
            {
              label: "Modular Forever",
              body: "The connector standard never changes. Your base from 2020 fits the percolator we release in 2026.",
            },
          ].map((item) => (
            <div key={item.label} className="border-t border-neutral-200 pt-8">
              <p className="text-sm font-medium tracking-wide mb-4">{item.label}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer reviews */}
      <ReviewsCarousel />

      {/* Email capture */}
      <EmailCapture />
    </div>
  );
}
