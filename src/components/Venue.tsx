import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { wedding } from "@/config/wedding";
import weddingHall3d from "@/assets/luxury-wedding-hall-3d.png";
import { Tilt3D } from "./Tilt3D";
import { AuroraBackground } from "./AuroraBackground";
import { FloatingSparkles } from "./FloatingSparkles";

export function Venue() {
  const { t } = useTranslation();
  return (
    <section className="fx-section bg-[var(--cream)] text-[var(--ink)] px-6 py-20 sm:py-28 overflow-hidden">
      <AuroraBackground />
      <FloatingSparkles count={20} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <Tilt3D max={12} scale={1.04} className="mx-auto inline-block">
          <div className="luxury-venue-frame holo-shine mx-auto float-y">
            <img
              src={weddingHall3d}
              alt="Hashamatli to'yxona"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </Tilt3D>
        <h2 className="font-serif text-[34px] sm:text-[48px] italic mt-7">
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
            className="map-btn magnetic w-full sm:w-auto inline-flex items-center justify-center uppercase font-medium"
          >
            {t("venue.yandex")}
          </a>
          <a
            href={wedding.google}
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn magnetic w-full sm:w-auto inline-flex items-center justify-center uppercase font-medium"
          >
            {t("venue.google")}
          </a>
        </div>
      </motion.div>
    </section>
  );
}