"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const featuredItems = [
  {
    video: "/videos/bizcocho_pistacho.mp4",
    poster: "/fotos/bizcocho_pistacho.jpg",
    badge: "Bestseller",
    title: "Bizcocho de Pistacho",
    desc1:
      "Nuestro bizcocho de pistacho es una explosión de sabor que conquista a todos los que lo prueban. Elaborado con pistachos de primera calidad, su textura esponjosa y húmeda lo convierte en uno de los más demandados.",
    desc2:
      "Disponible por encargo o en nuestra vitrina mientras haya existencias. El sabor que siempre querrás repetir.",
    reverse: false,
  },
  {
    video: "/videos/tarta_manzana.mp4",
    poster: "/fotos/tarta_crema_tostada_3.jpg",
    badge: "Especialidad de la casa",
    title: "Tarta de Crema Tostada",
    desc1:
      "Nuestra tarta de crema tostada es el orgullo de La Gruta. Una base esponjosa coronada por una capa de crema pastelera perfectamente dorada con el soplete, que crea ese característico caramelizado irresistible.",
    desc2:
      "Un clásico reinventado con el toque artesanal que solo encontrarás en Confitería La Gruta. Sin duda, el sabor más emblemático de nuestra confitería.",
    reverse: true,
  },
  {
    video: "/videos/vitrina.mp4",
    poster: "/fotos/pasteles.jpg",
    badge: "Variedad diaria",
    title: "Variedad de Pasteles y Dulces",
    desc1:
      "Cada día nuestra vitrina se llena de nuevas creaciones: bollos de nata, palmeras, cuñas de chocolate, variados de pastelería y mucho más. La oferta cambia para que siempre encuentres algo nuevo.",
    desc2:
      "Ven a visitarnos por la mañana cuando todo está recién hecho y elige tus favoritos. También realizamos encargos personalizados para celebraciones y eventos especiales.",
    reverse: false,
  },
];

export default function Featured() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("feat-visible");
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".feat-anim").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="featured" ref={ref}>
      <style>{`
        .feat-anim {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .feat-anim.feat-visible { opacity: 1; transform: translateY(0); }
        .feat-anim-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .feat-anim-left.feat-visible { opacity: 1; transform: translateX(0); }
        .feat-anim-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .feat-anim-right.feat-visible { opacity: 1; transform: translateX(0); }
      `}</style>

      <div className="container">
        {featuredItems.map((item, i) => (
          <div
            className={`featured-row${item.reverse ? " reverse" : ""}`}
            key={i}
          >
            <div className={`featured-media feat-anim-${item.reverse ? "right" : "left"} feat-anim`}>
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={item.poster}
                style={{ width: "100%", height: "480px", objectFit: "cover", borderRadius: "4px" }}
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <span className="featured-badge">{item.badge}</span>
            </div>

            <div className={`featured-text feat-anim-${item.reverse ? "left" : "right"} feat-anim`}>
              <p className="section-subtitle">Destacado</p>
              <h3>{item.title}</h3>
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
              <a href="#contacto" className="btn-primary" style={{ display: "inline-block", marginTop: "8px" }}>
                Encuéntrame
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
