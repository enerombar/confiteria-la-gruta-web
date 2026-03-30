import Image from "next/image";

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
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
          </div>

          <div className="about-text">
            <p className="section-subtitle">Nuestra Historia</p>
            <h2 className="section-title">
              Tradición y sabor en<br />el corazón de Aracena
            </h2>
            <div className="gold-divider" style={{ margin: "20px 0", marginLeft: 0 }} />

            <p>
              Confitería La Gruta nació con una misión clara: llevar la repostería
              artesanal de calidad a la Sierra de Aracena. Cada elaboración es fruto
              de un proceso cuidadoso, usando ingredientes frescos y recetas que
              respetan la tradición de la repostería española.
            </p>
            <p>
              Nuestra vitrina es un escaparate de sabores únicos: desde nuestro
              famoso brazo de gitano a la crema tostada hasta las tartas de
              chocolate o los delicados petisús. Todo hecho a mano, con dedicación
              y con el cariño que merece cada cliente.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
