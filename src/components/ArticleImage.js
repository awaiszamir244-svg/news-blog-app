"use client";

export default function ArticleImage({ src, alt }) {
  return (
    <div className="relative w-full h-[420px] mb-6 bg-hairline overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.target.parentElement.style.display = "none"; }}
      />
    </div>
  );
}