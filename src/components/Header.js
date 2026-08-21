"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/lib/gnews";

export default function Header({ activeCategory = "general" }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-ink text-paper">
      {/* Top bar: logo + live indicator + search */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-serif text-2xl font-bold tracking-tight">
            The Wire Desk
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-wire-red shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wire-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wire-red"></span>
          </span>
          LIVE
        </div>

        <form onSubmit={handleSearch} className="flex-1 max-w-xs">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm placeholder:text-paper/50 focus:outline-none focus:border-wire-red transition-colors"
          />
        </form>
      </div>

      {/* Category strip */}
      <nav className="border-t border-white/10 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 flex gap-1 font-mono text-xs uppercase tracking-wide whitespace-nowrap">
          <Link
            href="/"
            className={`px-3 py-3 border-b-2 transition-colors ${
              activeCategory === "general"
                ? "border-wire-red text-wire-red"
                : "border-transparent text-paper/70 hover:text-paper"
            }`}
          >
            Latest
          </Link>
          {CATEGORIES.filter((c) => c !== "general").map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat}`}
              className={`px-3 py-3 border-b-2 transition-colors ${
                activeCategory === cat
                  ? "border-wire-red text-wire-red"
                  : "border-transparent text-paper/70 hover:text-paper"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}