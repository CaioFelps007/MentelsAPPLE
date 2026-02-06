import React from "react";
import NavHeader from "../../components/header/header";
import "./home.css";

// images
import logomentel from "../../images/logopimenta.jpeg";
import iphone1 from "../../images/iphone1.jpg";
import iphone2 from "../../images/iphone2.jpg";
import iphone3 from "../../images/iphone3.jpg";

// icons
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import {
  MdStar,
  MdVerified,
  MdSecurity,
  MdLocalShipping,
} from "react-icons/md";

const WHATSAPP_NUMBER = "5519999001725"; // ex: 55 + DDD + número
const WHATSAPP_TEXT = encodeURIComponent(
  "Oi! Quero ver os iPhones disponíveis 👀📱",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const INSTAGRAM_URL = "https://www.instagram.com/iphones_pimentel/";

const products = [
  {
    id: 1,
    title: "iPhone (Oferta 1)",
    subtitle: "Pronta entrega • Consulte cores",
    image: iphone1,
    tag: "Mais vendido",
  },
  {
    id: 2,
    title: "iPhone (Oferta 2)",
    subtitle: "Saúde da bateria alta",
    image: iphone2,
    tag: "Top custo-benefício",
  },
  {
    id: 3,
    title: "iPhone (Oferta 3)",
    subtitle: "Garantia e procedência",
    image: iphone3,
    tag: "Oferta relâmpago",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Cliente 1",
    text: "Atendimento absurdo. Chegou rápido e tudo certinho!",
    stars: 5,
  },
  {
    id: 2,
    name: "Cliente 2",
    text: "Muito honesto, me explicou tudo e o iPhone tá zero.",
    stars: 5,
  },
  {
    id: 3,
    name: "Cliente 3",
    text: "Preço bom e confiança. Recomendo demais.",
    stars: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="stars" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <MdStar key={i} className={`star ${i < count ? "isOn" : ""}`} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavHeader />

      <main className="page">
        {/* HERO */}
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="brandRow">
                <img src={logomentel} className="logo" alt="Pimentel iPhones" />
                <span className="brandTag">Importados • Seminovos premium</span>
              </div>

              <h1 className="heroTitle">
                Seu iPhone com <span className="gradText">procedência</span>,
                preço justo e atendimento 10/10.
              </h1>

              <p className="heroSubtitle">
                Compre com segurança: transparência, teste na hora e suporte no
                pós-venda. Chama no WhatsApp e eu te mando as opções do momento.
              </p>

              <div className="trustRow">
                <div className="trustItem">
                  <MdVerified /> Procedência
                </div>
                <div className="trustItem">
                  <MdSecurity /> Compra segura
                </div>
                <div className="trustItem">
                  <MdLocalShipping /> Entrega/Retirada
                </div>
              </div>
            </div>
            {/* 
            <div className="heroRight">
              <div className="heroCard">
                <div className="heroCardTop">
                  <span className="pill">🔥 Imperdíveis hoje</span>
                  <span className="muted">Atualizado sempre</span>
                </div>

                <div className="heroPreview">
                  {products.slice(0, 3).map((p) => (
                    <img
                      key={p.id}
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="heroPreviewImg"
                    />
                  ))}
                </div>

                <div className="heroCardBottom">
                  <p className="small">
                    Quer lista completa (preços, armazenamento e condição)?{" "}
                    <a
                      className="link"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Pedir no WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* IMPERDÍVEIS */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Imperdíveis do momento</h2>
              <p className="muted">
                Três opções em destaque — chama pra ver cores, memória e
                valores.
              </p>
            </div>

            <div className="gridProducts">
              {products.map((p) => (
                <article className="cardProduct" key={p.id}>
                  <div className="cardMedia">
                    <span className="badge">{p.tag}</span>
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="cardBody">
                    <h3>{p.title}</h3>
                    <p className="muted">{p.subtitle}</p>
                    <a
                      className="miniCta"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver detalhes <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPRE CONOSCO */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Compre conosco</h2>
              <p className="muted">
                Melhores preços da região e atendimento de verdade — do primeiro
                “oi” até o pós-venda.
              </p>
            </div>

            <div className="contactGrid">
              <div className="cardContact">
                <h3 className="contactTitle whats">
                  WhatsApp <FaWhatsapp />
                </h3>
                <p className="muted">Resposta rápida • Orçamento na hora</p>
                <a
                  className="btn btnPrimary w100"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar agora
                </a>
              </div>

              <div className="cardContact">
                <h3 className="contactTitle insta">
                  Instagram <FaInstagram />
                </h3>
                <p className="muted">Stories com novidades e provas sociais</p>
                <a
                  className="btn btnGhost w100"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="section">
          <div className="container">
            <div className="sectionHead center">
              <h2>Clientes satisfeitos</h2>
              <p className="muted">
                Reputação é tudo. Aqui o negócio é transparente.
              </p>
            </div>

            <div className="gridTestimonials">
              {testimonials.map((t) => (
                <article className="cardTestimonial" key={t.id}>
                  <Stars count={t.stars} />
                  <p className="quote">“{t.text}”</p>
                  <p className="byline">— {t.name}</p>
                </article>
              ))}
            </div>

            <div className="finalCta">
              <h3>Quer fechar hoje?</h3>
              <p className="muted">
                Me chama no WhatsApp e eu te passo as opções com preço e
                condição.
              </p>
              <a
                className="btn btnPrimary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Quero ver as opções
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <span className="muted">
              © {new Date().getFullYear()} Pimentel iPhones
            </span>
            <span className="muted">Feito com ❤️</span>
          </div>
        </footer>
      </main>
    </>
  );
}
