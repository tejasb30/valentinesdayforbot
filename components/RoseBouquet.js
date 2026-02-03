"use client";

import { useEffect, useState } from "react";

function BloomWithId({ size = 120, rotate = 0, tone = "pink", gid = "x" }) {
  const palette =
    tone === "red"
      ? { mid: "#ff4b5c", deep: "#c4001a", light: "#ffd1d8" }
      : { mid: "#ff5fb8", deep: "#cc1676", light: "#ffe0f3" };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`b-${tone}-${gid}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
          <stop offset="45%" stopColor={palette.light} stopOpacity="0.95" />
          <stop offset="80%" stopColor={palette.mid} stopOpacity="0.95" />
          <stop offset="100%" stopColor={palette.deep} stopOpacity="0.95" />
        </radialGradient>
      </defs>

      {Array.from({ length: 14 }).map((_, i) => {
        const rx = 14 + i * 0.9;
        const ry = 10 + i * 0.6;
        const ang = i * 22;
        const tx = Math.cos((ang * Math.PI) / 180) * (i * 0.9);
        const ty = Math.sin((ang * Math.PI) / 180) * (i * 0.7);

        return (
          <ellipse
            key={i}
            cx={60 + tx}
            cy={60 + ty}
            rx={rx}
            ry={ry}
            fill={`url(#b-${tone}-${gid})`}
            opacity={0.88 + Math.min(i * 0.006, 0.08)}
            transform={`rotate(${ang} 60 60)`}
          />
        );
      })}

      <circle cx="55" cy="52" r="10" fill="#fff" opacity="0.18" />
    </svg>
  );
}

export default function RoseBouquet() {
  const [blooms, setBlooms] = useState([]);

  useEffect(() => {
    const gauss = () => {
      let u = 0,
        v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

    const cx = 210;
    const cy = 60;

    const MAX_X = 145;
    const MAX_Y = 78;

    const generated = [];

    const mainCount = 48;
    const topFluff = 18;
    const centerFill = 18;
    const seamHider = 22;
    const domeCap = 18;

    const samplePoint = (sx, sy, yBias = 0) => {
      for (let tries = 0; tries < 8; tries++) {
        const dx = gauss() * sx;
        const dy = gauss() * sy + yBias;

        const norm = (dx * dx) / (MAX_X * MAX_X) + (dy * dy) / (MAX_Y * MAX_Y);
        if (norm <= 1.0) return { x: cx + dx, y: cy + dy };
      }

      return {
        x: clamp(cx + gauss() * sx, cx - MAX_X, cx + MAX_X),
        y: clamp(cy + gauss() * sy + yBias, cy - MAX_Y, cy + MAX_Y),
      };
    };

    // 1) Main blob — BIGGER
    for (let i = 0; i < mainCount; i++) {
      const p = samplePoint(78, 30, 18);
      generated.push({
        x: p.x,
        y: p.y,
        s: 82 + Math.random() * 46, // ✅ bigger
        r: -18 + Math.random() * 36,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 4 + Math.floor(Math.random() * 6),
        gid: `m${i}`,
      });
    }

    // 2) Top fluff — BIGGER
    for (let i = 0; i < topFluff; i++) {
      const p = samplePoint(72, 22, -22);
      generated.push({
        x: p.x,
        y: p.y,
        s: 68 + Math.random() * 36, // ✅ bigger
        r: -20 + Math.random() * 40,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 9 + Math.floor(Math.random() * 4),
        gid: `t${i}`,
      });
    }

    // 3) Center fillers — BIGGER
    for (let i = 0; i < centerFill; i++) {
      const p = samplePoint(40, 16, 8);
      generated.push({
        x: p.x,
        y: p.y,
        s: 60 + Math.random() * 30, // ✅ bigger
        r: -16 + Math.random() * 32,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 11 + Math.floor(Math.random() * 3),
        gid: `c${i}`,
      });
    }

    // 4) Seam hider — BIGGER (this hides top of triangle)
    for (let i = 0; i < seamHider; i++) {
      const p = samplePoint(95, 10, 42);
      generated.push({
        x: p.x,
        y: p.y,
        s: 64 + Math.random() * 28, // ✅ bigger (was 52+24)
        r: -16 + Math.random() * 32,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 12 + Math.floor(Math.random() * 3),
        gid: `s${i}`,
      });
    }

    // 5) Dome cap — BIGGER (round top)
    for (let i = 0; i < domeCap; i++) {
      const p = samplePoint(60, 16, -40);
      generated.push({
        x: p.x,
        y: p.y,
        s: 64 + Math.random() * 30, // ✅ bigger (was 50+26)
        r: -18 + Math.random() * 36,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 12 + Math.floor(Math.random() * 3),
        gid: `d${i}`,
      });
    }

    // 6) RIGHT-SIDE FILL — adds a few blooms to balance the bouquet
    const rightFill = 14;

    for (let i = 0; i < rightFill; i++) {
    // push x to the right side (+bias)
    const p = samplePoint(55, 20, 6);

    generated.push({
        x: p.x + 60 + Math.random() * 35, // ✅ right shift
        y: p.y + 5 + Math.random() * 25,  // keep around middle/top area
        s: 62 + Math.random() * 34,       // consistent sizing
        r: -18 + Math.random() * 36,
        t: Math.random() < 0.5 ? "red" : "pink",
        z: 10 + Math.floor(Math.random() * 4),
        gid: `r${i}`,
    });
    }


    setBlooms(generated);
  }, []);

  return (
    <div className="bouquetStage">
      <div className="bloomCluster">
        {blooms.map((b) => (
          <div
            key={b.gid}
            className="bloomItem"
            style={{ left: b.x, top: b.y, zIndex: b.z }}
          >
            <BloomWithId size={b.s} rotate={b.r} tone={b.t} gid={b.gid} />
          </div>
        ))}
      </div>

      <div className="bouquetHandle" />
      <div className="bouquetHandleInner" />
    </div>
  );
}