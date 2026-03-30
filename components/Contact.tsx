export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact-grid">
          {/* INFO */}
          <div>
            <p className="section-subtitle">Encuéntranos</p>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "12px" }}>
              Visítanos en Aracena
            </h2>
            <div className="gold-divider" style={{ margin: "16px 0 32px", marginLeft: 0 }} />

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Dirección</div>
                  <a
                    className="contact-item-value"
                    href="https://maps.google.com/?q=C/+Pintor+Mario+León+Ruiz,+4B,+Aracena,+Huelva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    C/ Pintor Mario León Ruiz, 4B<br />21200 Aracena, Huelva
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 010 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Teléfono</div>
                  <a className="contact-item-value" href="tel:+34690834617">+34 690 834 617</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Horario</div>
                  <div className="contact-item-value">
                    Jueves a Lunes: 10:00 – 14:00 / 16:00 – 18:30<br />
                    Martes y Miércoles: Cerrado
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.instagram.com/confiterialagruta/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Confiter%C3%ADa-La-Gruta-61585980141757/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/34690834617" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MAPA */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.653912761857!2d-6.5673837!3d37.891775599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd117b9ebca184e7%3A0x69ce9ad001ae58ba!2sConfiter%C3%ADa%20La%20Gruta%20Aracena!5e0!3m2!1ses!2ses!4v1743410940141!5m2!1ses!2ses"
              title="Ubicación Confitería La Gruta"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
