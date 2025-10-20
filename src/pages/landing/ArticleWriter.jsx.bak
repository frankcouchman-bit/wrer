import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function ArticleWriter() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SEOScribe Article Writer',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      areaServed: region.name,
      offers: { '@type': 'Offer', price: '24.00', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Article Writer', item: `${window.location.origin}/article-writer` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is an article writer tool?',
          acceptedAnswer: { '@type': 'Answer', text: 'A tool that creates long-form drafts with headings, entities, images, FAQs, citations, and meta tags—ready to publish.' } },
        { '@type': 'Question', name: 'Does it include internal links?',
          acceptedAnswer: { '@type': 'Answer', text: 'We suggest internal links to your existing posts and key pages to improve crawl paths and topical depth.' } }
      ]
    }
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="Article Writer — SEO-Optimized Long-Form Content | SEOScribe"
        description="Article writer that mirrors search intent with real-time SERP research. Generate long-form content with citations, images, internal links, and meta in 60 seconds."
        keywords="article writer, seo article writer, long form writer, content generator, writing tool, ai writer"
        canonical={window.location.origin + '/article-writer'}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />

      {/* HERO */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start md:items-center justify-between gap-4">
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Article Writer for {region.name}: win intent, win rankings
            </h1>
            <RegionPicker onChange={setRegion} />
          </div>
          <p className="mt-4 text-slate-600 text-lg">
            Get search-intent-aligned long-form content with entity coverage, FAQs, citations, hero image and meta tags.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">
              Try Demo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
              See Pricing
            </a>
          </div>
          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> No credit card required</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Free forever plan</div>
          </div>
        </div>
      </section>

      {/* COMPARISON LIST */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Why SEOScribe outranks generic writers</h2>
          <ul className="mt-3 grid md:grid-cols-2 gap-3 text-slate-700">
            <li>• Real-time SERP research for {region.name}</li>
            <li>• Entity coverage & topical depth</li>
            <li>• FAQ and schema blocks for rich results</li>
            <li>• Internal-link prompts to build clusters</li>
            <li>• Hero images, citations, and meta tags</li>
            <li>• Expand to 5k–10k words with one click</li>
          </ul>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGeneratorDemo />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Article Writer FAQs</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold">How does it choose headings?</h3>
              <p>We analyze top pages, align H2/H3s to intent, and add entities users expect to see.</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I export?</h3>
              <p>Yes—copy, download, or publish to your CMS. Social snippets included.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Keep exploring: <a className="underline text-violet-700" href="/ai-writer">AI Writer</a> · <a className="underline text-violet-700" href="/writing-tool">Writing Tool</a> · <a className="underline text-violet-700" href="/seo-tools">SEO Tools</a>
          </p>
        </div>
      </section>
    </div>
  )
}
