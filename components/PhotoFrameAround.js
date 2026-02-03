"use client";

export default function PhotoFrameAround({ images = [], children }) {
  // expects 4 images ideally
  const safe = (i) => images[i] || images[images.length - 1] || "/photo1.jpg";

  return (
    <div style={{ position: "relative", minHeight: "520px" }}>
      {/* Corner photos */}
      <img
        src={safe(0)}
        alt="corner 1"
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          width: "160px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
          transform: "rotate(-6deg)",
        }}
      />
      <img
        src={safe(1)}
        alt="corner 2"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "160px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
          transform: "rotate(7deg)",
        }}
      />
      <img
        src={safe(2)}
        alt="corner 3"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          width: "170px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
          transform: "rotate(6deg)",
        }}
      />
      <img
        src={safe(3)}
        alt="corner 4"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "170px",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.14)",
          boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
          transform: "rotate(-7deg)",
        }}
      />

      {/* Center note */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "min(400px, 78%)",
          margin: "0 auto",
          top: "60px",
        }}
      >
        {children}
      </div>
    </div>
  );
}