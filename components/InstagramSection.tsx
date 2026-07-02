"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { BUSINESS } from "@/lib/constants";

// Placeholder visual dos posts — quando o feed do Instagram for integrado
// (via API oficial da Meta ou serviço como SnapWidget/Elfsight), basta
// substituir este array por dados reais e renderizar as imagens.
const PLACEHOLDER_POSTS = [
  { tone: "from-[#3fa4e8] to-[#0f3f9e]" },
  { tone: "from-[#b7d326] to-[#0e63c9]" },
  { tone: "from-[#0f3f9e] to-[#8fa81c]" },
  { tone: "from-[#3fa4e8] to-[#b7d326]" },
];

export default function InstagramSection() {
  return (
    <section className="bg-[var(--brand-mist)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3fa4e8] via-[#0e63c9] to-[#b7d326] text-white shadow-lg">
            <InstagramIcon className="h-7 w-7" />
          </span>
          <h2 className="text-balance font-display text-3xl font-extrabold text-[var(--brand-navy)] sm:text-4xl">
            Veja nossos últimos trabalhos
          </h2>
          <p className="max-w-xl text-balance text-base leading-relaxed text-[var(--brand-navy-soft)]">
            Acompanhe {BUSINESS.instagramHandle} no Instagram e confira fotos e
            vídeos reais de higienizações realizadas em João Pessoa.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {PLACEHOLDER_POSTS.map((post, i) => (
            <motion.a
              key={i}
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${post.tone} shadow-md`}
            >
              <InstagramIcon
                className="h-8 w-8 text-white/70 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--brand-navy)]/0 opacity-0 transition-all duration-300 group-hover:bg-[var(--brand-navy)]/40 group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--brand-blue)] px-7 py-3.5 text-sm font-bold text-[var(--brand-blue)] transition-colors hover:bg-white"
          >
            <InstagramIcon className="h-4.5 w-4.5" />
            Siga no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
