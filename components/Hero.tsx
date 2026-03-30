"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className="hero" id="inicio">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/fotos/escaparate_2.jpg"
      >
        <source src="/videos/vitrina.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-tagline">Aracena · Sierra de Huelva · Desde el corazón</p>

        <h1 className="hero-title">
          El arte de la<br /><em>repostería artesanal</em>
        </h1>

        <p className="hero-desc">
          En Confitería La Gruta elaboramos cada pieza con pasión, ingredientes
          de primera calidad y el sabor auténtico de la tradición serrana.
        </p>

        <div className="hero-buttons">
          <a href="#especialidades" className="btn-primary">
            Nuestras Especialidades
          </a>
          <a href="#contacto" className="btn-secondary">
            Encuéntranos
          </a>
        </div>
      </div>

      <div
        className="hero-scroll"
        onClick={() => document.getElementById("nosotros")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span>Descubrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
