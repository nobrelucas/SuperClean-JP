"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterSection() {
  return (
    <section id="antes-depois" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime-dark)]">
            Resultado real
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Veja a transformação com a Super Clean JP
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-[var(--brand-navy-soft)]">
            Arraste o controle abaixo e compare o antes e o depois de uma
            higienização profissional.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <BeforeAfterSlider />
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(14,99,201,0.3)] transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            Quero esse resultado no meu estofado
          </a>
        </div>
      </div>
    </section>
  );
}
