// src/components/tools/Brief.jsx
import React, { useState } from "react";
import { Tools } from "@/lib/api";

export default function Brief() {
  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("us");
  const [out, setOut] = useState(null);
  const run = async (e) => {
    e.preventDefault();
    try { setOut(await Tools.brief(keyword, region)); } catch (e) { alert(e.message); }
  };
  return (
    <div>
      <h3>Content Brief</h3>
      <form onSubmit={run} style={{ display: "grid", gap: 8 }}>
        <input value={keyword} onChange={(e)=>setKeyword(e.target.value)} placeholder="Primary keyword" />
        <input value={region} onChange={(e)=>setRegion(e.target.value)} placeholder="Region (us, uk, ...)" />
        <button>Make brief</button>
      </form>
      {out && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8 }}>{JSON.stringify(out, null, 2)}</pre>}
    </div>
  );
}
