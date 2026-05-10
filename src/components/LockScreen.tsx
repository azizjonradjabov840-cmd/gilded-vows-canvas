import { useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

const GoldParticles = lazy(() =>
  import("./GoldParticles").then((m) => ({ default: m.GoldParticles }))
);

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const { t } = useTranslation();
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  const handle = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      setGone(true);
      onUnlock();
    }, 1100);
  };

  if (gone) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      {/* Curtains */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[var(--charcoal)] overflow-hidden ${
          opening ? "curtain-top" : ""
        }`}
      >
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-90">
            <GoldParticles />
          </div>
        </Suspense>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[var(--charcoal)] overflow-hidden ${
          opening ? "curtain-bottom" : ""
        }`}
      >
        <Suspense fallback={null}>
          <div className="absolute inset-0 opacity-90" style={{ transform: "translateY(-100%)" }}>
            <GoldParticles />
          </div>
        </Suspense>
      </div>

      {/* Centered content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white px-6 transition-opacity duration-500 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="h-24 w-px bg-white/70 drop-line" />
        <div className="-mt-1 text-2xl">♥</div>
        <h1 className="font-serif text-center mt-6 text-[34px] sm:text-[44px] leading-tight tracking-wide max-w-md">
          {t("lock.title")}
        </h1>
        <button
          onClick={handle}
          aria-label="Unlock"
          className="mt-10 w-16 h-16 rounded-full border-2 border-white/80 grid place-items-center hover:bg-white/10 active:scale-95 transition"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
        </button>
        <p className="mt-5 text-[12px] tracking-[0.18em] text-white/65 uppercase text-center">
          {t("lock.hint")}
        </p>
      </div>
    </div>
  );
}