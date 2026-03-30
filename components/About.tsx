"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const transition: any = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-images"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] } as any}
          >
            <Image
              src="/fotos/escaparate_3.jpg"
              alt="Interior de Confitería La Gruta"
              width={600}
              height={500}
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQDB//EACQQAAIBBAICAwEAAAAAAAAAAAECAwQREiExBRNRYYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ap7e5ltbqKeFyjxuGVh2INZbUNau9TtVgu5DLKh2s2Rk+TxVDNIYoHkC7ioJx60q3eKS3R5V2uwyw9D0oA//Z"
              className="about-img-main"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          <div className="about-text">
            <motion.p className="section-subtitle" {...fadeInUp} transition={transition}>Nuestra Historia</motion.p>
            <motion.h2 className="section-title" {...fadeInUp} transition={{ ...transition, delay: 0.1 }}>
              Tradición y sabor en<br />el corazón de Aracena
            </motion.h2>
            <motion.div 
              className="gold-divider" 
              style={{ margin: "20px 0", marginLeft: 0 }}
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            <motion.p {...fadeInUp} transition={{ ...transition, delay: 0.2 }}>
              Confitería La Gruta nació con una misión clara: llevar la repostería
              artesanal de calidad a la Sierra de Aracena. Cada elaboración es fruto
              de un proceso cuidadoso, usando ingredientes frescos y recetas que
              respetan la tradición de la repostería española.
            </motion.p>
            <motion.p {...fadeInUp} transition={{ ...transition, delay: 0.3 }}>
              Nuestra vitrina es un escaparate de sabores únicos: desde nuestro
              famoso brazo de gitano a la crema tostada hasta las tartas de
              chocolate o los delicados petisús. Todo hecho a mano, con dedicación
              y con el cariño que merece cada cliente.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
