"use client";

export default function PhotoStrip({ images = [] }) {
  return (
    <div className="photoStrip">
      {images.map((src) => (
        <img key={src} src={src} alt="photo" />
      ))}
    </div>
  );
}
