// src/pages/landing/ArticleWriter.jsx
import React from "react";
import HeadTags from "@/components/seo/HeadTags";
import GenerateButton from "@/components/GenerateButton";

export default function ArticleWriter() {
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}/article-writer` : "/article-writer";

  const keywords = ["article writer", "seo article writer", "long form writer", "content generator", "writing tool", "ai article writer"];
  const jsonLd = [{"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "SEOScribe AI Article Writer for SEO-Optimized Long-Form Content", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "24.00", "priceCurrency": "USD"}, "aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "187"}, "areaServed": "US, Global"}];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeadTags
        title="Article Writer — SEO-Optimized Long-Form Content | SEOScribe"
        description="Generate in-depth, intent-aligned articles (2,000–6,000+ words) with citations, meta, and internal links—built for U.S. and global SEO."
        keywords={keywords}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
      />

      <header className="py-14 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold">Article Writer</h1>
          <p className="mt-4 text-slate-600">Generate in-depth, intent-aligned articles (2,000–6,000+ words) with citations, meta, and internal links—built for U.S. and global SEO.</p>
          <div className="mt-6"><GenerateButton /></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">
        <section>
          <h2 className="text-2xl font-semibold">Why SEOScribe?</h2>
          <p className="mt-3 text-slate-700">
            Create deeply researched, SEO-optimized long-form articles with citations, meta, internal links, and social snippets.
            Our pipeline mirrors search intent using real-time SERP insights to maximize topical coverage and ranking potential.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="p-4 rounded-xl border">Long-form drafts (2,000–6,000+ words)</li>
            <li className="p-4 rounded-xl border">Automatic meta titles, descriptions & headings</li>
            <li className="p-4 rounded-xl border">Citations & outbound links to sources</li>
            <li className="p-4 rounded-xl border">Image suggestions + social cards</li>
            <li className="p-4 rounded-xl border">Internal linking suggestions</li>
            <li className="p-4 rounded-xl border">US & global geo-language support</li>
          </ul>
        </section>

        <section id="faqs">
          <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {[
              {"q":"What makes this tool different?","a":"It mirrors search intent, structures content to match the SERP, and includes citations, internal links, and meta out of the box."},
              {"q":"Is it suitable for U.S. and global markets?","a":"Yes—customize language and geo context for U.S. English or international English."},
              {"q":"How long are the articles?","a":"Configure 2,000–6,000+ words depending on topic depth and intent."},
              {"q":"Can I export to CMS?","a":"Yes—export markdown/HTML and copy meta tags directly. Notion/Trello export supported."}
            ].map((qa, i) => (
              <details key={i} className="p-4 rounded-xl border">
                <summary className="font-medium cursor-pointer">{qa.q}</summary>
                <p className="mt-2 text-slate-700">{qa.a}</p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={ { __html: JSON.stringify({
              "@context":"https://schema.org",
              "@type":"FAQPage",
              "mainEntity": [
                {"@type":"Question","name":"What makes this tool different?","acceptedAnswer":{"@type":"Answer","text":"It mirrors search intent, structures content to match the SERP, and includes citations, internal links, and meta out of the box."}},
                {"@type":"Question","name":"Is it suitable for U.S. and global markets?","acceptedAnswer":{"@type":"Answer","text":"Yes—customize language and geo context for U.S. English or international English."}},
                {"@type":"Question","name":"How long are the articles?","acceptedAnswer":{"@type":"Answer","text":"Configure 2,000–6,000+ words depending on topic depth and intent."}},
                {"@type":"Question","name":"Can I export to CMS?","acceptedAnswer":{"@type":"Answer","text":"Yes—export markdown/HTML and copy meta tags directly. Notion/Trello export supported."}}
              ]
            }) } }
          />
        </section>
      </main>
    </div>
  );
}
