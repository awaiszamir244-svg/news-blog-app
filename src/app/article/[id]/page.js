import Header from "@/components/Header";
import { getArticles, CATEGORIES } from "@/lib/gnews";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArticleImage from "@/components/ArticleImage";

async function findArticleByUrl(targetUrl) {
  for (const category of CATEGORIES) {
    try {
      const articles = await getArticles({ category, max: 12 });
      const found = articles.find((a) => a.url === targetUrl);
      if (found) return { article: found, category };
    } catch {
      continue;
    }
  }
  return null;
}

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const targetUrl = decodeURIComponent(id);

  const result = await findArticleByUrl(targetUrl);

  if (!result) {
    notFound();
  }

  const { article, category } = result;

  return (
    <div className="min-h-screen bg-paper">
      <Header activeCategory={category} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <Link href={`/category/${category}`} className="font-mono text-xs text-stone hover:text-wire-red uppercase inline-block mb-6">
          Back to {category}
        </Link>

        <span className="inline-block bg-ink text-paper text-[10px] font-mono uppercase tracking-wide px-2 py-1 mb-4">
          {category}
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
          {article.title}
        </h1>

        <div className="flex items-center gap-3 font-mono text-xs text-stone uppercase mb-6 pb-6 border-b border-hairline">
          <span>{article.source?.name || "Unknown Source"}</span>
          <span>-</span>
          <span>{new Date(article.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>

       {article.image && (
  <ArticleImage src={article.image} alt={article.title} />
)}

        <p className="text-lg text-ink leading-relaxed mb-4">
          {article.description}
        </p>

        <p className="text-base text-stone leading-relaxed whitespace-pre-line">
          {article.content ? article.content.replace(/\[\d+ chars\]$/, "") : ""}
        </p>

        <a>
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 font-mono text-xs uppercase text-wire-red hover:underline"
        
          Read full article at {article.source?.name}
        </a>
      </main>
      <Footer />
    </div>
  );
}