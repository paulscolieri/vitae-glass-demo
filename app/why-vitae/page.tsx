import Image from "next/image";
import Link from "next/link";
import VideoHero from "@/components/ui/VideoHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Vitae — Our Philosophy",
  description: "The story behind Vitae Glass and our commitment to laboratory-grade modular glass.",
};

export default function WhyVitaePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-20 py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-8">
              Our Philosophy
            </p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-light leading-none tracking-tight">
              Why
              <br />
              Vitae.
            </h1>
          </div>
          <div>
            <p className="text-lg text-neutral-500 leading-relaxed font-light">
              We founded Vitae Glass on a simple premise: the tools you use every day should
              be worthy of the ritual. Durable. Beautiful. Endlessly customizable.
            </p>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/images/Voyager bundle Image.jpg"
          alt="Vitae Glass complete build"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20 w-full">
            <p className="text-xl font-light text-white/80 max-w-sm leading-relaxed">
              &ldquo;Laboratory precision should not be reserved for the laboratory.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {[
            {
              num: "01",
              title: "Material Integrity",
              body: "We use borosilicate glass with a 33 coefficient of expansion — the same formulation used in chemical laboratories and pharmaceutical equipment. It does not leach. It does not absorb. It does not compromise.",
            },
            {
              num: "02",
              title: "Modular by Design",
              body: "Every Vitae component is engineered to connect to every other Vitae component. The joint standard is locked. No planned obsolescence. The mouthpiece you buy today will fit the base we design in five years.",
            },
            {
              num: "03",
              title: "Artisan Production",
              body: "Each piece is individually flame-worked by glassblowers trained in scientific glassblowing. Tolerances are checked with calibrated gauges before anything leaves our studio.",
            },
            {
              num: "04",
              title: "Natural Materials",
              body: "Our wood rings are crafted from sustainably sourced hardwoods — bamboo, walnut, olive, and zebrawood. Each connector is unique. The grain does not repeat.",
            },
          ].map((item) => (
            <div key={item.num} className="border-t border-neutral-200 pt-10">
              <p className="text-4xl font-light text-neutral-200 mb-6">{item.num}</p>
              <h2 className="text-2xl font-light tracking-tight mb-6">{item.title}</h2>
              <p className="text-base text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cleaning video section */}
      <section className="border-y border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-[120px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-6">
                Designed for Longevity
              </p>
              <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-none tracking-tight mb-8">
                Effortless to maintain.
                <br />
                Built to last decades.
              </h2>
              <p className="text-base text-neutral-500 leading-relaxed mb-6 max-w-md">
                The modular design means you can deep-clean each component
                individually. No trapped residue. No need to replace the whole piece
                when one part needs attention.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed max-w-md">
                Borosilicate does not stain. Isopropyl and salt. Rinse. Done.
              </p>
            </div>
            <div className="relative aspect-video bg-black overflow-hidden">
              <VideoHero
                src="/videos/Cleaning video.mp4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] max-w-[1400px] mx-auto px-6 lg:px-20 text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-8">
          Begin Your Build
        </p>
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-light leading-none tracking-tight mb-12">
          Ready to configure
          <br />
          your piece?
        </h2>
        <Link
          href="/configurator"
          className="inline-block px-10 py-5 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors"
        >
          Build Your Own
        </Link>
      </section>
    </div>
  );
}
