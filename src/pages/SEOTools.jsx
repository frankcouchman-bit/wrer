// src/pages/SEOTools.jsx
import React from "react";
import SERPPreview from "@/components/tools/SERPPreview";
import Headline from "@/components/tools/Headline";
import Readability from "@/components/tools/Readability";
import Plagiarism from "@/components/tools/Plagiarism";
import Keywords from "@/components/tools/Keywords";
import Brief from "@/components/tools/Brief";
import MetaDesc from "@/components/tools/MetaDesc";

export default function SEOTools() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: 16, display: "grid", gap: 24 }}>
      <h1>SEO Tools</h1>
      <SERPPreview />
      <Headline />
      <Readability />
      <Plagiarism />
      <Keywords />
      <Brief />
      <MetaDesc />
    </div>
  );
}
