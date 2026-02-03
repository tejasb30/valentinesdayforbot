"use client";

export default function FlowerAnimation() {
  // Clustered bouquet — close together with slight offsets
  const bouquet = [
    { x: "44%", h: "240px", delay: "0.0s", tilt: "-8deg" },
    { x: "48%", h: "270px", delay: "0.1s", tilt: "2deg" },
    { x: "52%", h: "250px", delay: "0.18s", tilt: "8deg" },
    { x: "46%", h: "220px", delay: "0.26s", tilt: "-14deg" },
    { x: "54%", h: "225px", delay: "0.32s", tilt: "14deg" },
  ];

  return (
    <div className="flowerStage" style={{ position: "relative" }}>
      {/* Wrapper shadow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "0",
          transform: "translateX(-50%)",
          width: "62%",
          height: "20px",
          background: "rgba(0,0,0,0.25)",
          filter: "blur(10px)",
          borderRadius: "999px",
        }}
      />

      {/* Bouquet stems + blooms */}
      {bouquet.map((f, idx) => (
        <div key={idx} style={{ position: "absolute", inset: 0 }}>
          <div
            className="stem"
            style={{
              "--x": f.x,
              "--h": f.h,
              "--delay": f.delay,
              transform: `rotate(${f.tilt})`,
            }}
          />
          <div
            className="bloom"
            style={{
              "--x": f.x,
              "--h": f.h,
              "--delay": f.delay,
              transform: `scale(0.6) rotate(${f.tilt})`,
            }}
          >
            {Array.from({ length: 7 }).map((_, p) => (
              <div key={p} className="petal" style={{ "--r": `${p * 51}deg` }} />
            ))}
            <div className="centerDot" />
          </div>
        </div>
      ))}

      {/* Ribbon / wrap */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18px",
          transform: "translateX(-50%)",
          width: "170px",
          height: "52px",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.18)",
          background:
            "linear-gradient(180deg, rgba(255,122,200,0.95), rgba(255,77,166,0.85))",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "30px",
          transform: "translateX(-50%)",
          width: "22px",
          height: "22px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.22)",
          border: "1px solid rgba(255,255,255,0.22)",
        }}
      />
    </div>
  );
}
