"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/fotos/variado_2.jpg", alt: "Surtido de pastelería" },
  { src: "/fotos/tarta_crema_tostada_4.jpg", alt: "Tarta crema tostada" },
  { src: "/fotos/brazo_2.jpg", alt: "Brazo de gitano" },
  { src: "/fotos/bollos_nata.jpg", alt: "Bollos de nata" },
  { src: "/fotos/crema_tostada_2.jpg", alt: "Crema tostada" },
  { src: "/fotos/bizcochos_2.jpg", alt: "Bizcochos artesanales" },
  { src: "/fotos/variado_3.jpg", alt: "Variado de dulces" },
  { src: "/fotos/cuñas_chocolate_2.jpg", alt: "Cuñas de chocolate" },
  { src: "/fotos/brazo_crema_tostada.jpg", alt: "Brazo crema tostada" },
  { src: "/fotos/tarta_chocolate.jpg", alt: "Tarta de chocolate" },
  { src: "/fotos/variado_4.jpg", alt: "Dulces variados" },
  { src: "/fotos/escaparate.jpg", alt: "Escaparate de La Gruta" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("gal-visible");
        });
      },
      { threshold: 0.05 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".gal-item").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((p) => (p! + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setLightboxIdx((p) => (p! - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx]);

  return (
    <>
      <style>{`
        .gal-item {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .gal-item.gal-visible { opacity: 1; transform: scale(1); }
        .gal-item:nth-child(2n) { transition-delay: 0.1s; }
        .gal-item:nth-child(3n) { transition-delay: 0.2s; }
        .gal-item:nth-child(4n) { transition-delay: 0.15s; }
      `}</style>

      <section className="gallery" id="galeria" ref={ref}>
        <div className="container">
          <div className="gallery-header">
            <p className="section-subtitle">Momentos dulces</p>
            <h2 className="section-title">Galería</h2>
            <div className="gold-divider" />
            <p>
              Cada imagen, un bocado imaginado. Déjate llevar por el mundo de
              sabores que creamos cada día en La Gruta.
            </p>
          </div>

          <div className="gallery-masonry">
            {galleryImages.map((img, i) => (
              <div
                className="gallery-item gal-item"
                key={i}
                onClick={() => setLightboxIdx(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
                <div className="gallery-item-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIdx !== null && (
        <div className="lightbox" onClick={() => setLightboxIdx(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIdx(null)}>×</button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((p) => (p! - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            ‹
          </button>
          <Image
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            width={1200}
            height={900}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }}
          />
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((p) => (p! + 1) % galleryImages.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
