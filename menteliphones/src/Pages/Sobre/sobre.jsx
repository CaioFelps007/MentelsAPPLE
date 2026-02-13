import React from "react";
import NavHeader from "../../components/header/header";
import "./sobre.css";

function Sobre() {
  return (
    <>
      <NavHeader />
      <main className="page">
        <section className="containerSobre">
          {/* HERO */}
          <section className="heroSobre">
            <h1>
              Tecnologia de ponta, confiança real e o iPhone dos seus sonhos
              mais próximo do que você imagina.
            </h1>

            <p>
              Nascemos com um propósito simples: tornar acessível aquilo que
              sempre pareceu distante. Trabalhamos com iPhones importados,
              selecionados com rigor, garantindo procedência, qualidade e uma
              experiência de compra segura do início ao fim.
            </p>
          </section>

          {/* PERFIL */}
          <section className="profileApresentation">
            <div className="imgPhoto"></div>

            <div className="textBio">
              <h2>Quem está por trás</h2>

              <p>
                Eduardo Pimentel é um empreendedor movido pela visão de
                construir mais do que uma loja — uma marca baseada em confiança,
                transparência e relacionamento duradouro com cada cliente.
              </p>

              <p>
                O objetivo nunca foi apenas vender smartphones, mas entregar
                tecnologia que transforme rotinas, aproxime pessoas e eleve o
                padrão de experiência de quem escolhe comprar conosco.
              </p>

              <p className="highlight">
                Aqui, cada aparelho representa um compromisso com qualidade,
                honestidade e evolução constante.
              </p>
            </div>
          </section>

          {/* PORQUE IMPORTADOS */}
          <section className="ExplicationHistory">
            <div className="Explication">
              <h2>Por que iPhones importados?</h2>

              <p>
                Acreditamos que tecnologia premium não deve ser um privilégio
                distante. A importação permite oferecer dispositivos originais,
                com alto padrão de conservação e valores mais acessíveis do que
                o mercado tradicional.
              </p>

              <p>
                Cada aparelho passa por um processo criterioso de verificação,
                garantindo funcionamento perfeito e procedência segura — porque
                confiança não é um diferencial, é obrigação.
              </p>

              <div className="values">
                <div className="valueCard">
                  <h3>Procedência Garantida</h3>
                  <span>Aparelhos verificados e selecionados</span>
                </div>

                <div className="valueCard">
                  <h3>Preço Justo</h3>
                  <span>Premium sem valores abusivos</span>
                </div>

                <div className="valueCard">
                  <h3>Atendimento Real</h3>
                  <span>Suporte próximo e humanizado</span>
                </div>

                <div className="valueCard">
                  <h3>Confiança</h3>
                  <span>Relações construídas no longo prazo</span>
                </div>
              </div>
            </div>
          </section>
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

export default Sobre;
