import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import BackgroundFX from '../components/effects/BackgroundFX'
import ArticleGeneratorDemo from '../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check, Star } from 'lucide-react'

export default function Home() {
  const [showStrike, setShowStrike] = useState(false)
  const lastShownRef = useRef(0)
  useEffect(() => {
    const t = setTimeout(() => {
      const now = Date.now()
      if (now - lastShownRef.current > 30_000) {
        setShowStrike(true); lastShownRef.current = now
        setTimeout(() => setShowStrike(false), 5000)
      }
    }, 30_000)
    return () => clearTimeout(t)
  }, [])

  const stats = useMemo(() => ([
    { label: 'Average SEO Score', value: '92/100' },
    { label: 'Generation Time', value: '60s' },
    { label: 'Articles Generated', value: '50,000+' },
    { label: 'Active Users', value: '5,000+' },
  ]), [])

  return (
    <div className="min-h-screen bg-white">
      <BackgroundFX />
      <Navbar />

      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: showStrike ? 1 : 0, y: showStrike ? 0 : -6 }}
              className="inline-flex items-center gap-3 rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm text-violet-700">
              <span className="line-through opacity-60">$29</span>
              <span className="font-semibold">$24 / month</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">AI-Powered SEO Article Writer</h1>
              <p className="mt-4 text-slate-600 text-lg">
                Generate rank-ready articles in 60 seconds with real-time SERP research, built-in fact checks, hero images, FAQs, and meta tags.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">
                  Try Demo <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
                  See Pricing
                </div>
              <div className="mt-4 flex gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Check className="w-4 h-4" /> No credit card required</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Free forever plan</div>
              </div>
              <div className="mt-5 inline-flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-amber-400" />)} <span className="ml-2 text-sm text-slate-600">Loved by 5,000+ creators</span>
              </div>
            </div>

            <div className="md:col-span-5">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="text-sm font-semibold text-slate-800 mb-2">What you get in 60s</div>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• SERP-researched outline matching search intent</li>
                  <li>• 1,500–2,500 words per pass (expandable)</li>
                  <li>• Hero image, FAQs, citations, meta tags</li>
                  <li>• Social snippets for 9 platforms</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center">
              <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
              <div className="text-xs text-slate-600 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="demo" className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGeneratorDemo />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            ['Lightning fast generation', 'Create SEO-optimized drafts in 60 seconds with live SERP insights.'],
            ['Multi-region support', 'Localize research for the United States and beyond.'],
            ['8 powerful SEO tools', 'Readability, SERP preview, plagiarism, competitor analysis, and more.'],
          ].map(([h, p], i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-lg font-bold text-slate-900">{h}</div>
              <p className="mt-2 text-slate-600 text-sm">{p}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Start ranking higher today</h2>
          <p className="mt-3 text-slate-600">Try the live demo. Upgrade to Pro when you’re ready.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">
              Try Demo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
              Get Pro
            </div>
        </div>
      </section>
    </div>
  )
}
