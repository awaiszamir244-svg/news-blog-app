"use client";

import Link from "next/link";

function timeAgo(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return "JUST NOW";
  if (hours < 24) return `${hours}H AGO`;
  const days = Math.floor(hours / 24);
  return `${days}D AGO`;
}

export default function ArticleCard({ article, category = "news", featured = false }) {
  const id = encodeURIComponent(article.url);

  return (
    <Link
      href={`/article/${id}`}
      className="group block bg-white border border-hairline hover:border-ink transition-colors"
    >
      <div className={`relative overflow-hidden bg-hairline ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone font-mono text-xs">
            NO IMAGE
          </div>
        )}
        <span suppressHydrationWarning className="absolute top-2 left-2 bg-ink text-paper text-[10px] font-mono uppercase tracking-wide px-2 py-1">
          {category} · {timeAgo(article.publishedAt)}
        </span>
      </div>

      <div className="p-4">
        <h3 className={`font-serif font-bold text-ink leading-snug group-hover:text-wire-red transition-colors ${featured ? "text-2xl" : "text-lg"}`}>
          {article.title}
        </h3>
        {article.description && (
          <p className="text-sm text-stone mt-2 line-clamp-2">
            {article.description}
          </p>
        )}
        <p className="text-xs font-mono text-stone mt-3 uppercase">
          {article.source?.name || "Unknown Source"}
        </p>
      </div>
    </Link>
  );
}