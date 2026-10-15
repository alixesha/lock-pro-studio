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
      if (e.isIntersecting) { setTimeout(() => setOpen(true), 500); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lock-anim${open ? " is-open" : ""}`}>
      <svg viewBox="0 0 520 260" role="img" aria-label={open ? "Key inserted, pins aligned, lock open" : "Pin tumbler lock, locked"}>
        <rect className="la-housing" x="60" y="40" width="400" height="180" rx="18" />
        <g className="la-plug">
          <rect className="la-plug-body" x="80" y="130" width="360" height="70" rx="10" />
        </g>
        <line className="la-shear" x1="80" y1="130" x2="440" y2="130" />
        {pins.map((i) => {
          const x = 140 + i * 64;
          return (
            <g key={i} className="la-pin" style={{ ["--lift" as string]: `${-(36 - cuts[i])}px`, transitionDelay: `${0.5 + i * 0.12}s` }}>
              <path className="la-spring" d={`M${x - 8} 52 l16 6 l-16 6 l16 6 l-16 6 l16 6`} />
              <rect className="la-driver" x={x - 10} y="88" width="20" height={42} rx="3" />
              <rect className="la-keypin" x={x - 10} y="130" width="20" height={36 - cuts[i] + 12} rx="3" />
            </g>
          );
        })}
        <g className="la-key">
          <path className="la-key-blade" d={`M0 172 ${pins.map((i) => `L${130 + i * 64} 172 L${140 + i * 64} ${172 + cuts[i] - 8} L${150 + i * 64} 172`).join(" ")} L430 172 L440 182 L430 194 L0 194 Z`} />
          <circle className="la-key-bow" cx="-30" cy="183" r="34" />
          <circle className="la-key-hole" cx="-38" cy="183" r="9" />
        </g>
      </svg>
      <div className="la-controls">
        <span className="la-status">{open ? <LockOpen size={15} /> : <Lock size={15} />}{open ? "Pins aligned · Unlocked" : "Security engaged"}</span>
        <button type="button" onClick={() => setOpen((v) => !v)}><KeyRound size={15} />{open ? "Remove key" : "Turn the key"}</button>
      </div>
    </div>
  );
}
