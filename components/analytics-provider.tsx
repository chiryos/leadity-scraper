"use client";

/**
 * <AnalyticsProvider /> — calls initAnalytics() once on first client render.
 *
 * Mounted in app/layout.tsx. initAnalytics() is a no-op outside production,
 * so dev builds never make PostHog network requests. In production it
 * reads NEXT_PUBLIC_POSTHOG_KEY (TODO env var until the user provides it).
 */

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return;
    initAnalytics();
  }, []);
  return null;
}
