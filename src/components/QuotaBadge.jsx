// src/components/QuotaBadge.jsx
import React from "react";
import { usePlanStore } from "@/store/planStore";

export default function QuotaBadge() {
  const { initialized, plan, usage, tool_usage_today, tool_limit_daily, dayLimit, dayRemaining, monthRemaining, monthLimit } =
    usePlanStore((s) => ({
      initialized: s.initialized,
      plan: s.plan,
      usage: s.usage,
      tool_usage_today: s.tool_usage_today,
      tool_limit_daily: s.tool_limit_daily,
      dayLimit: s.dayLimit,
      dayRemaining: s.dayRemaining,
      monthRemaining: s.monthRemaining,
      monthLimit: s.monthLimit,
    }));

  if (!initialized) return null;
  const dLeft = dayRemaining();
  const mLeft = monthRemaining();
  const dLimit = dayLimit();
  const mLimit = monthLimit();

  return (
    <div style={{ padding: "6px 10px", borderRadius: 12, border: "1px solid #e5e7eb", fontSize: 12 }}>
      Plan: <strong style={{ textTransform: "uppercase" }}>{plan}</strong> ·
      Daily: <strong>{dLeft}</strong> / {dLimit} ·
      Monthly: <strong>{mLeft}</strong> / {mLimit} ·
      Tools today: <strong>{tool_usage_today}</strong> (limit per tool: {tool_limit_daily})
    </div>
  );
}
