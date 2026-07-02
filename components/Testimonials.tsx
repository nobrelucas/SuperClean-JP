"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// PLACEHOLDER: substitua pelos depoimentos reais dos seus clientes
// (nome, bairro e texto). Recomenda-se coletar prints de WhatsApp ou
// avaliações do Google para dar ainda mais credibilidade.
const TESTIMONIALS = [
  {
    name: "Mariana A.",
    location: "Bairro dos Estados, João Pessoa",
    text: "O sofá estava com manchas antigas de café e ficou irreconhecível. Equipe pontual e muito cuidadosa com os móveis.",
  },
  {
    name: "Rodrigo S.",
    location: "Manaíra, João Pessoa",
    text: "Fiz a higienização do colchão do meu filho por causa de alergia. Notamos diferença já na primeira noite de sono.",
  },
  {
    name: "Fernanda L.",
    location: "Bessa, João Pessoa",
    text: "Contratei para os bancos do carro antes de vender. O cheiro de novo voltou e o processo foi bem mais rápido do que eu esperava.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime-dark)]">
            Quem já contratou
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Clientes satisfeitos em toda João Pessoa
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative rounded-2xl border border-[var(--brand-blue-pale)] bg-[var(--brand-mist)] p-7"
            >
              <Quote className="h-8 w-8 text-[var(--brand-blue-light)]" strokeWidth={1.5} />
              <div className="mt-3 flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-[var(--brand-lime)] text-[var(--brand-lime)]"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--brand-navy-soft)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-[var(--brand-blue)]/10 pt-4">
                <p className="font-display text-sm font-bold text-[var(--brand-navy)]">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--brand-navy-soft)]/70">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
