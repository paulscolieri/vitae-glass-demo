"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepCard from "./StepCard";
import BuildSummary from "./BuildSummary";
import CartModal from "./CartModal";
import { configuratorSteps, productsByCategory } from "@/lib/products";
import type { Product } from "@/lib/products";

function StepHelper({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative border border-neutral-100 bg-neutral-50 w-full mb-8">
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-40" : "max-h-12"}`}>
        <div className="flex gap-3 px-4 pt-4 pb-5">
          <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6.5" stroke="#C4C4C4"/>
            <path d="M7 6v4M7 4.5v.5" stroke="#C4C4C4" strokeWidth="1.2" strokeLinecap="square"/>
          </svg>
          <p className="text-xs text-neutral-500 leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Gradient fade when collapsed */}
      {!expanded && (
        <div className="absolute bottom-6 left-0 right-0 h-6 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-center gap-1.5 py-2 border-t border-neutral-100 text-xs tracking-[0.1em] uppercase text-neutral-400 hover:text-black transition-colors"
      >
        {expanded ? "Show less" : "Show more"}
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="10" height="6" viewBox="0 0 10 6" fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
        </motion.svg>
      </button>
    </div>
  );
}

export default function ConfiguratorWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<Record<number, Product>>({});
  const [showCart, setShowCart] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  const stepInfo = configuratorSteps[currentStep - 1];
  const stepProducts = productsByCategory[stepInfo.category] ?? [];
  const isComplete = Object.keys(selections).length === 4;

  function select(product: Product) {
    setSelections((prev) => ({ ...prev, [currentStep]: product }));
  }

  function goTo(step: number) {
    setCurrentStep(Math.min(Math.max(step, 1), 4));
  }

  function handleNext() {
    if (currentStep < 4) goTo(currentStep + 1);
    else if (isComplete) setShowCart(true);
  }

  function handleReset() {
    setSelections({});
    setCurrentStep(1);
    setShowCart(false);
  }

  const canProceed = !!selections[currentStep];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Step progress bar */}
      <div className="sticky top-16 z-30 bg-white border-b border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex items-center h-14 gap-0 overflow-x-auto">
            {configuratorSteps.map(({ step, label }) => {
              const done = !!selections[step];
              const active = step === currentStep;
              return (
                <button
                  key={step}
                  onClick={() => goTo(step)}
                  className={`flex items-center gap-3 px-4 lg:px-6 h-full flex-shrink-0 border-b-2 transition-all ${
                    active
                      ? "border-black text-black"
                      : done
                      ? "border-neutral-300 text-neutral-500 hover:border-neutral-500"
                      : "border-transparent text-neutral-300 cursor-default"
                  }`}
                  disabled={!done && step > currentStep}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center text-xs border transition-colors ${
                      active
                        ? "border-black bg-black text-white"
                        : done
                        ? "border-neutral-400 bg-neutral-400 text-white"
                        : "border-neutral-200 text-neutral-300"
                    }`}
                  >
                    {done && !active ? (
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="square" />
                      </svg>
                    ) : (
                      step
                    )}
                  </span>
                  <span className="text-xs tracking-[0.1em] uppercase hidden sm:inline">
                    {label}
                  </span>
                </button>
              );
            })}

            {/* Mobile summary toggle */}
            <button
              className="ml-auto lg:hidden px-4 h-full text-xs tracking-[0.1em] uppercase text-neutral-400 border-b-2 border-transparent flex items-center gap-2 flex-shrink-0"
              onClick={() => setShowMobileSummary(!showMobileSummary)}
            >
              Build ({Object.keys(selections).length}/4)
            </button>
          </div>
        </div>
      </div>

      {/* Mobile summary drawer */}
      <AnimatePresence>
        {showMobileSummary && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-b border-neutral-100 bg-neutral-50"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-6">
              <BuildSummary
                selections={selections}
                currentStep={currentStep}
                onAddToCart={() => setShowCart(true)}
                isComplete={isComplete}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 max-w-[1400px] mx-auto px-6 lg:px-20 py-12 w-full">
        <div className="flex gap-12 lg:gap-20">
          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="mb-10">
                  <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2">
                    Step {currentStep} of 4
                  </p>
                  <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-light leading-none tracking-tight mb-6">
                    {stepInfo.label}
                  </h1>
                  <StepHelper key={currentStep} text={stepInfo.helperText} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
                  {stepProducts.map((product) => (
                    <StepCard
                      key={product.slug}
                      product={product}
                      selected={selections[currentStep]?.slug === product.slug}
                      onSelect={select}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-neutral-100">
              <button
                onClick={() => goTo(currentStep - 1)}
                disabled={currentStep === 1}
                className="text-sm tracking-[0.1em] uppercase text-neutral-400 hover:text-black transition-colors disabled:opacity-20 disabled:cursor-default flex items-center gap-2"
              >
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M5 1L1 5M1 5L5 9M1 5H15" stroke="currentColor" strokeWidth="1" />
                </svg>
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed}
                className={`text-sm tracking-[0.15em] uppercase px-8 py-3 transition-colors flex items-center gap-3 ${
                  canProceed
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-neutral-100 text-neutral-300 cursor-default"
                }`}
              >
                {currentStep === 4 ? "Complete Build" : "Next"}
                {currentStep < 4 && (
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M11 1L15 5M15 5L11 9M15 5H1" stroke="currentColor" strokeWidth="1" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Desktop sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-32 border border-neutral-100 p-6 h-[calc(100vh-10rem)] overflow-hidden flex flex-col">
              <BuildSummary
                selections={selections}
                currentStep={currentStep}
                onAddToCart={() => setShowCart(true)}
                isComplete={isComplete}
              />
            </div>
          </div>
        </div>
      </div>

      <CartModal
        open={showCart}
        selections={selections}
        onClose={() => setShowCart(false)}
        onReset={handleReset}
      />
    </div>
  );
}
