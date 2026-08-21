export default function Loading() {
  return (
    <div className="min-h-screen bg-paper">
      <div className="h-[113px] bg-ink" />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="h-8 w-32 bg-hairline animate-pulse mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-hairline">
              <div className="aspect-[4/3] bg-hairline animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-hairline animate-pulse w-3/4" />
                <div className="h-4 bg-hairline animate-pulse w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}