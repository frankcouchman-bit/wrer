// src/components/tools/SERPPreview.jsx
import React, { useState } from "react";
import { Tools } from "@/lib/api";

export default function SERPPreview() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [out, setOut] = useState(null);
  const [err, setErr] = useState("");

  const run = async (e) => {
    e.preventDefault();
    setErr(""); setOut(null);
    try {
      const data = await Tools.serpPreview({ title, description, url });
      setOut(data);
    } catch (e) { setErr(e.message || "Failed"); }
  };

  return (
    <div>
      <h3>SERP Preview</h3>
      <form onSubmit={run} style={{ display: "grid", gap: 8 }}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
        <input value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="https://example.com/page" />
        <button>Preview</button>
      </form>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      {out && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8 }}>{JSON.stringify(out, null, 2)}</pre>}
    </div>
  );
}
