"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner">
      <Image
        src="/fotos/variado_2.jpg"
        alt="Dulces de La Gruta"
        fill
        style={{ objectFit: "cover", objectPosition: "center 40%" }}
      />
      <div className="banner-overlay" />
      <div className="banner-content">
        <p className="section-subtitle">Encargos personalizados</p>
        <h2>¿Tienes un evento especial?</h2>
        <p>
          Celebraciones, bodas, comuniones, cumpleaños… Creamos dulces a medida
          para que tu momento sea aún más especial.
        </p>
        <a href="tel:+34690834617" className="btn-primary">
          Llámanos ahora
        </a>
      </div>
    </section>
  );
}
