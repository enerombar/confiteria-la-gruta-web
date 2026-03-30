"use client";

import { useState } from "react";
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
  { src: "/fotos/tarta_chocolate.jpg", alt: "Tarta de chocolate" },
  { src: "/fotos/escaparate.jpg", alt: "Escaparate de La Gruta" },
];

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = () => setLightboxIdx((p) => (p! - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightboxIdx((p) => (p! + 1) % galleryImages.length);

  return (
    <>
      <section className="gallery" id="galeria">
        <div className="container">
          <div className="gallery-header">
            <p className="section-subtitle">Momentos dulces</p>
            <h2 className="section-title">Galería</h2>
            <div className="gold-divider" />
          </div>

          <div className="gallery-masonry">
            {galleryImages.map((img, i) => (
              <div
                className="gallery-item"
                key={i}
                onClick={() => setLightboxIdx(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <Image
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            width={1200}
            height={900}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }}
          />
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </>
  );
}
