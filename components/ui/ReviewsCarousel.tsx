"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    title: "Dual 8 Arm Tree Percolator",
    product: "Dual 8-Arm Percolator",
    image: "/images/dual 8 arm percolator.webp",
    rating: 5,
    date: "02/28/2026",
    reviewer: "Mark D.",
    body: "I've been very impressed with the Vitae Glass Dual 8-Arm Percolator. The dual stacked tree percs create incredibly smooth hits without feeling overly restrictive. Once you dial in the water level properly, both percs stack bubbles evenly and deliver a cool, flavorful pull. The build quality is exactly what you'd expect from scientific glass at this level.",
  },
  {
    title: "Quality product",
    product: "Mini Matrix Percolator",
    image: "/images/mini matrix percolator.webp",
    rating: 5,
    date: "02/09/2026",
    reviewer: "Andreas",
    body: "Stylish, thoughtful design throughout, and production quality is impeccable. If there is anything wrong with your order, there's great customer service. I've been recommending Vitae to everyone in my circle. The modular system is genius — I started with one base and have been building it out ever since.",
  },
  {
    title: "These are killer",
    product: "16\" Voyager UFO Bong",
    image: "/images/best-sellers/VoyagerUfopercBamboo.webp",
    rating: 5,
    date: "01/13/2026",
    reviewer: "Daniel F.",
    body: "Fantastic. Really great quality glass, really easy to clean, and most importantly smokes like a dream. For some reason or another combusting is the only way that cannabis helps my issue, but I have to try to give my lungs as much love as I can. This is perfect. The bamboo ring feels premium and the whole thing breaks down in minutes for cleaning.",
  },
  {
    title: "Best modular system on the market",
    product: "Voyager Base",
    image: "/images/Voyager base.webp",
    rating: 5,
    date: "12/22/2025",
    reviewer: "Josh T.",
    body: "I've tried every modular glass system out there. Vitae is not even close to being in the same category as the rest. The joints are airtight, the glass is thick, and the design is genuinely beautiful. I bought the Voyager base first and have since added three more components. Couldn't be happier.",
  },
  {
    title: "Swiss Freeze is a game changer",
    product: "Swiss Freeze Mod",
    image: "/images/swiss freeze mod percoloator.webp",
    rating: 5,
    date: "12/05/2025",
    reviewer: "Casey R.",
    body: "Put this in the freezer for 45 minutes before a session and you will not believe how cool and smooth the hit is. No water, no ice, no mess. Just silky cold vapor. I bought it skeptically and now it goes in every build I put together. The glycerin stays frozen for about an hour of use.",
  },
  {
    title: "Incredible craftsmanship",
    product: "Olive Wood Ring Connector",
    image: "/images/olive wood ring connector.webp",
    rating: 5,
    date: "11/18/2025",
    reviewer: "Maya S.",
    body: "The olive wood ring I received has the most stunning grain pattern. I've bought three wood rings now and they're all completely unique — the grain doesn't repeat. It elevates the whole piece from a glass instrument to something that belongs on a shelf when you're not using it. Vitae clearly sources these materials with care.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < count ? "#C9A84C" : "none"}
          stroke={i < count ? "#C9A84C" : "#D4D4D4"}
          strokeWidth="1"
        >
          <path d="M6 1l1.2 3.6H11L8.2 6.8l1 3.2L6 8.2 2.8 10l1-3.2L1 4.6h3.8z" />
        </svg>
      ))}
    </div>
  );
}

const PER_PAGE = 3;

export default function ReviewsCarousel() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(reviews.length / PER_PAGE);
  const visible = reviews.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  function go(dir: 1 | -1) {
    setDirection(dir);
    setPage((p) => (p + dir + totalPages) % totalPages);
  }

  return (
    <section className="border-t border-neutral-100 py-[80px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xl font-light tracking-tight">
              What customers are saying
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <Stars count={5} />
              <span className="text-sm text-neutral-400">1,197 Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => go(-1)}
                className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors"
                aria-label="Previous reviews"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M5 1L1 5M1 5L5 9M1 5H13" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
              <button
                onClick={() => go(1)}
                className="w-8 h-8 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors"
                aria-label="Next reviews"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={page}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {visible.map((review) => (
              <div
                key={review.reviewer}
                className="border border-neutral-100 p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <Stars count={review.rating} />
                  <span className="text-xs text-neutral-300">{review.date}</span>
                </div>

                <h3 className="text-sm font-medium leading-snug">{review.title}</h3>

                <div className="flex gap-4">
                  <div className="w-14 h-14 flex-shrink-0 bg-neutral-50 border border-neutral-100 relative overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.product}
                      fill
                      sizes="56px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-4">
                    {review.body}
                  </p>
                </div>

                <div className="mt-auto pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <p className="text-xs font-medium">{review.reviewer}</p>
                  <p className="text-xs text-neutral-300 tracking-wide">{review.product}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Page dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
              className={`w-1.5 h-1.5 transition-colors ${
                i === page ? "bg-black" : "bg-neutral-200"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
