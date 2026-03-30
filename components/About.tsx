"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".fade-up").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="nosotros" ref={ref}>
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up:nth-child(2) { transition-delay: 0.15s; }
        .fade-up:nth-child(3) { transition-delay: 0.3s; }
      `}</style>

      <div className="container">
        <div className="about-grid">
          <div className="about-images fade-up">
            <Image
              src="/fotos/escaparate_3.jpg"
              alt="Interior de Confitería La Gruta"
              width={600}
              height={500}
              className="about-img-main"
              style={{ objectFit: "cover" }}
            />
            <Image
              src="/fotos/logo_la_gruta.jpg"
              alt="Logo La Gruta"
              width={220}
              height={220}
              className="about-img-accent"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="about-text">
            <p className="section-subtitle fade-up">Nuestra Historia</p>
            <h2 className="section-title fade-up">
              Tradición y sabor en<br />el corazón de Aracena
            </h2>
            <div className="gold-divider fade-up" style={{ margin: "20px 0" }} />

            <p className="fade-up">
              Confitería La Gruta nació con una misión clara: llevar la repostería
              artesanal de calidad a la Sierra de Aracena. Cada elaboración es fruto
              de un proceso cuidadoso, usando ingredientes frescos y recetas que
              respetan la tradición de la repostería española.
            </p>
            <p className="fade-up">
              Nuestra vitrina es un escaparate de sabores únicos: desde nuestro
              famoso brazo de gitano a la crema tostada hasta las tartas de
              chocolate o los delicados petisús. Todo hecho a mano, con dedicación
              y con el cariño que merece cada cliente.
            </p>
            <p className="fade-up">
              Te esperamos en nuestra tienda de la calle Pintor Mario León Ruiz,
              donde el aroma a bizcocho recién hecho te recibirá desde la puerta.
            </p>

            <div className="about-stats fade-up">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Artesanal</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">+20</div>
                <div className="stat-label">Elaboraciones</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">❤️</div>
                <div className="stat-label">Con amor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
