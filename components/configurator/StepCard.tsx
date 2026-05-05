"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

interface StepCardProps {
  product: Product;
  selected: boolean;
  onSelect: (product: Product) => void;
}

export default function StepCard({ product, selected, onSelect }: StepCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(product)}
      className={`group text-left w-full transition-all duration-200 ${
        selected ? "ring-2 ring-black" : "hover:ring-1 ring-neutral-300"
      }`}
    >
      <div
        className={`aspect-square overflow-hidden relative transition-colors ${
          selected ? "bg-neutral-100" : "bg-neutral-50"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 18vw"
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
        {selected && (
          <div className="absolute top-3 right-3 w-5 h-5 bg-black flex items-center justify-center">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </div>
        )}
      </div>
      <div className="pt-3 pb-1 px-1">
        <p className="text-sm font-medium leading-snug">{product.name}</p>
        <p className="text-sm text-neutral-400 mt-0.5">${product.price}</p>
      </div>
    </motion.button>
  );
}
