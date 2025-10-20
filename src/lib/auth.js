// src/lib/auth.js
export const TOKENS_KEY = "seoscribe_tokens";

export function getTokens() {
  try { return JSON.parse(localStorage.getItem(TOKENS_KEY) || "{}"); } catch { return {}; }
}
export function setTokens(obj) {
  try { localStorage.setItem(TOKENS_KEY, JSON.stringify(obj || {})); } catch {}
}
export function clearTokens() {
  try { localStorage.removeItem(TOKENS_KEY); } catch {}
}

export function bearerHeaders(extra = {}) {
  const t = getTokens();
  const h = { "Content-Type": "application/json", ...extra };
  if (t?.access_token) h.Authorization = `Bearer ${t.access_token}`;
  return h;
}

// capture access_token/refresh_token from URL (Supabase callback) and store
export function captureAuthFromURL() {
  const url = new URL(window.location.href);
  const at = url.searchParams.get("access_token");
  const rt = url.searchParams.get("refresh_token");
  const type = url.searchParams.get("type") || "";
  if (at) {
    setTokens({ access_token: at, refresh_token: rt, type });
    // clean URL
    url.searchParams.delete("access_token");
    url.searchParams.delete("refresh_token");
    url.searchParams.delete("type");
    history.replaceState({}, "", url.toString());
  }
}
