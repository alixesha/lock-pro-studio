import { useEffect, useRef, useState } from "react";
import { KeyRound, LockOpen, Lock } from "lucide-react";

const pins = [0, 1, 2, 3, 4];
const cuts = [14, 26, 8, 20, 12];

export function LockAnimation() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { setTimeout(() => setOpen(true), 500); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lock-anim${open ? " is-open" : ""}`}>
      <svg viewBox="-70 30 560 200" role="img" aria-label={open ? "Key inserted, pins aligned, lock open" : "Pin tumbler lock, locked"}>
        <rect className="la-housing" x="60" y="40" width="400" height="180" rx="18" />
        <g className="la-plug">
          <rect className="la-plug-body" x="80" y="130" width="360" height="70" rx="10" />
        </g>
        <line className="la-shear" x1="80" y1="130" x2="440" y2="130" />
        {pins.map((i) => {
          const x = 140 + i * 64;
          return (
            <g key={i} className="la-pin" style={{ ["--lift" as string]: "-20px", transitionDelay: `${0.5 + i * 0.12}s` }}>
              <path className="la-spring" d={`M${x - 8} 62 l16 8 l-16 8 l16 8 l-16 8 l16 8`} />
              <rect className="la-driver" x={x - 10} y="110" width="20" height={40} rx="3" />
              <rect className="la-keypin" x={x - 10} y="150" width="20" height={20 + cuts[i]!} rx="3" />
            </g>
          );
        })}
        <g className="la-key">
          <path className="la-key-blade" d={`M0 184 ${pins.map((i) => `L${128 + i * 64} 184 L${136 + i * 64} ${150 + cuts[i]!} L${144 + i * 64} ${150 + cuts[i]!} L${152 + i * 64} 184`).join(" ")} L430 184 L440 190 L430 196 L0 196 Z`} />
          <circle className="la-key-bow" cx="-30" cy="190" r="30" />
          <circle className="la-key-hole" cx="-38" cy="190" r="8" />
        </g>
      </svg>
      <div className="la-controls">
        <span className="la-status">{open ? <LockOpen size={15} /> : <Lock size={15} />}{open ? "Pins aligned · Unlocked" : "Security engaged"}</span>
        <button type="button" onClick={() => setOpen((v) => !v)}><KeyRound size={15} />{open ? "Remove key" : "Turn the key"}</button>
      </div>
    </div>
  );
}
