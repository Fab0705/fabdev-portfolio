"use client";
import { useEffect } from "react";

export default function useAutoScroller(): void {
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Respeta prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scrollers = Array.from(document.querySelectorAll<HTMLElement>(".scroller"));
    const observers: ResizeObserver[] = [];

    scrollers.forEach((scroller) => {
      setupScroller(scroller);
    });

    function setupScroller(scroller: HTMLElement) {
      const scrollerInner = scroller.querySelector<HTMLElement>(".scroller__inner");
      if (!scrollerInner) return;

      if (scroller.dataset.scrollerInitialized === "true") return;
      scroller.dataset.scrollerInitialized = "true";

      scroller.setAttribute("data-animated", "true");

      const ensureEnoughCopies = () => {
        const originals = Array.from(scrollerInner.children).filter(
          (c) => !(c as HTMLElement).dataset.cloned
        ) as HTMLElement[];

        if (originals.length === 0) return;

        const visibleWidth = scroller.clientWidth || scroller.getBoundingClientRect().width;
        let contentWidth = scrollerInner.scrollWidth || scrollerInner.getBoundingClientRect().width;

        let safety = 0;
        const MAX_ITER = 30;

        while (contentWidth < visibleWidth * 2 && safety < MAX_ITER) {
          originals.forEach((item) => {
            const dup = item.cloneNode(true) as HTMLElement;
            dup.setAttribute("aria-hidden", "true");
            dup.dataset.cloned = "true";
            scrollerInner.appendChild(dup);
          });

          contentWidth = scrollerInner.scrollWidth || scrollerInner.getBoundingClientRect().width;
          safety++;
        }

        try {
          const seconds = Math.max(12, Math.round(contentWidth / 120));
          scroller.style.setProperty("--_animation-duration", `${seconds}s`);

          // 👇 NUEVO: calculamos el desplazamiento exacto hasta la mitad del contenido
          const halfWidth = contentWidth / 2;
          scroller.style.setProperty("--_scroll-distance", `-${halfWidth}px`);
        } catch (e) {
          // noop
        }
      };

      requestAnimationFrame(() => ensureEnoughCopies());

      const ro = new ResizeObserver(() => {
        requestAnimationFrame(() => ensureEnoughCopies());
      });
      ro.observe(scroller);
      ro.observe(scrollerInner);
      observers.push(ro);
    }

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);
}
