import Header from "@/components/Header";
import ArticleCard from "@/components/ArticleCard";
import { getArticles, CATEGORIES } from "@/lib/gnews";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  if (!CATEGORIES.includes(slug)) {
    notFound();
  }

  let articles = [];
  let errorMessage = null;

  try {
    articles = await getArticles({ category: slug, max: 12 });
  } catch (err) {
    errorMessage = err.message;
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header activeCategory={slug} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-baseline justify-between mb-6 border-b border-hairline pb-3">
          <h1 className="font-serif text-3xl font-bold text-ink capitalize">{slug}</h1>
          <span className="font-mono text-xs text-stone uppercase">
            {articles.length} stories
          </span>
        </div>

        {errorMessage && (
          <div className="border border-wire-red bg-wire-red/5 text-wire-red p-4 font-mono text-sm mb-6">
            Couldn't load articles right now. ({errorMessage}) Try refreshing the page.
          </div>
        )}

        {!errorMessage && articles.length === 0 && (
          <div className="border border-hairline p-8 text-center text-stone font-mono text-sm">
            No articles found in this category. Check back later.
          </div>
        )}

        {articles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id || article.url} article={article} category={slug} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}