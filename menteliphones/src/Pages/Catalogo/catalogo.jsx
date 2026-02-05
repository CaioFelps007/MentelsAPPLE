import React from "react";
import NavHeader from "../../components/header/header";
import "./catalogo.css";

//images
import iphone1 from "../../images/iphone1.jpg";
import iphone2 from "../../images/iphone2.jpg";
import iphone3 from "../../images/iphone3.jpg";

const iphonesQueimaEstoque = [
  { id: 1, Image: iphone1, title: "Iphone 11 PRO", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 11 PRO MAX", Estado: "Novo" },
  { id: 1, Image: iphone3, title: "Iphone 11 PRO", Estado: "Usado" },
];

function Catalogo() {
  return (
    <>
      <NavHeader />
      <main className="page">
        <section className="container">
          <section className="titleCatalogo">
            <div className="centralizetext">
              <h2>🔥Confira as oportunidades que foram feitas para voce🔥</h2>
            </div>
          </section>

          <section className="principaiscatalogo">
            <div>
              <h3>Queima de estoque!🔥</h3>
            </div>

            <div className="iphonesQueima">
              <div className="gridCardCatalogo">
                {iphonesQueimaEstoque.map((Ipqueima) => (
                  <article className="cardCatalogo" key={Ipqueima.id}>
                    <img src={Ipqueima.Image} />
                    <div className="cardText">
                      <h5>{Ipqueima.title}</h5>
                      <p>{Ipqueima.Estado}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="faixa-scroll">
                <div className="faixa-conteudo">
                  ⚡ GARANTA O SEU AGORA • ESTOQUE LIMITADO • OFERTA ESPECIAL •
                  ⚡ GARANTA O SEU AGORA • ESTOQUE LIMITADO • OFERTA ESPECIAL •
                </div>
              </div>
            </div>
          </section>

          <section className="heroVendas">
            <div className="textVendas">
              <h2>Confira mais novidades</h2>
            </div>
            {/* Iphones 11 */}
            <div className="Iphones">
              <h4>Iphoenes 11</h4>
            </div>

            {/* Iphones 12 */}
            <div className="Iphones">
              <h4>Iphoenes 12</h4>
            </div>

            {/* Iphones 13 */}
            <div className="Iphones">
              <h4>Iphoenes 13</h4>
            </div>

            {/* Iphones 14 */}
            <div className="Iphones">
              <h4>Iphoenes 14</h4>
            </div>

            {/* Iphones 15 */}
            <div className="Iphones">
              <h4>Iphoenes 15</h4>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Catalogo;
