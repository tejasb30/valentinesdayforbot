"use client";

import { useEffect, useState } from "react";

export default function FloatingHeartsKisses({ intensity = 24 }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const chars = ["💖", "💗", "💘", "💝", "😘", "💋", "💕", "❤️"];

    const generated = Array.from({ length: intensity }).map((_, i) => {
      const x = `${Math.floor(Math.random() * 100)}vw`;
      const dur = `${10 + Math.random() * 10}s`;
      const size = `${18 + Math.random() * 26}px`;
      const delay = `${Math.random() * 6}s`;
      const char = chars[Math.floor(Math.random() * chars.length)];
      return { id: i, x, dur, size, delay, char };
    });

    setItems(generated);
  }, [intensity]);

  return (
    <div className="floatLayer" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.id}
          className="floatItem"
          style={{
            "--x": it.x,
            "--dur": it.dur,
            "--size": it.size,
            animationDelay: it.delay,
          }}
        >
          {it.char}
        </span>
      ))}
    </div>
  );
}