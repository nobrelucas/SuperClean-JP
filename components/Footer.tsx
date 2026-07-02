import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { BUSINESS, NAV_LINKS, WHATSAPP_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-navy)] pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Super Clean JP"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="font-display text-lg font-bold text-white">
                Super<span className="text-[var(--brand-lime)]">Clean</span>
                <span className="text-[var(--brand-blue-light)]">JP</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {BUSINESS.legalTagline} em {BUSINESS.city} - {BUSINESS.state}.
              Cuidado profissional para o seu estofado, do sofá ao carro.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[var(--brand-lime)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Serviços
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/65">
              <li>Sofás e poltronas</li>
              <li>Colchões</li>
              <li>Tapetes e carpetes</li>
              <li>Estofados automotivos</li>
              <li>Cadeiras de escritório</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contato
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINKS.default}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[var(--brand-lime)]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {BUSINESS.whatsappDisplay}
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[var(--brand-lime)]"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                {BUSINESS.instagramHandle}
              </a>
              <span className="flex items-center gap-2 text-sm text-white/65">
                <MapPin className="h-4 w-4 shrink-0" />
                {BUSINESS.region}
              </span>
            </div>

            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              Siga no Instagram
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} {BUSINESS.name}. Todos os direitos reservados.
          </p>
          <p>{BUSINESS.legalTagline} — {BUSINESS.city}/{BUSINESS.state}</p>
        </div>
      </div>
    </footer>
  );
}
