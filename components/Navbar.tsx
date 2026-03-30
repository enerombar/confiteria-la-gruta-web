"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <a href="#inicio" className="navbar-logo" onClick={closeMenu}>
            <Image
              src="/fotos/logo_la_gruta.jpg"
              alt="Logo Confitería La Gruta"
              width={44}
              height={44}
              sizes="44px"
              style={{ borderRadius: "50%", objectFit: "cover" }}
              priority
            />
            <span>Confitería La Gruta</span>
          </a>

          <ul className="navbar-links">
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#contacto" className="navbar-cta">Contacto</a></li>
          </ul>

          <button
            className="hamburger"
            aria-label="Menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#nosotros" onClick={closeMenu}>Nosotros</a>
          <a href="#especialidades" onClick={closeMenu}>Especialidades</a>
          <a href="#galeria" onClick={closeMenu}>Galería</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>
      )}
    </>
  );
}
