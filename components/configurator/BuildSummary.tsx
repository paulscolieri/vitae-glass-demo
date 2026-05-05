import Image from "next/image";
import type { Product } from "@/lib/products";
import { configuratorSteps } from "@/lib/products";

interface BuildSummaryProps {
  selections: Record<number, Product>;
  currentStep: number;
  onAddToCart: () => void;
  isComplete: boolean;
}

export default function BuildSummary({
  selections,
  currentStep,
  onAddToCart,
  isComplete,
}: BuildSummaryProps) {
  const total = Object.values(selections).reduce((sum, p) => sum + p.price, 0);
  const itemCount = Object.keys(selections).length;

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-neutral-100 pb-4 mb-4">
        <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-1">
          Your Build
        </p>
        <p className="text-xs text-neutral-300">
          {itemCount} of 4 components selected
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
        {configuratorSteps.map(({ step, label, category }) => {
          const product = selections[step];
          const isCurrent = step === currentStep;

          return (
            <div
              key={step}
              className={`flex items-center gap-3 p-3 transition-colors ${
                isCurrent
                  ? "bg-neutral-50 border border-neutral-200"
                  : product
                  ? "border border-neutral-100"
                  : "border border-dashed border-neutral-200 opacity-50"
              }`}
            >
              <div className="w-10 h-10 flex-shrink-0 bg-neutral-100 relative overflow-hidden">
                {product ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="40px"
                    className="object-contain p-1"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-neutral-300 font-light">
                      0{step}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs tracking-[0.1em] uppercase text-neutral-400">
                  {label}
                </p>
                {product ? (
                  <>
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-neutral-400">${product.price}</p>
                  </>
                ) : (
                  <p className="text-xs text-neutral-300">Not selected</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-neutral-100 pt-4 mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.1em] uppercase text-neutral-400">
            Estimated Total
          </p>
          <p className="text-sm font-medium">{total > 0 ? `$${total}` : "—"}</p>
        </div>

        {isComplete && (
          <button
            onClick={onAddToCart}
            className="w-full py-3 bg-black text-white text-xs tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors"
          >
            Add Build to Cart
          </button>
        )}
      </div>
    </div>
  );
}
