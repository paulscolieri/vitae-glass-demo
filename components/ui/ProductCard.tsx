import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  showCategory?: boolean;
}

export default function ProductCard({ product, showCategory = false }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-square bg-neutral-50 border border-neutral-100 overflow-hidden mb-4 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        {showCategory && (
          <p className="text-xs tracking-[0.15em] uppercase text-neutral-400">
            {product.category}
          </p>
        )}
        <p className="text-sm font-medium">{product.name}</p>
        <p className="text-sm text-neutral-500">${product.price}</p>
      </div>
    </Link>
  );
}
