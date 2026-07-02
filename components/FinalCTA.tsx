"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--brand-blue-deep)] via-[var(--brand-blue)] to-[var(--brand-blue-deep)] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[var(--brand-lime)]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8"
      >
        <h2 className="text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
          Pronto para dar uma nova vida ao seu estofado?
        </h2>
        <p className="max-w-xl text-balance text-base leading-relaxed text-white/85">
          Fale agora com a Super Clean JP e receba seu orçamento sem
          compromisso em poucos minutos.
        </p>
        <a
          href={WHATSAPP_LINKS.default}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-5 w-5" />
          Chamar no WhatsApp agora
        </a>
      </motion.div>
    </section>
  );
}
