// src/store/planStore.js
import { create } from "zustand";
import { getProfile } from "@/lib/api";

// Mirror backend quotas (chatgptwork.txt)
const SERVER_QUOTAS = { free: { perDay: 1, perMonth: 31 }, pro: { perDay: 15, perMonth: 9999 } };
const TOOL_LIMITS = { free: 1, pro: 10 }; // per tool per day

export const usePlanStore = create((set, get) => ({
  initialized: false,
  plan: "free",
  email: "",
  usage: { today: { generations: 0 }, month: { generations: 0 } },
  tool_usage_today: 0,
  tool_limit_daily: 1,

  async init() {
    try {
      const profile = await getProfile();
      const plan = profile.plan || "free";
      set({
        initialized: true,
        plan,
        email: profile.email || "",
        usage: profile.usage || { today: { generations: 0 }, month: { generations: 0 } },
        tool_usage_today: profile.tool_usage_today || profile.tools_today || 0,
        tool_limit_daily: profile.tool_limit_daily || TOOL_LIMITS[plan] || 1,
      });
    } catch (e) {
      // Fallback/offline
      set({ initialized: true });
    }
  },

  dayLimit() { return SERVER_QUOTAS[get().plan]?.perDay || 1; },
  monthLimit() { return SERVER_QUOTAS[get().plan]?.perMonth || 31; },
  dayRemaining() {
    const { usage } = get();
    return Math.max(0, get().dayLimit() - (usage?.today?.generations || 0));
  },
  monthRemaining() {
    const { usage } = get();
    return Math.max(0, get().monthLimit() - (usage?.month?.generations || 0));
  },
  noteGeneration() {
    const s = get();
    const usedToday = (s.usage?.today?.generations || 0) + 1;
    const usedMonth = (s.usage?.month?.generations || 0) + 1;
    set({ usage: { today: { generations: usedToday }, month: { generations: usedMonth } } });
  }
}));
