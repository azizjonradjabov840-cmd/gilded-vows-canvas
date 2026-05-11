import { useState } from "react";
import { LockScreen } from "@/components/LockScreen";
import { Hero } from "@/components/Hero";
import { InviteText } from "@/components/InviteText";
import { Calendar } from "@/components/Calendar";
import { Venue } from "@/components/Venue";
import { Countdown } from "@/components/Countdown";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LangSwitcher } from "@/components/LangSwitcher";

export default function Index() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <main className="relative w-full overflow-x-hidden bg-[var(--cream)]">
      <MusicPlayer />
      {!unlocked && <LockScreen onUnlock={() => setUnlocked(true)} />}
      {unlocked && (
        <>
          <LangSwitcher />
          <Hero />
          <InviteText />
          <Calendar />
          <Venue />
          <Countdown />
          <footer className="bg-[var(--cream)] py-10 px-6 text-center">
            <p
              className="text-[10px] tracking-[0.12em] text-center select-none font-medium"
              style={{ color: "rgba(120,105,82,0.46)" }}
            >
              azizR.dev
            </p>
          </footer>
        </>
      )}
    </main>
  );
}
