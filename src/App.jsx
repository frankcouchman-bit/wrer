import { Routes, Route } from 'react-router-dom'
import VisibleShell from './VisibleShell.jsx'
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ArticleWriter from "@/pages/landing/ArticleWriter.jsx";
import AIWriter from "@/pages/landing/AIWriter.jsx";
import WritingTool from "@/pages/landing/WritingTool.jsx";
import Generate from "@/pages/Generate.jsx";
import SEOTools from "@/pages/SEOTools.jsx";
import Templates from "@/pages/Templates.jsx";
import Account from "@/pages/Account.jsx";

function Home() {
  return (
    <div style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>SEOScribe</h1>
      <p style={{ color: "#374151" }}>
        Choose a landing page to preview. Quota badge (top-right) shows your plan and remaining daily generations.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <VisibleShell>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/article-writer" element={<ArticleWriter />} />
  <Route path="/ai-writer" element={<AIWriter />} />
  <Route path="/writing-tool" element={<WritingTool />} />
  <Route path="/generate" element={<Generate />} />
  <Route path="/tools" element={<SEOTools />} />
  <Route path="/templates" element={<Templates />} />
  <Route path="/account" element={<Account />} />
              <Route path="*" element={<Home />} />
      </Routes>
    </VisibleShell>
    </BrowserRouter>
  );
}
