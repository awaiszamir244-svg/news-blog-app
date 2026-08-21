import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="font-mono text-xs text-wire-red uppercase tracking-wide mb-4">
          Error 404
        </p>
        <h1 className="font-serif text-4xl font-bold text-ink mb-4">
          Story not found
        </h1>
        <p className="text-stone mb-8">
          This page doesn't exist, or the article may have been moved. Head back to the latest stories.
        </p>
        <Link
          href="/"
          className="inline-block bg-ink text-paper font-mono text-xs uppercase tracking-wide px-6 py-3 hover:bg-wire-red transition-colors"
        >
          Back to Latest
        </Link>
      </main>
    </div>
  );
}