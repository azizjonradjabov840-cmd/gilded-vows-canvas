import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import confetti from "canvas-confetti";
import { wedding } from "@/config/wedding";
import { RingsSVG } from "./decorations";

function calc(target: number) {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: diff === 0,
  };
}

function FlipNumber({ value }: { value: number }) {
  const [flipping, setFlipping] = useState(false);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current !== value) {
      setFlipping(true);
      const id = setTimeout(() => setFlipping(false), 500);
      prev.current = value;
      return () => clearTimeout(id);
    }
  }, [value]);
  return (
    <span className={`flip ${flipping ? "flipping" : ""}`}>
      <span className="flip-inner tabular-nums">
        {value.toString().padStart(2, "0")}
      </span>
    </span>
  );
}

export function Countdown() {
  const { t } = useTranslation();
  const target = useRef(new Date(wedding.dateISO).getTime()).current;
  const [time, setTime] = useState(() => calc(target));
  const burst = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  useEffect(() => {
    if (time.done && !burst.current) {
      burst.current = true;
      const end = Date.now() + 2500;
      const tick = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 70,
          origin: { x: 0 },
          colors: ["#C0392B", "#D4AF37", "#FAF8F3"],
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 70,
          origin: { x: 1 },
          colors: ["#C0392B", "#D4AF37", "#FAF8F3"],
        });
        if (Date.now() < end) requestAnimationFrame(tick);
      };
      tick();
    }
  }, [time.done]);

  const blocks: { label: string; value: number }[] = [
    { label: t("countdown.days"), value: time.d },
    { label: t("countdown.hours"), value: time.h },
    { label: t("countdown.minutes"), value: time.m },
    { label: t("countdown.seconds"), value: time.s },
  ];

  return (
    <section className="bg-[var(--cream)] text-[var(--ink)] px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif italic text-[34px] sm:text-[48px] leading-tight">
          {t("countdown.title")}
        </h2>

        {time.done ? (
          <p className="mt-10 font-serif text-2xl text-[var(--crimson)]">
            {t("countdown.done")}
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 max-w-md mx-auto">
            {blocks.map((b) => (
              <div key={b.label} className="flex flex-col items-center">
                <div className="font-serif text-[58px] sm:text-[64px] leading-none text-[var(--crimson)] font-semibold">
                  <FlipNumber value={b.value} />
                </div>
                <div className="mt-2 text-[11px] tracking-[0.28em] text-[var(--ink)]/60 uppercase">
                  {b.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <RingsSVG className="mx-auto mt-12 w-[200px]" />
      </motion.div>
    </section>
  );
}