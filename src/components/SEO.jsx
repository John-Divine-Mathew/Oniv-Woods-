import { useEffect } from "react";

const SITE_NAME = "ONIV WOODS — School of Design Wisdom";
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop";
const SITE_URL = "https://onivwoods.com";

/**
 * SEO Component for Dynamic Metadata, Open Graph, Twitter Cards, Canonical URLs, and JSON-LD Structured Data.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  image = DEFAULT_IMAGE,
  structuredData = null,
}) {
  useEffect(() => {
    // 1. Page Title
    const fullTitle = title
      ? `${title} | ONIV WOODS`
      : `${SITE_NAME} | Wood Technology & Architectural Design`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMeta = (attrName, attrVal, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Helper to set or create link tag (canonical)
    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // 2. Standard Meta
    const metaDesc =
      description ||
      "Oniv Woods School of Design Wisdom — Premier institute for wood product design, industrial craftsmanship, timber architecture, and masterclasses across India & Indonesia.";
    setMeta("name", "description", metaDesc);
    setMeta("name", "robots", "index, follow, max-image-preview:large");

    // 3. Canonical URL
    const canonicalUrl = canonical
      ? `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
      : window.location.href;
    setLink("canonical", canonicalUrl);

    // 4. Open Graph Metadata
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", metaDesc);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);

    // 5. Twitter Card Metadata
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", metaDesc);
    setMeta("name", "twitter:image", image);

    // 6. Structured Data (JSON-LD)
    let jsonLdScript = document.getElementById("seo-jsonld");
    if (structuredData) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement("script");
        jsonLdScript.id = "seo-jsonld";
        jsonLdScript.type = "application/ld+json";
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      // Cleanup custom JSON-LD if component unmounts
      const script = document.getElementById("seo-jsonld");
      if (script) script.remove();
    };
  }, [title, description, canonical, ogType, image, structuredData]);

  return null;
}
