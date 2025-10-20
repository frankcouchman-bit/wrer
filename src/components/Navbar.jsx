// src/components/Navbar.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import QuotaBadge from "@/components/QuotaBadge";
import { usePlanStore } from "@/store/planStore";
import { captureAuthFromURL } from "@/lib/auth";

export default function Navbar() {
  const { init, plan, email } = usePlanStore((s) => ({ init: s.init, plan: s.plan, email: s.email }));
  const loc = useLocation();
  useEffect(() => { captureAuthFromURL(); }, [loc.pathname]);
  useEffect(() => { init(); }, [init]);

  return (
    <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: 700 }}>SEOScribe</Link>
        <Link to="/article-writer">Article Writer</Link>
        <Link to="/ai-writer">AI Writer</Link>
        <Link to="/writing-tool">Writing Tool</Link>
        <Link to="/generate">Generate</Link>
        <Link to="/tools">SEO Tools</Link>
        <Link to="/templates">Templates</Link>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <QuotaBadge />
        <Link to="/account" style={{ fontSize: 12, border: "1px solid #e5e7eb", padding: "6px 8px", borderRadius: 8 }}>
          {email ? email : "Sign In"}
        </Link>
      </div>
    </nav>
  );
}
