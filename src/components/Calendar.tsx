import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import weddingHall3d from "@/assets/luxury-wedding-hall-3d.png";

export function Calendar() {
  const { t } = useTranslation();
  const days = t("calendar.days", { returnObjects: true }) as string[];

  // June 2026: June 1 = Monday. So column index 0 = Mon. 30 days.
  const cells: (number | null)[] = [];
  // Mon..Sun, June 1 is Monday => no leading nulls
  for (let d = 1; d <= 30; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <section className="bg-[var(--cream)] text-[var(--ink)] px-5 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-serif font-semibold tracking-[0.04em] text-[44px] sm:text-[80px] leading-none">
          {t("calendar.month")}
        </h2>

        <div className="mt-10 grid grid-cols-7 gap-y-3 text-[11px] sm:text-xs tracking-widest text-[var(--ink)]/55 font-medium">
          {days.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-7 gap-y-3 sm:gap-y-4">
          {cells.map((c, i) => (
            <div
              key={i}
              className="relative h-10 sm:h-12 grid place-items-center font-serif text-lg sm:text-xl"
            >
              {c === 7 ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute w-9 h-9 sm:w-11 sm:h-11 heart-pulse"
                    fill="#C0392B"
                  >
                    <path d="M12 21s-7-4.35-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.65-9.5 9-9.5 9z" />
                  </svg>
                  <span className="relative text-white font-semibold text-base sm:text-lg">
                    7
                  </span>
                </>
              ) : (
                <span className={c ? "" : "opacity-0"}>{c ?? "0"}</span>
              )}
            </div>
          ))}
        </div>

        <div className="luxury-venue-frame luxury-venue-frame--small mx-auto mt-12">
          <img
            src={weddingHall3d}
            alt="Hashamatli to'yxona"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}