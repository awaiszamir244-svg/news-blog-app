import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { searchArticles } from "@/lib/gnews";
import Footer from "@/components/Footer";

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q?.trim() || "";

  let articles = [];
  let errorMessage = null;

  if (query) {
    try {
      articles = await searchArticles({ query, max: 15 });
    } catch (err) {
      errorMessage = err.message;
    }
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-baseline justify-between mb-6 border-b border-hairline pb-3">
          <h1 className="font-serif text-3xl font-bold text-ink">
            {query ? `Results for "${query}"` : "Search"}
          </h1>
          {query && (
            <span className="font-mono text-xs text-stone uppercase">
              {articles.length} stories
            </span>
          )}
        </div>

        {!query && (
          <div className="border border-hairline p-8 text-center text-stone font-mono text-sm">
            Type a keyword in the search bar above to find articles.
          </div>
        )}

        {query && errorMessage && (
          <div className="border border-wire-red bg-wire-red/5 text-wire-red p-4 font-mono text-sm mb-6">
            Couldn't complete the search right now. ({errorMessage}) Try again in a moment.
          </div>
        )}

        {query && !errorMessage && articles.length === 0 && (
          <div className="border border-hairline p-8 text-center text-stone font-mono text-sm">
            No articles found for "{query}". Try a different keyword.
          </div>
        )}

        {articles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.url} article={article} category="search" />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}