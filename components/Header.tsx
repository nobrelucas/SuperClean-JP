"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { BUSINESS, NAV_LINKS, WHATSAPP_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_24px_rgba(11,31,58,0.08)] backdrop-blur-md"
          : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="#topo" className="flex items-center gap-2.5">
          <Image
            src="/logo-supercleanjp.png"
            alt="Super Clean JP - Higienização Profissional de Estofados"
            width={48}
            height={48}
            priority
            className="h-12 w-20 object-contain sm:h-12"
          />
          <span className="font-display text-lg font-bold leading-none text-[var(--brand-navy)] sm:text-xl">
            Super<span className="text-[var(--brand-lime-dark)]">Clean</span>
            <span className="text-[var(--brand-blue)]">JP</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[var(--brand-navy-soft)] transition-colors hover:text-[var(--brand-blue)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga a Super Clean JP no Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-blue)]/25 text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-blue-pale)]"
          >
            <InstagramIcon className="h-5 w-5" strokeWidth={2} />
          </a>
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(14,99,201,0.35)] transition-transform hover:scale-[1.03] hover:bg-[var(--brand-blue-deep)]"
          >
            <MessageCircle className="h-4 w-4" />
            Orçamento grátis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--brand-navy)] lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--brand-blue-pale)] bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--brand-navy-soft)] active:bg-[var(--brand-blue-pale)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 px-3">
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--brand-blue)]/25 text-[var(--brand-blue)]"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={WHATSAPP_LINKS.default}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--brand-blue)] py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Orçamento grátis
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
