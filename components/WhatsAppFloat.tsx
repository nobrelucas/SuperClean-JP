"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_LINKS.default}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Super Clean JP"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#22c55e] pl-4 pr-5 py-3.5 text-white shadow-[0_8px_30px_rgba(34,197,94,0.45)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22c55e]/60 [animation-duration:2.2s]" />
      <MessageCircle className="h-6 w-6 shrink-0" strokeWidth={2.2} />
      <span className="hidden font-display text-sm font-semibold sm:inline">
        Peça seu orçamento
      </span>
    </motion.a>
  );
}
