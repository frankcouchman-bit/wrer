// src/pages/Generate.jsx
import React, { useState } from "react";
import { draftArticle } from "@/lib/api";
import { usePlanStore } from "@/store/planStore";
import GenerateButton from "@/components/GenerateButton";

export default function Generate() {
  const [topic, setTopic] = useState("");
  const [wordCount, setWordCount] = useState(3000);
  const [resp, setResp] = useState(null);
  const [err, setErr] = useState("");

  const { noteGeneration } = usePlanStore((s) => ({ noteGeneration: s.noteGeneration }));

  const go = async (e) => {
    e.preventDefault();
    setErr("");
    setResp(null);
    try {
      const data = await draftArticle({ topic, target_word_count: wordCount, generate_social: true, region: "us", save: true });
      setResp(data);
      noteGeneration();
    } catch (e) {
      if (e.status === 429) setErr(e.body?.message || "Daily limit reached.");
      else if (e.status === 401) setErr("Sign in required. Create a free account to generate.");
      else if (e.status === 403) setErr(e.body?.message || "Demo limit reached. Sign in to continue.");
      else setErr(e.message || "Failed");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>Generate a Draft</h1>
      <form onSubmit={go} style={{ display: "grid", gap: 12, marginTop: 12 }}>
        <input value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Topic (e.g., Best budget mirrorless cameras)" required
          style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb" }} />
        <input type="number" value={wordCount} min={1000} max={6000} onChange={(e)=>setWordCount(+e.target.value)} />
        <div><button type="submit" style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #111827", background: "#111827", color: "#fff" }}>Generate</button></div>
      </form>
      {err && <p style={{ color: "crimson", marginTop: 10 }}>{err}</p>}
      {resp && (
        <div style={{ marginTop: 16, padding: 12, border: "1px solid #e5e7eb", borderRadius: 10 }}>
          <h2>{resp.title || "Draft"}</h2>
          <p><em>{resp.meta?.description || ""}</em></p>
          <p>Words: {resp.word_count || 0} · Sections: {(resp.sections||[]).length}</p>
        </div>
      )}
      <div style={{ marginTop: 24 }}>
        <GenerateButton />
      </div>
    </div>
  );
}
