import { useMemo } from "react";

export function FloatingSparkles({ count = 22 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 6,
        dur: 4 + Math.random() * 6,
      })),
    [count]
  );
  return (
    <div className="sparkles" aria-hidden>
      {items.map((s) => (
        <span
          key={s.i}
          className="sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}