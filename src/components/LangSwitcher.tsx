import { useTranslation } from "react-i18next";

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const set = (l: string) => i18n.changeLanguage(l);
  const base =
    "px-3 h-9 min-w-[44px] text-xs tracking-[0.2em] font-medium rounded-full transition-all";
  const active = "bg-[var(--charcoal)] text-white shadow-md";
  const idle = "bg-white/70 backdrop-blur text-[var(--ink)] border border-black/10";
  return (
    <div className="fixed top-3 right-3 z-[60] flex gap-1.5">
      <button
        aria-label="O'zbekcha"
        onClick={() => set("uz")}
        className={`${base} ${lang === "uz" ? active : idle}`}
      >
        UZ
      </button>
      <button
        aria-label="Русский"
        onClick={() => set("ru")}
        className={`${base} ${lang === "ru" ? active : idle}`}
      >
        RU
      </button>
    </div>
  );
}