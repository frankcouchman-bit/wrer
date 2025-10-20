// src/components/seo/HeadTags.jsx
import React, { useEffect } from "react";

function ensureMeta(name, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
}

export default function HeadTags({ title, description, keywords, canonical, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const metaDesc = ensureMeta("description");
      metaDesc.setAttribute("content", description);
      const ogDesc = ensureMeta("og:description", "property");
      ogDesc.setAttribute("content", description);
    }

    if (Array.isArray(keywords)) {
      const metaKeywords = ensureMeta("keywords");
      metaKeywords.setAttribute("content", keywords.join(", "));
    }

    if (title) {
      const ogTitle = ensureMeta("og:title", "property");
      ogTitle.setAttribute("content", title);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD consolidated
    let ld = document.getElementById("app-jsonld");
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = "app-jsonld";
      document.head.appendChild(ld);
    }
    if (jsonLd) {
      try { ld.textContent = JSON.stringify(jsonLd); } catch { ld.textContent = ""; }
    } else {
      ld.textContent = "";
    }
  }, [title, description, JSON.stringify(keywords), canonical, JSON.stringify(jsonLd)]);

  return null;
}
