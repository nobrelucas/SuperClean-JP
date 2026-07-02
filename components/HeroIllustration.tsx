export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[560px]"
      role="img"
      aria-label="Ilustração de sofá sendo higienizado com jato de espuma"
    >
      <defs>
        <linearGradient id="sofaGrad" x1="60" y1="220" x2="500" y2="420" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3fa4e8" />
          <stop offset="1" stopColor="#0e63c9" />
        </linearGradient>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="560" y2="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b7d326" />
          <stop offset="1" stopColor="#0e63c9" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#eaf4fc" stopOpacity="0.9" />
          <stop offset="1" stopColor="#eaf4fc" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* halo de fundo */}
      <circle cx="300" cy="240" r="230" fill="url(#glow)" />

      {/* respingos decorativos */}
      <circle cx="80" cy="120" r="10" fill="#b7d326" opacity="0.7" />
      <circle cx="120" cy="90" r="5" fill="#3fa4e8" opacity="0.7" />
      <circle cx="470" cy="140" r="7" fill="#b7d326" opacity="0.6" />
      <circle cx="500" cy="180" r="4" fill="#0e63c9" opacity="0.6" />

      {/* base/sombra */}
      <ellipse cx="290" cy="452" rx="190" ry="22" fill="#0b1f3a" opacity="0.08" />

      {/* sofá — corpo */}
      <rect x="95" y="255" width="360" height="140" rx="28" fill="url(#sofaGrad)" />
      {/* sofá — assentos (linhas de costura) */}
      <path d="M215 260 V390" stroke="#eaf4fc" strokeOpacity="0.35" strokeWidth="3" />
      <path d="M335 260 V390" stroke="#eaf4fc" strokeOpacity="0.35" strokeWidth="3" />
      {/* sofá — braços */}
      <rect x="75" y="230" width="55" height="165" rx="20" fill="#0f3f9e" />
      <rect x="420" y="230" width="55" height="165" rx="20" fill="#0f3f9e" />
      {/* sofá — encosto */}
      <rect x="95" y="185" width="360" height="95" rx="26" fill="#3fa4e8" />
      {/* almofadas */}
      <rect x="130" y="205" width="120" height="60" rx="16" fill="#eaf4fc" opacity="0.9" />
      <rect x="300" y="205" width="120" height="60" rx="16" fill="#eaf4fc" opacity="0.9" />
      {/* pés */}
      <rect x="105" y="393" width="14" height="26" rx="4" fill="#0b1f3a" opacity="0.75" />
      <rect x="435" y="393" width="14" height="26" rx="4" fill="#0b1f3a" opacity="0.75" />

      {/* onda de espuma / limpeza — motivo da logo */}
      <path
        d="M60 205 C 100 150, 150 235, 190 175 C 225 122, 260 205, 300 165 C 335 130, 370 195, 410 160"
        stroke="url(#waveGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="205" r="14" fill="#0e63c9" />
      <circle cx="410" cy="160" r="9" fill="#b7d326" />

      {/* bolhas de espuma subindo */}
      <circle cx="150" cy="140" r="9" fill="#ffffff" stroke="#3fa4e8" strokeWidth="2.5" />
      <circle cx="185" cy="105" r="14" fill="#ffffff" stroke="#3fa4e8" strokeWidth="2.5" />
      <circle cx="225" cy="70" r="8" fill="#ffffff" stroke="#b7d326" strokeWidth="2.5" />
      <circle cx="245" cy="130" r="6" fill="#ffffff" stroke="#3fa4e8" strokeWidth="2" />
      <circle cx="330" cy="95" r="11" fill="#ffffff" stroke="#b7d326" strokeWidth="2.5" />
    </svg>
  );
}
