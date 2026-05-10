import { useEffect, useState } from "react";
import { Howl } from "howler";
import { useTranslation } from "react-i18next";

export function MusicPlayer() {
  const { t } = useTranslation();
  const [howl, setHowl] = useState<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const sound = new Howl({
      src: ["https://res.cloudinary.com/dcdxc0l6x/video/upload/34685_fxe7ct.mp3"],
      html5: true,
      loop: true,
      volume: 0,
      format: ["mp3"],
      onloaderror: (id, err) => console.error("Load error:", err),
      onplayerror: (id, err) => {
        console.error("Play error:", err);
        sound.once("unlock", () => sound.play());
      },
    });
    setHowl(sound);
    const id = setTimeout(() => setShowTip(false), 3500);
    return () => {
      clearTimeout(id);
      sound.unload();
    };
  }, []);

  const toggleMusic = () => {
    setShowTip(false);
    if (playing) {
      howl?.fade(howl.volume(), 0, 800);
      setTimeout(() => howl?.pause(), 820);
      setPlaying(false);
    } else {
      howl?.play();
      howl?.fade(0, 0.7, 800);
      setPlaying(true);
    }
  };

  return (
    <div className="fixed top-3 left-3 z-[90] flex items-center gap-2">
      <button
        onClick={toggleMusic}
        aria-label="Music toggle"
        className={`music-button relative w-[52px] h-[52px] rounded-full grid place-items-center transition-colors ${
          playing
            ? "music-button--playing pulse-ring"
            : "music-button--idle backdrop-blur"
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