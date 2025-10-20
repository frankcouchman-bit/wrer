// src/components/tools/Headline.jsx
import React, { useState } from "react";
import { Tools } from "@/lib/api";

export default function Headline() {
  const [headline, setHeadline] = useState("");
  const [out, setOut] = useState(null);
  const run = async (e) => {
    e.preventDefault();
    try { setOut(await Tools.headline(headline)); } catch (e) { alert(e.message); }
  };
  return (
    <div>
      <h3>Headline Analyzer</h3>
      <form onSubmit={run} style={{ display: "grid", gap: 8 }}>
        <input value={headline} onChange={(e)=>setHeadline(e.target.value)} placeholder="Enter headline..." />
        <button>Analyze</button>
      </form>
      {out && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8 }}>{JSON.stringify(out, null, 2)}</pre>}
    </div>
  );
}
