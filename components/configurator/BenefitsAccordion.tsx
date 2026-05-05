"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Cleaning Made Easy",
    body: "Every part comes apart in seconds so you never have to wrestle a full-size bong under a sink, take a shower with your glass, or use a garden hose. Clean smaller pieces with precision and enjoy faster rinses, fewer spills, and way less stress during cleanup.",
  },
  {
    title: "Balancing Form and Function",
    body: "You don't have to choose between a bong that looks like a work of art and hits like a champ. Build your own bong at VITAE Glass for the best of both worlds. The shapes we've gone with are intentional — they hit exactly how you expect a premium piece of glass to hit.",
  },
  {
    title: "Premium Borosilicate Glass You Can Trust",
    body: "All VITAE pieces are made from thick, lab-grade borosilicate glass, so you can place your order with peace of mind knowing your new custom bong can handle heat, daily use, regular cleaning, and maybe even the occasional bump.",
  },
  {
    title: "The Possibilities Are Endless",
    body: "Whether you want a massive 30 inch bong or a smaller 16 inch bong, we make it easy to bring your vision to life at VITAE Glass. Take a look at our collection and see what catches your eye if you're looking for inspiration.",
  },
];

function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:opacity-70 transition-opacity"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm font-medium leading-snug">{title}</p>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1V11M1 6H11" stroke="black" strokeWidth="1" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-neutral-500 leading-relaxed pb-6 max-w-2xl">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BenefitsAccordion() {
  return (
    <section className="border-t border-neutral-100 py-[80px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left - intro */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-4">
              Why Build Your Own
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-light leading-tight tracking-tight mb-6">
              Benefits of a custom VITAE build
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              VITAE Glass started with one simple idea: bongs should be easier to live with. The vision to build your
              own came from real use, real cleaning headaches, and a desire to build glass that lasts longer than a
              single crack.
            </p>
          </div>

          {/* Right - accordion */}
          <div>
            {benefits.map((item) => (
              <AccordionItem key={item.title} title={item.title} body={item.body} />
            ))}

            {/* Completion note */}
            <div className="mt-8 p-5 bg-neutral-50 border border-neutral-100">
              <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-2">
                We'll Take Care of the Rest
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Put your build in the cart and we'll handle it from there — handcrafting your customized bong to
                perfection and getting it shipped quickly and discreetly so you can spark up that first bowl ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
