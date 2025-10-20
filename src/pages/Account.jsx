// src/pages/Account.jsx
import React, { useState } from "react";
import { sendMagicLink } from "@/lib/api";

export default function Account() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const send = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const redirect = window.location.origin;
      await sendMagicLink(email, redirect);
      setSent(true);
    } catch (e) {
      setErr(e.message || "Failed");
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
      <h1>Account</h1>
      <p>Sign in with a magic link. You'll be redirected back here with your session.</p>
      <form onSubmit={send} style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com"
          style={{ flex: 1, padding: "10px 12px", borderRadius: 8, border: "1px solid #e5e7eb" }} />
        <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #111827", background: "#111827", color: "#fff" }}>
          Send magic link
        </button>
      </form>
      {sent && <p style={{ color: "green", marginTop: 10 }}>Magic link sent! Check your email.</p>}
      {err && <p style={{ color: "crimson", marginTop: 10 }}>{err}</p>}
    </div>
  );
}
