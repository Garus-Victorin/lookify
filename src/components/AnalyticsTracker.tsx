"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    })
      .then(() => {
        window.dispatchEvent(new Event("lookify-analytics-update"));
      })
      .catch(() => {
        // ignore network errors
      });
  }, [pathname]);

  return null;
}
