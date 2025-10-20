// src/components/tools/MetaDesc.jsx
import React, { useState } from "react";
import { Tools } from "@/lib/api";

export default function MetaDesc() {
  const [text, setText] = useState("");
  const [out, setOut] = useState(null);
  const run = async (e) => {
    e.preventDefault();
    try { setOut(await Tools.meta(text)); } catch (e) { alert(e.message); }
  };
  return (
    <div>
      <h3>Meta Description</h3>
      <form onSubmit={run} style={{ display: "grid", gap: 8 }}>
        <textarea rows="4" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Paste article or summary" />
        <button>Generate</button>
      </form>
      {out && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8 }}>{JSON.stringify(out, null, 2)}</pre>}
    </div>
  );
}
