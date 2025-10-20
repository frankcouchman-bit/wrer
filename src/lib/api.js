// src/lib/api.js
import { bearerHeaders, getTokens } from "@/lib/auth";

export const API_BASE = import.meta.env.VITE_API_BASE || "/api";
export const AUTH_BASE = import.meta.env.VITE_AUTH_BASE || "/auth";

async function req(path, init = {}) {
  const res = await fetch(`${path.startsWith("/auth") ? AUTH_BASE : API_BASE}${path}`, {
    credentials: "include",
    ...init,
    headers: bearerHeaders(init.headers || {}),
  });
  const ct = res.headers.get("Content-Type") || "";
  const isJson = ct.includes("json");
  if (!res.ok) {
    const body = isJson ? await res.json().catch(() => ({})) : await res.text().catch(() => "");
    const err = new Error(body?.message || body?.error || `HTTP ${res.status}`);
    err.status = res.status; err.body = body;
    throw err;
  }
  return isJson ? res.json() : res.text();
}

export function getProfile() { return req("/profile"); }
export function draftArticle(payload) { return req("/draft", { method: "POST", body: JSON.stringify(payload) }); }
export function sendMagicLink(email, redirect) {
  return fetch(`${AUTH_BASE}/magic-link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, redirect })
  }).then(async r => {
    if (!r.ok) { const t = await r.text(); throw new Error(t || "Failed to send magic link"); }
    return r.json();
  });
}

// Tools
export const Tools = {
  serpPreview: (data) => req("/tools/serp-preview", { method: "POST", body: JSON.stringify(data) }),
  headline: (headline) => req("/tools/headline-analyzer", { method: "POST", body: JSON.stringify({ headline }) }),
  readability: (text) => req("/tools/readability", { method: "POST", body: JSON.stringify({ text }) }),
  plagiarism: (text) => req("/tools/plagiarism", { method: "POST", body: JSON.stringify({ text }) }),
  competitors: (keyword, region) => req("/tools/competitor-analysis", { method: "POST", body: JSON.stringify({ keyword, region }) }),
  keywords: (topic, text, region) => req("/tools/keywords", { method: "POST", body: JSON.stringify({ topic, text, region }) }),
  brief: (keyword, region) => req("/tools/content-brief", { method: "POST", body: JSON.stringify({ keyword, region }) }),
  meta: (content) => req("/tools/meta-description", { method: "POST", body: JSON.stringify({ content }) }),
  expand: (payload) => req("/expand", { method: "POST", body: JSON.stringify(payload) }),
  assistant: (payload) => req("/ai-assistant", { method: "POST", body: JSON.stringify(payload) }),
};

export function signedIn() { return !!getTokens()?.access_token; }
export async function recordGeneration(payload = {}) { try { return { ok: true, payload }; } catch (e) { return { ok:false, error: e?.message || String(e) } } }
