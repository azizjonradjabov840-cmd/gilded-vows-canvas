import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FloralDivider } from "./decorations";

export function InviteText() {
  const { t } = useTranslation();
  return (
    <section className="bg-[var(--cream)] text-[var(--ink)] px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-xl mx-auto text-center"
      >
        <FloralDivider className="w-48 h-8 mx-auto mb-8" />
        <h2 className="font-serif text-[34px] sm:text-[48px] leading-tight italic">
          {t("invite.heading")}
        </h2>
        <p className="mt-8 text-[15.5px] sm:text-[17px] leading-[1.85] text-[var(--ink)]/85">
          {t("invite.body")}
        </p>
        <FloralDivider className="w-48 h-8 mx-auto mt-10" />
      </motion.div>
    </section>
  );
}