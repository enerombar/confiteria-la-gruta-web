import Image from "next/image";

const specialties = [
  { img: "/fotos/tarta_crema_tostada_2.jpg", name: "Tarta de Crema Tostada", desc: "Nuestra estrella" },
  { img: "/fotos/bizcochos.jpg", name: "Bizcochos Artesanales", desc: "Receta de la casa" },
  { img: "/fotos/brazo.jpg", name: "Brazo de Gitano", desc: "Cremoso y delicado" },
  { img: "/fotos/cuñas_chocolate.jpg", name: "Cuñas de Chocolate", desc: "Irresistibles" },
  { img: "/fotos/petisu.jpg", name: "Petisús", desc: "Clásico francés" },
  { img: "/fotos/palmera_pistacho.jpg", name: "Palmera de Pistacho", desc: "Hojaldrada y crujiente" },
];

export default function Specialties() {
  return (
    <section className="specialties" id="especialidades">
      <div className="container">
        <div className="specialties-header">
          <p className="section-subtitle">Lo que nos hace únicos</p>
          <h2 className="section-title">Nuestras Especialidades</h2>
          <div className="gold-divider" />
        </div>

        <div className="specialties-grid">
          {specialties.map((s, i) => (
            <div className="specialty-card" key={i}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
