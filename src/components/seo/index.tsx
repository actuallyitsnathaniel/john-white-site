import { useHead } from "@unhead/react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "music.album" | "music.song" | "profile";
  jsonLd?: object;
}

const SEO = ({
  title = "John White - Musician & Artist",
  description = "Official website of John White. Stream music, watch videos, and stay updated with latest releases and tour dates.",
  image = "https://johnwhitemusic.com/john-white-og-image.jpg",
  url = "https://johnwhitemusic.com",
  type = "website",
  jsonLd,
}: SEOProps) => {
  const fullTitle = title.includes("John White") ? title : `${title} | John White`;

  useHead({
    title: fullTitle,
    meta: [
      { name: "title", content: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "English" },
      { name: "author", content: "John White" },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:site_name", content: "John White" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: url },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    link: [{ rel: "canonical", href: url }],
    script: jsonLd ? [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }] : [],
  });

  return null;
};

export default SEO;
