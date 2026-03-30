"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const specialties = [
  {
    img: "/fotos/tarta_crema_tostada_2.jpg",
    name: "Tarta de Crema Tostada",
    desc: "Nuestra estrella",
  },
  {
    img: "/fotos/bizcochos.jpg",
    name: "Bizcochos Artesanales",
    desc: "Receta de la casa",
  },
  {
    img: "/fotos/brazo.jpg",
    name: "Brazo de Gitano",
    desc: "Cremoso y delicado",
  },
  {
    img: "/fotos/cuñas_chocolate.jpg",
    name: "Cuñas de Chocolate",
    desc: "Irresistibles",
  },
  {
    img: "/fotos/petisu.jpg",
    name: "Petisús",
    desc: "Clásico francés",
  },
  {
    img: "/fotos/palmera_pistacho.jpg",
    name: "Palmera de Pistacho",
    desc: "Hojaldrada y crujiente",
  },
];

export default function Specialties() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".spec-fade").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="specialties" id="especialidades" ref={ref}>
      <style>{`
        .spec-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .spec-fade.visible { opacity: 1; transform: translateY(0); }
        .spec-fade:nth-child(1) { transition-delay: 0.05s; }
        .spec-fade:nth-child(2) { transition-delay: 0.12s; }
        .spec-fade:nth-child(3) { transition-delay: 0.19s; }
        .spec-fade:nth-child(4) { transition-delay: 0.26s; }
        .spec-fade:nth-child(5) { transition-delay: 0.33s; }
        .spec-fade:nth-child(6) { transition-delay: 0.40s; }
      `}</style>

      <div className="container">
        <div className="specialties-header spec-fade">
          <p className="section-subtitle">Lo que nos hace únicos</p>
          <h2 className="section-title">Nuestras Especialidades</h2>
          <div className="gold-divider" />
          <p>
            Cada elaboración es una obra de arte comestible. Descubre los sabores
            que hacen de La Gruta el referente de la repostería artesanal en Aracena.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <div className="specialty-card spec-fade" key={i}>
              <Image
                src={s.img}
                alt={s.name}
                width={600}
                height={800}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="specialty-overlay">
                <div className="specialty-name">{s.name}</div>
                <div className="specialty-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
