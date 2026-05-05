import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Vitae Glass`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="pt-16">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 tracking-wide mb-12">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections/series" className="hover:text-black transition-colors">Components</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        {/* Product detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="aspect-square bg-neutral-50 border border-neutral-100 relative overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-12"
              priority
            />
          </div>

          {/* Info */}
          <div className="lg:pt-8">
            <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-4">
              {product.category}
            </p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-light leading-none tracking-tight mb-6">
              {product.name}
            </h1>
            <p className="text-2xl font-light mb-8">${product.price}</p>

            <p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-md">
              {product.description}
            </p>

            <div className="space-y-3 mb-10">
              <button className="w-full py-4 bg-black text-white text-sm tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors">
                Add to Cart
              </button>
              <Link
                href="/configurator"
                className="block w-full py-4 border border-black text-black text-sm tracking-[0.15em] uppercase text-center hover:bg-black hover:text-white transition-colors"
              >
                Add to a Build
              </Link>
            </div>

            {/* Specs */}
            <div className="border-t border-neutral-100 pt-8 space-y-4">
              {[
                { label: "Material", value: "Borosilicate glass (33 expansion)" },
                { label: "Joint Size", value: "14mm / 18mm compatible" },
                { label: "Compatibility", value: "All Vitae modular components" },
                { label: "Handmade", value: "Yes — each piece individually inspected" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4">
                  <p className="text-xs tracking-[0.1em] uppercase text-neutral-400 flex-shrink-0">
                    {spec.label}
                  </p>
                  <p className="text-sm text-right">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-[120px]">
            <div className="border-t border-neutral-100 pt-16 mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-3">
                More {product.category}s
              </p>
              <h2 className="text-2xl font-light tracking-tight">You might also like</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group block">
                  <div className="aspect-square bg-neutral-50 border border-neutral-100 relative overflow-hidden mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="25vw"
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm font-medium">{p.name}</p>
                  <p className="text-sm text-neutral-400">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
