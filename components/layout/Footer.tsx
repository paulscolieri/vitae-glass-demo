import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-5">
            <Image
              src="/images/logo.avif"
              alt="Vitae Glass"
              width={160}
              height={160}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
            Modular borosilicate glass engineered for the discerning collector.
            Every component. Every combination. Laboratory precision.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.15em] uppercase mb-4 text-neutral-400">
            Shop
          </p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/collections/series", label: "All Components" },
              { href: "/configurator", label: "Build Your Own" },
              { href: "/products/voyager-base", label: "Voyager Series" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs tracking-[0.15em] uppercase mb-4 text-neutral-400">
            About
          </p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/why-vitae", label: "Why Vitae" },
              { href: "/faq", label: "FAQ" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-500 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-6 flex items-center justify-between">
          <p className="text-xs text-neutral-400 tracking-wide">
            © {new Date().getFullYear()} Vitae Glass. All rights reserved.
          </p>
          <p className="text-xs text-neutral-300 tracking-[0.15em] uppercase">
            Laboratory Luxury
          </p>
        </div>
      </div>
    </footer>
  );
}
