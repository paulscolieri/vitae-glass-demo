"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    section: "The Modular System",
    items: [
      {
        q: "How does the modular system work?",
        a: "Every Vitae Glass component is built around a universal joint standard. Mouthpieces, percolators, bases, and connectors all share the same interface dimensions. You mix and match freely — any mouthpiece with any base, any percolator with any connector. The system is designed to expand indefinitely without breaking compatibility.",
      },
      {
        q: "Will my existing components be compatible with new releases?",
        a: "Yes. We have locked the joint standard. New releases will always be backward and forward compatible with everything in the Vitae catalog. Your 2022 base will connect to a 2026 percolator without adapters.",
      },
      {
        q: "What is the wood ring connector for?",
        a: "The wood ring is the aesthetic and structural connector between your base and percolator (or base and mouthpiece, depending on your build). It provides a visual break, a grip point, and a natural material contrast against the glass. Functionally, it seals the joint between components.",
      },
    ],
  },
  {
    section: "Materials & Quality",
    items: [
      {
        q: "What type of glass do you use?",
        a: "All Vitae Glass components are made from borosilicate glass with a 33 coefficient of expansion. This is the same formulation used in laboratory equipment and pharmaceutical vessels. It is thermally shock resistant, chemically inert, and maintains optical clarity indefinitely.",
      },
      {
        q: "How are your products made?",
        a: "Each component is individually flame-worked by trained scientific glassblowers. Joint tolerances are measured with calibrated gauges. We do not do mass injection molding. Every piece is inspected before it ships.",
      },
      {
        q: "Where are Vitae Glass products made?",
        a: "Our glass components are produced in our studio. Wood rings are crafted by partner woodworkers specializing in sustainable hardwoods. We maintain direct oversight of the entire supply chain.",
      },
    ],
  },
  {
    section: "Care & Maintenance",
    items: [
      {
        q: "How do I clean my Vitae Glass components?",
        a: "The modular design makes cleaning easy — disassemble the build and clean each piece individually. For glass components, use 91%+ isopropyl alcohol with coarse salt. Shake, rinse thoroughly with warm water, and let dry completely before reassembling. The borosilicate does not stain or absorb residue.",
      },
      {
        q: "Can I use the Swiss Freeze Mod percolator in the dishwasher?",
        a: "No. The glycerin chamber is sealed and should never be submerged in hot water or placed in a dishwasher. Clean the exterior with isopropyl and a soft cloth. Store in a freezer between uses.",
      },
      {
        q: "How do I clean the wood ring connectors?",
        a: "Wipe with a barely damp cloth and dry immediately. Do not submerge in water or soak. For restoration of dry wood, a light application of food-safe mineral oil will revive the grain. Avoid harsh solvents on wood.",
      },
    ],
  },
  {
    section: "Orders & Shipping",
    items: [
      {
        q: "Do you ship internationally?",
        a: "We ship to most countries worldwide. Shipping rates and estimated delivery times are calculated at checkout based on your location. Some regions may have restrictions on glass products — you will be notified at checkout if your address is affected.",
      },
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery for unused items in original packaging. Custom builds are final sale. If a component arrives damaged, contact us immediately with photos and we will replace it at no cost.",
      },
      {
        q: "How is the modular build shipped?",
        a: "When you order a full build (4 components), each piece is individually wrapped and packed together in a single box with custom foam inserts. Everything arrives together, assembled and ready to inspect.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:opacity-70 transition-opacity"
        onClick={() => setOpen(!open)}
      >
        <p className="text-sm font-medium leading-snug">{q}</p>
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
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-[80px]">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-6">
              Support
            </p>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-light leading-none tracking-tight">
              Frequently
              <br />
              Asked.
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base text-neutral-500 leading-relaxed max-w-sm">
              Everything you need to know about the Vitae Glass modular system,
              materials, care, and orders.
            </p>
          </div>
        </div>

        {/* FAQ sections */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
          {/* Nav (desktop) */}
          <nav className="hidden lg:block">
            <div className="sticky top-32 flex flex-col gap-3">
              {faqs.map((section) => (
                <a
                  key={section.section}
                  href={`#${section.section.toLowerCase().replace(/ /g, "-")}`}
                  className="text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-black transition-colors"
                >
                  {section.section}
                </a>
              ))}
              <div className="mt-8 pt-8 border-t border-neutral-100">
                <p className="text-xs text-neutral-300 mb-3">Still have questions?</p>
                <Link
                  href="mailto:hello@vitaeglass.com"
                  className="text-xs tracking-[0.1em] uppercase border-b border-black pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Content */}
          <div className="space-y-16">
            {faqs.map((section) => (
              <div
                key={section.section}
                id={section.section.toLowerCase().replace(/ /g, "-")}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
                  {section.section}
                </p>
                <div>
                  {section.items.map((item) => (
                    <AccordionItem key={item.q} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-medium mb-2">Ready to build?</p>
            <p className="text-sm text-neutral-400">Configure your perfect piece in minutes.</p>
          </div>
          <Link
            href="/configurator"
            className="inline-block px-8 py-4 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors flex-shrink-0"
          >
            Build Your Own
          </Link>
        </div>
      </div>
    </div>
  );
}
