import React from "react";
import NavHeader from "../../components/header/header";
import "./home.css";

//images
import logomentel from "../../images/logopimenta.jpeg";
import iphone1 from "../../images/iphone1.jpg";
import iphone2 from "../../images/iphone2.jpg";
import iphone3 from "../../images/iphone3.jpg";

function Home() {
  return (
    <>
      <NavHeader />
      <main>
        <section className="hero">
          <div className="section-logo">
            <img
              src={logomentel}
              className="logo"
              alt="Pimentel Iphones logo"
            />
          </div>
        </section>
        <section className="hero-imperdiveis">
          <div className="promotion">
            <h2>IMPERDIVEIS DO MOMENTO</h2>
            <div className="img-promotion">
              <img src={iphone1} className="iphonesdestack" />
              <img src={iphone2} className="iphonesdestack" />
              <img src={iphone3} className="iphonesdestack" />
            </div>
          </div>
        </section>
        <section className="hero-textone">
          <div className="explication">
            <h2>COMPRE CONOSCO</h2>
            <p>
              Melhores precos da regiao, fazendo por amor em ver o sorriso no
              rosto de outras pessoas ao realizar um sonho que a maioria hoje
              tem, compre seu iphone!
            </p>
          </div>
        </section>
        <section className="hero-avalia">
          <div className="avaliacoes-stars">
            <h2>VEJA ALGUNS DOS CLIENTES SATISFEITOS</h2>
          </div>
          <div className="comentarios-avaliacoes">NOTA 10 ATENDIMENTO</div>
        </section>
      </main>
    </>
  );
}

export default Home;
