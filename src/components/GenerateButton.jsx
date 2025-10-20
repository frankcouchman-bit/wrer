// src/components/GenerateButton.jsx
import React, { useState } from "react";
import { usePlanStore } from "@/store/planStore";
import { recordGeneration } from "@/lib/api";

export default function GenerateButton() {
  const { canGenerate, onGenerated, remaining } = usePlanStore((s) => ({
    canGenerate: s.canGenerate,
    onGenerated: s.onGenerated,
    remaining: s.remaining,
  }));
  const [busy, setBusy] = useState(false);
  const allowed = canGenerate();

  const handle = async () => {
    if (!allowed || busy) return;
    setBusy(true);
    try {
      // Call backend if available; ignore errors for local demo
      await recordGeneration();
      onGenerated();
      alert(`Generated! Remaining today: ${remaining()}`);
    } catch (e) {
      // still decrement locally so demo works
      onGenerated();
      alert(`Generated (local). Remaining today: ${remaining()}`);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      onClick={handle}
      disabled={!allowed || busy}
      style={{
        padding: "10px 14px",
        borderRadius: 10,
        border: "1px solid #111827",
        background: allowed ? "#111827" : "#9ca3af",
        color: "#fff",
        cursor: allowed ? "pointer" : "not-allowed",
      }}
    >
      {busy ? "Generating..." : allowed ? "Generate Article" : "Quota Reached"}
    </button>
  );
}
