"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto", isCta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });

    // ScrollSpy
    const sections = ["nosotros", "especialidades", "galeria", "contacto"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-150px 0px -60% 0px" } // Detect which section is mostly visible
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className={`${link.isCta ? "navbar-cta" : ""} ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
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
          <a href="#nosotros" className={activeSection === "nosotros" ? "active" : ""} onClick={closeMenu}>Nosotros</a>
          <a href="#especialidades" className={activeSection === "especialidades" ? "active" : ""} onClick={closeMenu}>Especialidades</a>
          <a href="#galeria" className={activeSection === "galeria" ? "active" : ""} onClick={closeMenu}>Galería</a>
          <a href="#contacto" className={activeSection === "contacto" ? "active" : ""} onClick={closeMenu}>Contacto</a>
        </div>
      )}
    </>
  );
}
