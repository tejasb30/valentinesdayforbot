"use client";

import { useEffect } from "react";

export default function JumpscareModal({ open, onClose, imageSrc, title, autoCloseMs = 650 }) {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => onClose?.(), autoCloseMs);
    return () => clearTimeout(t);
  }, [open, onClose, autoCloseMs]);

  if (!open) return null;

  return (
    <div
      className="modalBackdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      style={{
        background: "rgba(0,0,0,0.92)",
      }}
    >
      <div
        className="modalCard"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(820px, 98vw)",
          borderRadius: "18px",
          overflow: "hidden",
          animation: "none",
        }}
      >
        {/* Optional tiny header - you can delete this whole block if you want pure jumpscare */}
        <div className="modalTop" style={{ padding: "10px 12px" }}>
          <div className="modalTitle">{title || "😈"}</div>
        </div>

        <img
          className="modalImg"
          src={imageSrc}
          alt="jumpscare"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}