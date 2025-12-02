"use client";

import React, { useEffect, useRef } from "react";

/**
 * Cursor.jsx - Soft neon trailing snake cursor
 * Usage: import and render <Cursor /> in layout or top of page
 */

export default function Cursor() {
  const rootRef = useRef(null);
  const trailCount = 18;
  const trailsRef = useRef([]);
  const rafRef = useRef(null);
  const mouse = useRef({ x: window?.innerWidth / 2, y: window?.innerHeight / 2 });
  const pos = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = rootRef.current;
    if (!root) return;

    // main dot
    const main = document.createElement("div");
    main.className = "cursor-main";
    main.setAttribute("aria-hidden", "true");
    root.appendChild(main);

    // ring
    const ring = document.createElement("div");
    ring.className = "cursor-highlight-ring";
    root.appendChild(ring);

    // create trails
    for (let i = 0; i < trailCount; i++) {
      const dot = document.createElement("div");
      dot.className = `cursor-trail ${(i > trailCount * 0.66) ? "far" : ""} ${(i % 3 === 0) ? "accent-b" : (i % 2 === 0) ? "accent-a" : "accent-c"}`;
      dot.style.opacity = String(1 - i / (trailCount * 1.1));
      root.appendChild(dot);
      trailsRef.current[i] = dot;
      pos.current[i] = { x: mouse.current.x, y: mouse.current.y };
    }

    function isInteractive(el) {
      if (!el) return false;
      const tag = el.tagName?.toLowerCase?.() || "";
      if (["a", "button", "input", "textarea", "select"].includes(tag)) return true;
      if (el.getAttribute && el.getAttribute("role") === "button") return true;
      if (el.classList && el.classList.contains("magnetic")) return true;
      return false;
    }

    let hovering = false;
    function onMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      ring.style.left = `${mouse.current.x}px`;
      ring.style.top = `${mouse.current.y}px`;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = isInteractive(el);
      if (interactive && !hovering) {
        hovering = true;
        main.classList.add("cursor-hover");
        root.classList.add("interactive");
        root.classList.add("show-ring");
      } else if (!interactive && hovering) {
        hovering = false;
        main.classList.remove("cursor-hover");
        root.classList.remove("interactive");
        root.classList.remove("show-ring");
      }
    }
    function onLeave() {
      mouse.current.x = window.innerWidth / 2;
      mouse.current.y = window.innerHeight / 2;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    const ease = 0.22;
    function animate() {
      const mainX = mouse.current.x;
      const mainY = mouse.current.y;
      main.style.left = mainX + "px";
      main.style.top = mainY + "px";

      let prevX = mainX, prevY = mainY;
      for (let i = 0; i < trailCount; i++) {
        const p = pos.current[i];
        p.x += (prevX - p.x) * (ease + i * 0.002);
        p.y += (prevY - p.y) * (ease + i * 0.002);

        const t = trailsRef.current[i];
        if (t) {
          const scale = 1 - i / (trailCount * 1.8);
          t.style.left = p.x + "px";
          t.style.top = p.y + "px";
          t.style.transform = `translate(-50%,-50%) scale(${scale})`;
          t.style.opacity = String(0.95 - i / (trailCount * 1.05));
        }

        prevX = p.x;
        prevY = p.y;
      }

      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    document.documentElement.classList.add("use-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try { root.innerHTML = ""; } catch (e) {}
      document.documentElement.classList.remove("use-custom-cursor");
    };
  }, []);

  return <div ref={rootRef} className="cursor-root" aria-hidden="true" />;
}
