import { useEffect, useMemo, useState } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import { api } from '../../lib/api'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AiWriterVsHuman() {
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)

  const title = 'AI Writer vs Human Writer: What Actually Wins in 2025?'
  const desc  = 'A data-driven, SERP-researched deep dive comparing AI writers and human writers across quality, speed, cost, and SEO outcomes.'
  const canon = `${window.location.origin}/blog/ai-writer-vs-human`

  const json = useMemo(() => ([
    {
      '@context':'https://schema.org','@type':'Article',
      headline: title, inLanguage: 'en-US',
      author: { '@type':'Organization', name: 'SEOScribe' },
      publisher: { '@type':'Organization', name: 'SEOScribe' },
      mainEntityOfPage: canon
    },
    {
      '@context':'https://schema.org','@type':'FAQPage',
      mainEntity: [
        {'@type':'Question','name':'Is AI content good enough to rank?','acceptedAnswer':{'@type':'Answer','text':'With live SERP research, structured outlines, and proper edits, AI content ranks reliably for many intents.'}},
        {'@type':'Question','name':'Where should humans focus?','acceptedAnswer':{'@type':'Answer','text':'Strategy, editing, brand voice, and original data/insights to elevate beyond parity.'}}
      ]
    }
  ]), [canon, title])

  const generateLongform = async () => {
    setLoading(true)
    try {
      const res = await api.draftDemo('AI Writer vs Human Writer: What Actually Wins in 2025?')
      setPreview(res)
    } catch (e) { console.error(e) } finally { setLoading(false) }
  }

  useEffect(() => { generateLongform() }, [])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags title={title} description={desc} canonical={canon} jsonLd={json}
        keywords={['ai writer vs human', 'ai writer', 'human writer', 'seo content 2025', 'content strategy']} />
      <BackgroundFX />
      <Navbar />

      <article className="pt-20 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">{title}</h1>
          <p className="mt-3 text-slate-600">{desc}</p>

          <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <div className="font-semibold text-slate-900">Create a rank-ready article from this topic</div>
            <p className="text-sm text-slate-600 mt-1">Try the live demo — expand the draft when signed in.</p>
            <a href="/#demo" className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-xl font-bold bg-violet-600 text-white hover:bg-violet-500">
              Try Demo <ArrowRight className="w-4 h-4 ml-2" />
            </div>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900">Research-backed preview</h2>
            <p className="text-slate-600 text-sm mt-1">Below is a preview (top sections). Sign in to generate full long-form with expansions (5–10k words total).</p>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
              {loading && <div className="text-sm text-slate-600">Generating preview…</div>}
              {!loading && !preview && <button onClick={generateLongform} className="px-4 py-2 rounded-xl bg-violet-600 text-white">Generate Preview</button>}
              {preview && (
                <div className="prose max-w-none">
                  <h3 className="mt-0">{preview.title || 'AI Writer vs Human Writer — Preview'}</h3>
                  {(preview.sections || []).slice(0, 6).map((s, i) => (
                    <div key={i} className="mb-4">
                      {s.heading && <h4 className="mt-2">{s.heading}</h4>}
                      <p>{s.content || s.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">Next steps</h2>
            <ul className="list-disc pl-5 text-slate-700">
              <li><a className="text-violet-700 underline" href="/ai-writer">SEOScribe AI Writer</a></li>
              <li><a className="text-violet-700 underline" href="/article-writer">Article Writer</a></li>
              <li><a className="text-violet-700 underline" href="/writing-tool">Writing Tool</a></li>
              <li><a className="text-violet-700 underline" href="/pricing">Pricing</a></li>
            </ul>
          </section>
        </div>
      </article>

      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">
            Convert 9%? Get Pro now <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
          <p className="mt-2 text-slate-600 text-sm">Demo users see previews. Sign in to expand to full 5–10k words.</p>
        </div>
      </section>
    </div>
  )
}
