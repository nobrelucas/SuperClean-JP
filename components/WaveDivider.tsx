type Props = {
  variant?: "toWhite" | "toMist" | "toNavy";
  flip?: boolean;
  className?: string;
};

/**
 * Divisor de seção em formato de onda — referencia o motivo de "gota d'água"
 * presente na logo, criando fluidez entre as seções.
 */
export default function WaveDivider({
  variant = "toWhite",
  flip = false,
  className = "",
}: Props) {
  const fill =
    variant === "toWhite"
      ? "#ffffff"
      : variant === "toMist"
        ? "var(--brand-mist)"
        : "var(--brand-navy)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-16 w-full sm:h-24"
      >
        <path
          d="M0,64 C240,120 360,8 600,32 C840,56 900,112 1140,88 C1300,72 1380,48 1440,40 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
