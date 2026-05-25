import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import couple from "@/assets/couple-hero.jpg";
import { Petals } from "./decorations";
import { wedding } from "@/config/wedding";

export function Hero() {
  const { t } = useTranslation();
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.1}px, 0)` }}
      >
        <img
          src={couple}
          alt={`${wedding.groom} & ${wedding.bride}`}
          className="w-full h-full object-cover object-center kenburns"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.75)" }} />
      </div>

      <Petals count={18} />

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 px-6 text-white text-center">
        <h2
          className="font-serif text-[56px] sm:text-[80px] leading-[0.95] tracking-[0.04em]"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, #D4AF37 35%, #ffffff 65%, #D4AF37 100%)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer-names 3s linear infinite",
          }}
        >
          {wedding.groom.toUpperCase()}
        </h2>
        <span className="font-serif italic text-white/85 text-xl sm:text-2xl my-1">
          {t("hero.and")}
        </span>
        <h2
          className="font-serif text-[56px] sm:text-[80px] leading-[0.95] tracking-[0.04em]"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, #D4AF37 35%, #ffffff 65%, #D4AF37 100%)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer-names 3s linear infinite",
          }}
        >
          {wedding.bride.toUpperCase()}
        </h2>

        <div className="mt-10 flex flex-col items-center text-white/80">
          <span className="text-[11px] tracking-[0.35em] uppercase">
            {t("hero.scroll")}
          </span>
          <span className="bounce-arrow mt-2 text-lg">↓</span>
        </div>
      </div>
    </section>
  );
}