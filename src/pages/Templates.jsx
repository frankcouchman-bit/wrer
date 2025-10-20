// src/pages/Templates.jsx
import React, { useEffect, useState } from "react";
import { API_BASE } from "@/lib/api";
import { bearerHeaders } from "@/lib/auth";

export default function Templates() {
  const [templates, setTemplates] = useState([]);
  const [topic, setTopic] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [resp, setResp] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/templates`, { headers: bearerHeaders() })
      .then(r => r.json()).then(setTemplates).catch(()=>{});
  }, []);

  const run = async (e) => {
    e.preventDefault();
    setErr(""); setResp(null);
    try {
      const res = await fetch(`${API_BASE}/templates/generate`, {
        method: "POST",
        headers: bearerHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ template_id: templateId, topic, region: "us" }),
      });
      if (!res.ok) throw new Error(await res.text());
      setResp(await res.json());
    } catch (e) {
      setErr(e.message || "Failed");
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h1>Templates</h1>
      <div style={{ marginTop: 10 }}>
        <select value={templateId} onChange={(e)=>setTemplateId(e.target.value)}>
          <option value="">Pick a template…</option>
          {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
        <input value={topic} onChange={(e)=>setTopic(e.target.value)} placeholder="Topic" style={{ marginLeft: 8 }} />
        <button onClick={run} style={{ marginLeft: 8 }}>Generate</button>
      </div>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      {resp && <pre style={{ background:"#f8fafc", padding: 10, borderRadius: 8, marginTop: 12 }}>{JSON.stringify(resp, null, 2)}</pre>}
    </div>
  );
}
