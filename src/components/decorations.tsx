export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 40"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="#C0392B"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M10 20 H100" />
      <path d="M140 20 H230" />
      <circle cx="120" cy="20" r="6" fill="#C0392B" stroke="none" opacity="0.85" />
      <path d="M120 14 C124 8, 132 8, 132 14 C132 18, 126 20, 120 20" />
      <path d="M120 14 C116 8, 108 8, 108 14 C108 18, 114 20, 120 20" />
      <path d="M120 26 C124 32, 132 32, 132 26" />
      <path d="M120 26 C116 32, 108 32, 108 26" />
      <path d="M88 20 q4 -8 10 -8" />
      <path d="M152 20 q-4 -8 -10 -8" />
      <path d="M88 20 q4 8 10 8" />
      <path d="M152 20 q-4 8 -10 8" />
    </svg>
  );
}

export function HallSVG({
  className = "",
  size = 300,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 300 200"
      width={size}
      className={className}
      fill="none"
      stroke="#C0392B"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Ground */}
      <path d="M5 188 H295" strokeWidth="1.4" />
      {/* Stairs */}
      <path d="M70 188 V178 H230 V188" strokeWidth="1.2" />
      <path d="M85 178 V170 H215 V178" strokeWidth="1.1" />
      {/* Side wings */}
      <path d="M20 170 V90 H70 V170" strokeWidth="1.3" />
      <path d="M280 170 V90 H230 V170" strokeWidth="1.3" />
      <path d="M30 165 V100 M40 165 V100 M50 165 V100 M60 165 V100" strokeWidth="0.9" />
      <path d="M250 165 V100 M260 165 V100 M270 165 V100 M240 165 V100" strokeWidth="0.9" />
      {/* Main columns */}
      <path d="M100 170 V70 M120 170 V70 M140 170 V70 M160 170 V70 M180 170 V70 M200 170 V70" strokeWidth="1.4" />
      {/* Architrave */}
      <path d="M85 70 H215" strokeWidth="1.6" />
      <path d="M80 65 H220" strokeWidth="1.2" />
      {/* Pediment / dome base */}
      <path d="M80 65 L150 30 L220 65" strokeWidth="1.6" />
      {/* Dome */}
      <path d="M125 30 Q150 -2 175 30" strokeWidth="1.4" />
      <path d="M150 6 V0" strokeWidth="1.2" />
      <circle cx="150" cy="-3" r="2" fill="#C0392B" stroke="none" />
      {/* Wing roofs */}
      <path d="M20 90 L45 75 L70 90" strokeWidth="1.2" />
      <path d="M230 90 L255 75 L280 90" strokeWidth="1.2" />
      {/* Door */}
      <path d="M140 170 V120 Q150 108 160 120 V170" strokeWidth="1.2" />
      <path d="M150 170 V120" strokeWidth="0.9" />
    </svg>
  );
}

export function RingsSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 110"
      className={className}
      fill="none"
      stroke="#C0392B"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="85" cy="60" r="38" />
      <circle cx="85" cy="60" r="32" strokeWidth="0.8" opacity="0.6" />
      <circle cx="135" cy="60" r="38" />
      <circle cx="135" cy="60" r="32" strokeWidth="0.8" opacity="0.6" />
      <path d="M75 22 l4 -8 l4 8" />
      <path d="M138 22 l4 -8 l4 8" />
      <path d="M79 14 l4 -2 l4 2" />
      <path d="M142 14 l4 -2 l4 2" />
    </svg>
  );
}

export function Petals({ count = 20 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => {
    const left = Math.random() * 100;
    const dur = 7 + Math.random() * 8;
    const delay = Math.random() * 8;
    const dx = (Math.random() - 0.5) * 120;
    const size = 8 + Math.random() * 12;
    return (
      <span
        key={i}
        className="petal"
        style={{
          left: `${left}%`,
          width: size,
          height: size,
          animationDuration: `${dur}s`,
          animationDelay: `${delay}s`,
          ["--dx" as string]: `${dx}px`,
        } as React.CSSProperties}
      />
    );
  });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals}
    </div>
  );
}