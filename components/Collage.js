"use client";

export default function Collage({
  title,
  placeholderText,
  images,
  centerImageSrc, // NEW
}) {
  return (
    <section className="collageWrap">
      {/* Floating collage images around */}
      {images.map((img) => (
        <img
          key={img.src}
          className="collageImg"
          src={img.src}
          alt="collage"
          style={{
            top: img.top,
            left: img.left,
            right: img.right,
            bottom: img.bottom,
            "--rot": img.rot,
          }}
        />
      ))}

      {/* Center note */}
      <div className="centerTextCard">
        <h2>{title}</h2>

        {/* ✅ CENTER IMAGE */}
        {centerImageSrc && (
          <img
            src={centerImageSrc}
            alt="center"
            style={{
              width: "100%",
              maxWidth: "200px",
              borderRadius: "18px",
              margin: "14px auto",
              display: "block",
              boxShadow: "0 14px 40px rgba(0,0,0,0.4)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          />
        )}

        <div>{placeholderText}</div>
      </div>
    </section>
  );
}
