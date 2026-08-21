# The Wire Desk — News & Blog Web App

A responsive news and blog platform built with Next.js. Browse the latest articles, filter by category, search by keyword, and read full article details — all sourced from real, live news data.

## Live Demo
[Add your Vercel link here after deployment]

## GitHub Repository
[https://github.com/awaiszamir244-svg/news-blog-app]

## Features

- Homepage with featured + latest articles (title, image, description, category, source, date)
- Filter articles across 7 categories: World, Business, Technology, Entertainment, Sports, Science, Health
- Full article detail pages with complete content and a link to the original source
- Keyword search across articles
- Loading skeletons, empty states, and error handling throughout
- Fully responsive design — desktop, tablet, and mobile
- Custom "Wire Desk" visual identity — editorial serif headlines, monospace metadata tags, live-pulse indicator

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Data source:** [GNews API](https://gnews.io) — real-time news headlines and search
- **Fonts:** Source Serif 4, Inter, IBM Plex Mono (via next/font)
- **Deployment:** Vercel

## Getting Started Locally

1. Clone the repository:
```bash
   git clone <your-repo-url>
   cd news-blog-app
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env.local` file in the project root:

GNEWS_API_KEY=your_gnews_api_key_here

   Get a free key at [gnews.io](https://gnews.io).

4. Run the development server:
```bash
   npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

src/
app/
page.js # Homepage
category/[slug]/page.js # Category filter pages
article/[id]/page.js # Article detail page
search/page.js # Search results
components/
Header.js
Footer.js
ArticleCard.js
ArticleImage.js
lib/
gnews.js # GNews API integration


## Notes

- Articles are identified by their source URL, since GNews's free tier does not provide stable article IDs.
- API responses are cached for 1 hour to stay within GNews's free-tier rate limit.
