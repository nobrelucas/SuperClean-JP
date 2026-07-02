"use client";

import { motion } from "framer-motion";
import {
  Baby,
  Clock3,
  Droplets,
  Leaf,
  ShieldCheck,
  Wind,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Droplets,
    title: "Remoção profunda de manchas",
    text: "Tecnologia de extração que retira sujeira encrustada sem encharcar o estofado.",
  },
  {
    icon: Wind,
    title: "Fim dos odores e mofo",
    text: "Neutralização de odores de suor, mofo, urina de pet e cigarro na origem.",
  },
  {
    icon: Baby,
    title: "Seguro para crianças e pets",
    text: "Produtos biodegradáveis, sem odor forte de químico e sem resíduo tóxico.",
  },
  {
    icon: ShieldCheck,
    title: "Combate a ácaros e fungos",
    text: "Redução de alérgenos que agravam rinite, asma e alergias respiratórias.",
  },
  {
    icon: Clock3,
    title: "Secagem rápida",
    text: "Em poucas horas o estofado já pode ser utilizado normalmente.",
  },
  {
    icon: Leaf,
    title: "Aumenta a vida útil",
    text: "Cuidado que preserva o tecido e adia a troca do estofado.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime-dark)]">
            Por que higienizar
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Mais do que limpeza: saúde e durabilidade para o seu estofado
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-[var(--brand-blue-pale)] bg-[var(--brand-mist)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--brand-blue-light)]/50 hover:shadow-[0_16px_40px_rgba(14,99,201,0.12)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--brand-blue)] shadow-sm transition-colors group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--brand-navy)]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--brand-navy-soft)]">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
