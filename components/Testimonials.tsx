const googleReviews = [
  {
    name: "Ana Belén Rodríguez",
    text: "¡Me ha encantado! Los pasteles son espectaculares y se nota que todo es recién hecho. La tienda es preciosa y el personal muy amable.",
    stars: 5,
  },
  {
    name: "Bull c4",
    text: "Una pastelería espectacular. Todo es artesanal y se nota la calidad en cada bocado. Las palmeras… irresistibles.",
    stars: 5,
  },
  {
    name: "Lizeth Carrizo",
    text: "De los pasteles más ricos que he probado en mucho tiempo, la calidad y presentación exquisitas. Mis favoritas son las palmeras.",
    stars: 5,
  },
  {
    name: "José Luis Ortega",
    text: "Excelentes productos, riquísimos. Todo cuidado al detalle. Los propietarios tienen una dilatada experiencia y eso se nota.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <div className="testimonials-header">
          <p className="section-subtitle">Lo que dicen nuestros clientes</p>
          <h2 className="section-title">Reseñas en Google</h2>
          <div className="gold-divider" />
        </div>

        <div className="testimonials-grid">
          {googleReviews.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {[...Array(t.stars)].map((_, idx) => (
                  <svg key={idx} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-content">"{t.text}"</p>
              <p className="testimonial-author-name">{t.name}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="https://www.google.com/search?q=Confiteria+La+Gruta+Aracena+reseñas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
