"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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

  const prev = () => setLightboxIdx((p) => (p !== null ? (p - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () => setLightboxIdx((p) => (p !== null ? (p + 1) % galleryImages.length : null));

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item: any = {
    hidden: { opacity: 0, scale: 0.92 },
    show: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <>
      <section className="gallery" id="galeria">
        <div className="container">
          <motion.div 
            className="gallery-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="section-subtitle">Momentos dulces</p>
            <h2 className="section-title">Galería</h2>
            <div className="gold-divider" />
          </motion.div>

          <motion.div 
            className="gallery-masonry"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                className="gallery-item"
                key={i}
                variants={item}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div 
            className="lightbox" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button className="lightbox-close" onClick={() => setLightboxIdx(null)}>×</button>
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
            <motion.div 
              className="lightbox-img-wrapper"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].alt}
                width={1200}
                height={900}
                style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }}
              />
            </motion.div>
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
