import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import "@/lib/i18n";
import { LockScreen } from "@/components/LockScreen";
import { Hero } from "@/components/Hero";
import { InviteText } from "@/components/InviteText";
import { Calendar } from "@/components/Calendar";
import { Venue } from "@/components/Venue";
import { Countdown } from "@/components/Countdown";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LangSwitcher } from "@/components/LangSwitcher";
import { wedding } from "@/config/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${wedding.groom} & ${wedding.bride} — To'y taklifnomasi` },
      {
        name: "description",
        content: `${wedding.groom} va ${wedding.bride}ning nikoh to'yiga taklifnoma. 7-iyun, 2026 — Erkinobod to'yxonasi.`,
      },
      { property: "og:title", content: `${wedding.groom} & ${wedding.bride}` },
      { property: "og:description", content: "07.06.2026 — Erkinobod to'yxonasi" },
    ],
  }),
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <main className="relative w-full overflow-x-hidden bg-[var(--cream)]">
      {!unlocked && <LockScreen onUnlock={() => setUnlocked(true)} />}
      {unlocked && (
        <>
          <LangSwitcher />
          <MusicPlayer />
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
