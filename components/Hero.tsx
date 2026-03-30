"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* Background Image with subtle Ken Burns effect */}
      <div className="hero-bg-container">
        <Image
          src="/fotos/escaparate_2.jpg"
          alt="Vitrina de Confitería La Gruta"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="hero-img"
        />
      </div>

      <div className="hero-overlay" />

      {/* Floating subtly (Flake 1) */}
      <motion.div 
        className="hero-float-1"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 0.15 }}
        transition={{ 
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1.5, delay: 1 } 
        }}
      >
        <Image src="/floating_flakes.png" alt="" width={180} height={180} />
      </motion.div>

      {/* Floating subtly (Flake 2) */}
      <motion.div 
        className="hero-float-2"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 15, 0], opacity: 0.1 }}
        transition={{ 
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
          opacity: { duration: 2, delay: 2 } 
        }}
      >
        <Image src="/floating_flakes.png" alt="" width={120} height={120} style={{ filter: "hue-rotate(45deg) brightness(0.4)" }} />
      </motion.div>

      <div className="hero-content">
        <motion.p 
          className="hero-tagline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aracena · Sierra de Huelva
        </motion.p>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>El arte de la</span>
          <em className="premium-text-gold">repostería artesanal</em>
        </motion.h1>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          Elaboramos cada pieza con pasión, ingredientes de primera calidad
          y el sabor auténtico de la tradición serrana desde hace décadas.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <a href="#especialidades" className="btn-primary">Nuestras Especialidades</a>
          <a href="#contacto" className="btn-secondary">Encuéntranos</a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span>Descubrir</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
