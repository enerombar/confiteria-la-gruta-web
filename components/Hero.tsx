"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const titleText = "repostería artesanal";

  return (
    <section className="hero" id="inicio" ref={ref}>
      {/* Background Image with PARALLAX */}
      <motion.div className="hero-bg-container" style={{ y }}>
        <Image
          src="/fotos/escaparate_2.jpg"
          alt="Vitrina de Confitería La Gruta"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="hero-img"
        />
      </motion.div>

      <div className="hero-overlay" />

      {/* Floating subtly (Sugar particles) */}
      <div className="hero-particles">
        <motion.div 
          className="particle p1" 
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="particle p2" 
          animate={{ x: [0, -20, 0], y: [0, 50, 0] }} 
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Hero Content */}
      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
           className="hero-header-info"
        >
          <span className="hero-eyebrow">Aracena · Sierra de Huelva</span>
          <motion.div 
            className="hero-title-divider" 
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
        </motion.div>

        <h1 className="hero-title">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block" }}
          >
            El arte de la
          </motion.span>
          <motion.em 
            className="premium-text-gold shine-text"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "inline-block", marginTop: "10px" }}
          >
            repostería artesanal
          </motion.em>
        </h1>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
        >
          <a href="#especialidades" className="btn-primary">Descubrir especialidades</a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0, y: -10, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
      >
        <span>Descubrir</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  );
}
