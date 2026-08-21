const BASE_URL = "https://gnews.io/api/v4";
const API_KEY = process.env.GNEWS_API_KEY;

export const CATEGORIES = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];

// Fetch top headlines, optionally filtered by category
export async function getArticles({ category = "general", max = 10 } = {}) {
  const url = `${BASE_URL}/top-headlines?category=${category}&lang=en&max=${max}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour

  if (!res.ok) {
    throw new Error(`GNews request failed: ${res.status}`);
  }

  const data = await res.json();
  return data.articles || [];
}

// Search articles by keyword
export async function searchArticles({ query, max = 10 } = {}) {
  const url = `${BASE_URL}/search?q=${encodeURIComponent(query)}&lang=en&max=${max}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`GNews search failed: ${res.status}`);
  }

  const data = await res.json();
  return data.articles || [];
}