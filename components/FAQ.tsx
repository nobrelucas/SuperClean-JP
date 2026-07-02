"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

const FAQS = [
  {
    q: "Quanto tempo leva para o estofado secar?",
    a: "Em condições normais, o tempo de secagem varia entre 2 e 6 horas, dependendo do tecido e da ventilação do ambiente. Usamos equipamentos de extração que minimizam a umidade aplicada.",
  },
  {
    q: "Os produtos utilizados são seguros para crianças e pets?",
    a: "Sim. Utilizamos produtos biodegradáveis e atóxicos, seguros para o contato de crianças e animais de estimação após a secagem completa do estofado.",
  },
  {
    q: "Vocês atendem em qual região de João Pessoa?",
    a: "Atendemos João Pessoa e região metropolitana. Envie seu endereço pelo WhatsApp para confirmarmos a disponibilidade e o prazo de atendimento.",
  },
  {
    q: "É necessário eu estar em casa durante o serviço?",
    a: "Recomendamos que sim, principalmente na avaliação inicial e ao final do serviço, para que você acompanhe o resultado. O atendimento é agendado com horário definido.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "É simples: envie fotos do estofado pelo WhatsApp, informe o tipo de tecido (se souber) e a cidade. Retornamos com um valor estimado e agendamos uma avaliação, se necessário.",
  },
  {
    q: "A higienização remove manchas antigas?",
    a: "Na maioria dos casos, sim — principalmente manchas orgânicas (café, suor, gordura, urina de pet). Manchas de tinta, caneta ou produtos corrosivos podem ter remoção parcial, dependendo do tecido.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-[var(--brand-mist)] py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime-dark)]">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-[var(--brand-blue-pale)] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-[var(--brand-navy)]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--brand-blue)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--brand-navy-soft)]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl bg-white p-7 text-center shadow-sm">
          <MessageCircleQuestion className="h-8 w-8 text-[var(--brand-blue)]" />
          <p className="font-display text-base font-bold text-[var(--brand-navy)]">
            Ainda tem dúvidas?
          </p>
          <a
            href={WHATSAPP_LINKS.faq}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Fale com a gente no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
