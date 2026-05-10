import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { HallSVG } from "./decorations";
import { wedding } from "@/config/wedding";

export function Venue() {
  const { t } = useTranslation();
  return (
    <section className="bg-[var(--cream)] text-[var(--ink)] px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center"
      >
        <HallSVG className="mx-auto" size={340} />
        <h2 className="font-serif text-[34px] sm:text-[48px] italic mt-6">
          {t("venue.title")}
        </h2>
        <p className="mt-6 font-serif text-2xl sm:text-3xl tracking-wide">
          <span className="text-[var(--crimson)] mr-1">«</span>
          {t("venue.name")}
          <span className="text-[var(--crimson)] ml-1">»</span>
        </p>
        <p className="mt-4 text-sm sm:text-base tracking-wide">
          {t("venue.time")}
        </p>
        <p className="mt-1 text-sm sm:text-base text-[var(--ink)]/75">
          {t("venue.address")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center">
          <a
            href={wedding.yandex}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[52px] inline-flex items-center justify-center px-6 border border-[var(--crimson)] text-[var(--crimson)] uppercase tracking-[0.22em] text-xs font-medium hover:bg-[var(--crimson)] hover:text-white transition-colors"
          >
            {t("venue.yandex")}
          </a>
          <a
            href={wedding.google}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[52px] inline-flex items-center justify-center px-6 border border-[var(--charcoal)] text-[var(--charcoal)] uppercase tracking-[0.22em] text-xs font-medium hover:bg-[var(--charcoal)] hover:text-white transition-colors"
          >
            {t("venue.google")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}