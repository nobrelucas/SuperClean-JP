"use client";

import { motion } from "framer-motion";

const DIFFERENTIALS = [
  {
    number: "01",
    title: "Avaliação e orçamento sem compromisso",
    text: "Você envia fotos pelo WhatsApp e recebe o valor antes de fechar qualquer serviço.",
  },
  {
    number: "02",
    title: "Equipe treinada e uniformizada",
    text: "Profissionais capacitados para cada tipo de tecido, sem risco de danificar o estofado.",
  },
  {
    number: "03",
    title: "Equipamentos profissionais de extração",
    text: "Nada de balde e pano — usamos máquinas que realmente removem a sujeira de dentro da fibra.",
  },
  {
    number: "04",
    title: "Atendimento em toda João Pessoa",
    text: "Vamos até você, com horário agendado e pontualidade.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-[var(--brand-navy)] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-blue-deep)_0%,_transparent_60%)] opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[var(--brand-lime)]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime)]">
            Diferenciais Super Clean JP
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-white sm:text-4xl">
            O que garante um serviço acima da média
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {DIFFERENTIALS.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.5 }}
              className="flex gap-5 border-t border-white/10 pt-6"
            >
              <span className="font-display text-3xl font-extrabold text-[var(--brand-lime)]">
                {item.number}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
