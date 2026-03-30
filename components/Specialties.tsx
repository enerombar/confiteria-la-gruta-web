"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const specialties = [
  { img: "/fotos/tarta_crema_tostada_2.jpg", name: "Tarta de Crema Tostada", desc: "Nuestra estrella" },
  { img: "/fotos/bizcochos.jpg", name: "Bizcochos Artesanales", desc: "Receta de la casa" },
  { img: "/fotos/brazo.jpg", name: "Brazo de Gitano", desc: "Cremoso y delicado" },
  { img: "/fotos/cuñas_chocolate.jpg", name: "Cuñas de Chocolate", desc: "Irresistibles" },
  { img: "/fotos/petisu.jpg", name: "Petisús", desc: "Clásico francés" },
  { img: "/fotos/palmera_pistacho.jpg", name: "Palmera de Pistacho", desc: "Hojaldrada y crujiente" },
];

export default function Specialties() {
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: transition as any }
  };

  return (
    <section className="specialties" id="especialidades">
      <div className="container">
        <motion.div 
          className="specialties-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition as any}
        >
          <p className="section-subtitle">Lo que nos hace únicos</p>
          <h2 className="section-title">Nuestras Especialidades</h2>
          <div className="gold-divider" />
        </motion.div>

        <motion.div 
          className="specialties-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {specialties.map((s, i) => (
            <motion.div className="specialty-card" key={i} variants={item}>
              <Image
                src={s.img}
                alt={s.name}
                width={600}
                height={800}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="specialty-overlay">
                <div className="specialty-name">{s.name}</div>
                <div className="specialty-desc">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
