"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sofa, BedDouble, Car, LayoutGrid, Armchair } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

const SERVICES = [
  {
    icon: Sofa,
    title: "Sofás e poltronas",
    text: "Higienização completa de sofás retráteis, de canto, poltronas e chaises em tecido ou suede.",
    link: WHATSAPP_LINKS.sofa,
  },
  {
    icon: BedDouble,
    title: "Colchões",
    text: "Eliminação de ácaros, manchas e odores para um sono mais saudável.",
    link: WHATSAPP_LINKS.colchao,
  },
  {
    icon: LayoutGrid,
    title: "Tapetes e carpetes",
    text: "Limpeza profunda que devolve a cor e a maciez sem danificar as fibras.",
    link: WHATSAPP_LINKS.tapeteCarpete,
  },
  {
    icon: Car,
    title: "Estofados automotivos",
    text: "Bancos, teto e carpete do veículo com aparência e cheiro de novo.",
    link: WHATSAPP_LINKS.automotivo,
  },
  {
    icon: Armchair,
    title: "Cadeiras de escritório",
    text: "Higienização de cadeiras corporativas e residenciais, ideal para empresas.",
    link: WHATSAPP_LINKS.default,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[var(--brand-mist)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-lime-dark)]">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Higienização especializada para cada tipo de estofado
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, text, link }, i) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-7 shadow-[0_4px_20px_rgba(11,31,58,0.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(14,99,201,0.16)]"
            >
              <div
                aria-hidden
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--brand-blue-pale)] transition-transform duration-500 group-hover:scale-150"
              />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue-light)] to-[var(--brand-blue-deep)] text-white shadow-md">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-[var(--brand-navy)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--brand-navy-soft)]">
                  {text}
                </p>
              </div>
              <div className="relative mt-6 flex items-center gap-1.5 text-sm font-bold text-[var(--brand-blue)]">
                Pedir orçamento
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[var(--brand-blue-deep)] to-[var(--brand-blue)] p-7 text-white"
          >
            <h3 className="font-display text-xl font-bold">
              Não achou seu estofado na lista?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Atendemos praticamente qualquer tipo de estofado residencial ou
              corporativo. Fale com a gente e confirme na hora.
            </p>
            <a
              href={WHATSAPP_LINKS.default}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--brand-lime)] px-5 py-2.5 text-sm font-bold text-[var(--brand-navy)] transition-transform hover:scale-105"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
