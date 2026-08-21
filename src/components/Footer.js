export default function Footer() {
  return (
    <footer className="border-t border-hairline mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg font-bold text-ink">The Wire Desk</span>
        <p className="font-mono text-xs text-stone uppercase text-center sm:text-left">
          Built with Next.js · Powered by GNews API
        </p>
        <p className="font-mono text-xs text-stone uppercase">
          © 2026 The Wire Desk
        </p>
      </div>
    </footer>
  );
}