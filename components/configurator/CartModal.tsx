"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/products";
import { configuratorSteps } from "@/lib/products";

interface CartModalProps {
  open: boolean;
  selections: Record<number, Product>;
  onClose: () => void;
  onReset: () => void;
}

export default function CartModal({ open, selections, onClose, onReset }: CartModalProps) {
  const total = Object.values(selections).reduce((sum, p) => sum + p.price, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50 bg-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-neutral-100">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-1">
                  Build Complete
                </p>
                <h2 className="text-xl font-light tracking-tight">Your custom build</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center hover:opacity-50 transition-opacity"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="black" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
              {configuratorSteps.map(({ step, label }) => {
                const product = selections[step];
                if (!product) return null;
                return (
                  <div key={step} className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-neutral-50 relative flex-shrink-0 border border-neutral-100">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-[0.1em] uppercase text-neutral-400">
                        {label}
                      </p>
                      <p className="text-sm font-medium">{product.name}</p>
                    </div>
                    <p className="text-sm text-neutral-500 flex-shrink-0">${product.price}</p>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-neutral-100 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-neutral-500">Total (4 items)</p>
                <p className="text-lg font-light">${total}</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                This is a demo build. In the live store, each component will be
                added to your cart and shipped together.
              </p>
              <button className="w-full py-4 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={onReset}
                className="w-full py-3 text-sm tracking-[0.1em] uppercase text-neutral-400 hover:text-black transition-colors"
              >
                Start a New Build
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
