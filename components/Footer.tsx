import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/fotos/logo_la_gruta.jpg"
              alt="Logo Confitería La Gruta"
              width={52}
              height={52}
              sizes="52px"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <p>Repostería artesanal en el corazón de la Sierra de Aracena.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/confiterialagruta/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Confiter%C3%ADa-La-Gruta-61585980141757/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://wa.me/34690834617" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul className="footer-contact-list">
              <li><span>C/ Pintor Mario León Ruiz, 4B, Aracena</span></li>
              <li><a href="tel:+34690834617">+34 690 834 617</a></li>
              <li><a href="mailto:confiterialagruta@gmail.com">confiterialagruta@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Confitería La Gruta · Aracena, Huelva</p>
        </div>
      </div>
    </footer>
  );
}
