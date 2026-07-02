"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { BUSINESS, WHATSAPP_LINKS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[var(--brand-mist)] pb-20 pt-28 sm:pt-32 lg:pb-28"
    >
      {/* blobs decorativos de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-[var(--brand-blue-light)]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-80 w-80 rounded-full bg-[var(--brand-lime)]/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--brand-blue)] shadow-sm"
          >
            <MapPin className="h-3.5 w-3.5" />
            Atendimento em {BUSINESS.city} - {BUSINESS.state}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance font-display text-4xl font-extrabold leading-[1.08] text-[var(--brand-navy)] sm:text-5xl lg:text-[3.4rem]"
          >
            Seu estofado limpo, renovado e{" "}
            <span className="relative inline-block text-[var(--brand-blue)]">
              livre de ácaros
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                className="absolute -bottom-1 left-0 w-full text-[var(--brand-lime)]"
              >
                <path
                  d="M2 14 C 80 4, 220 4, 298 14"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg> 
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-[var(--brand-navy-soft)]"
          >
            Higienização profissional de sofás, colchões, tapetes, carpetes e
            estofados automotivos em João Pessoa. Removemos manchas, odores e
            ácaros com produtos seguros para crianças e pets — e você acompanha
            o resultado na hora.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#22c55e] px-7 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-[var(--brand-blue)] px-7 py-4 text-base font-bold text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-blue-pale)]"
            >
              <InstagramIcon className="h-5 w-5" />
              Ver no Instagram
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
