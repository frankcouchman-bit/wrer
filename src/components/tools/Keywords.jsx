// src/components/tools/Keywords.jsx
import React, { useState } from "react";
import { Tools } from "@/lib/api";

export default function Keywords() {
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");
  const [region, setRegion] = useState("us");
  const [out, setOut] = useState(null);
  const run = async (e) => {
    e.preventDefault();
    try { setOut(await Tools.keywords(topic, text, region)); } catch (e) { alert(e.message); }
  };
  return (
    <div>
      <h3>Keyword Clusters</h3>
      <form onSubmit={run} style={{ display: "grid", gap: 8 }}>
        <input value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Topic" />
        <input value={region} onChange={(e)=>setRegion(e.target.value)} placeholder="Region (us, uk, ...)" />
        <textarea rows="4" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Optional content to extract from" />
        <button>Extract</button>
      </form>
      {out && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8 }}>{JSON.stringify(out, null, 2)}</pre>}
    </div>
  );
}
