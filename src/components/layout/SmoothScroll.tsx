"use client";

import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let animId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis!.raf(time);
        animId = requestAnimationFrame(raf);
      }
      animId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(animId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
