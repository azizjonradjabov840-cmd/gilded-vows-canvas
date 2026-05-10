import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { useTranslation } from "react-i18next";
import { wedding } from "@/config/wedding";

export function MusicPlayer() {
  const { t } = useTranslation();
  const howlRef = useRef<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    howlRef.current = new Howl({
      src: [wedding.musicSrc],
      html5: true,
      loop: true,
      volume: 0,
    });
    const id = setTimeout(() => setShowTip(false), 3500);
    return () => {
      clearTimeout(id);
      howlRef.current?.unload();
    };
  }, []);

  const toggle = () => {
    setShowTip(false);
    const h = howlRef.current;
    if (!h) return;
    if (playing) {
      h.fade(h.volume(), 0, 800);
      setTimeout(() => h.pause(), 820);
      setPlaying(false);
    } else {
      h.play();
      h.fade(0, 0.7, 800);
      setPlaying(true);
    }
  };

  return (
    <div className="fixed top-3 left-3 z-[60] flex items-center gap-2">
      <button
        onClick={toggle}
        aria-label="Music toggle"
        className={`relative w-[52px] h-[52px] rounded-full grid place-items-center transition-colors ${
          playing
            ? "bg-[var(--crimson)] text-white pulse-ring"
            : "bg-[var(--charcoal)]/85 backdrop-blur text-white"
        }`}
      >
        <span className="text-xl leading-none">♪</span>
      </button>
      {showTip && (
        <span className="text-[11px] tracking-wider bg-white/85 backdrop-blur px-2 py-1 rounded-md shadow-sm text-[var(--ink)]">
          {t("music.tooltip")}
        </span>
      )}
    </div>
  );
}