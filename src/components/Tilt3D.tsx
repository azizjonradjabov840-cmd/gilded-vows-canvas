import { useRef, ReactNode } from "react";

export function Tilt3D({
  children,
  max = 14,
  scale = 1.04,
  glare = true,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  scale?: number;
  glare?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 2 * max;
    const ry = (x - 0.5) * 2 * max;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--s", `${scale}`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--s", `1`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`tilt-3d ${className}`}
    >
      <div className="tilt-3d__inner">
        {children}
        {glare && <span className="tilt-3d__glare" aria-hidden />}
      </div>
    </div>
  );
}