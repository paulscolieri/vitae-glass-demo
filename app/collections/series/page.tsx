"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/products";
import type { ProductCategory } from "@/lib/products";

const categories: { value: ProductCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "mouthpiece", label: "Mouthpieces" },
  { value: "percolator", label: "Percolators" },
  { value: "base", label: "Bases" },
  { value: "connector", label: "Connectors" },
  { value: "ashcatcher", label: "Ashcatchers" },
  { value: "downstem", label: "Downstems" },
  { value: "bowl", label: "Bowls" },
];

export default function CollectionsPage() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-4">
            The Collection
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-light leading-none tracking-tight">
              Component Series
            </h1>
            <Link
              href="/configurator"
              className="inline-block px-6 py-3 bg-black text-white text-xs tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors self-start"
            >
              Build Your Own
            </Link>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex gap-0 overflow-x-auto -mb-px">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`px-5 py-4 text-xs tracking-[0.15em] uppercase flex-shrink-0 border-b-2 transition-colors ${
                  active === cat.value
                    ? "border-black text-black"
                    : "border-transparent text-neutral-400 hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16">
        <p className="text-xs text-neutral-400 mb-8 tracking-wide">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} showCategory />
          ))}
        </div>
      </div>
    </div>
  );
}
