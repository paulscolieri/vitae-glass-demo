"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="border-t border-neutral-100 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-4">
            The List
          </p>
          <h2 className="text-2xl font-light tracking-tight mb-3">
            New components, first.
          </h2>
          <p className="text-sm text-neutral-400 mb-8">
            Early access to new releases, limited editions, and build inspiration.
          </p>

          {submitted ? (
            <p className="text-sm tracking-wide text-neutral-500">
              You&rsquo;re on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 border border-neutral-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white text-xs tracking-[0.15em] uppercase hover:bg-neutral-800 transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
