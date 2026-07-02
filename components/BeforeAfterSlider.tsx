"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

// Slider Antes/Depois com imagens reais
// As imagens devem estar em public/images/ (antes-1.jpg e depois-1.jpg)
// Proporção 4:3 mantida com object-cover

export default function BeforeAfterSlider() {
  const [percent, setPercent] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setContainerWidth(width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, ratio)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="no-select relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(11,31,58,0.18)]"
      >
        {/* camada "depois" (fundo completo) */}
        <div className="absolute inset-0">
          <Image
            src="/images/depois-1.jpeg"
            alt="Estofado limpo - Depois"
            fill
            className="object-cover"
            priority
          />
          <span className="absolute bottom-4 right-4 rounded-full bg-[var(--brand-lime)] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[var(--brand-navy)] shadow">
            Depois
          </span>
        </div>

        {/* camada "antes" (recortada pela % do slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${percent}%` }}
        >
          <Image
            src="/images/antes-1.jpeg"
            alt="Estofado sujo - Antes"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-[var(--brand-navy)] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow">
            Antes
          </span>
        </div>

        {/* linha divisória + alça */}
        <div
          className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white shadow-[0_0_0_2px_rgba(11,31,58,0.08)]"
          style={{ left: `${percent}%` }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 18 }}
            className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--brand-blue)] shadow-[0_6px_20px_rgba(11,31,58,0.25)]"
          >
            <MoveHorizontal className="h-5 w-5" strokeWidth={2.4} />
          </motion.div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs font-semibold text-[var(--brand-navy-soft)]/70">
        Arraste para os lados e compare o resultado
      </p>
    </div>
  );
}
