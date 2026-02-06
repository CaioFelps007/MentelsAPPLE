import React from "react";
import NavHeader from "../../components/header/header";
import "./catalogo.css";

//images
import iphone1 from "../../images/iphone1.jpg";
import iphone2 from "../../images/iphone2.jpg";
import iphone3 from "../../images/iphone3.jpg";

const iphonesQueimaEstoque = [
  {
    id: 1,
    Image: iphone1,
    title: "Iphone 11 PRO",
    Estado: "Semi Novo",
    tag: "Imperdiveis⚡",
  },
  {
    id: 2,
    Image: iphone2,
    title: "Iphone 11 PRO MAX",
    Estado: "Novo",
    tag: "Imperdiveis⚡",
  },
  {
    id: 3,
    Image: iphone3,
    title: "Iphone 11 PRO",
    Estado: "Usado",
    tag: "Imperdiveis⚡",
  },
];

const iphonesonze = [
  { id: 1, Image: iphone1, title: "Iphone 11 ", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 11 PRO MAX", Estado: "Novo" },
  { id: 3, Image: iphone3, title: "Iphone 11 PRO", Estado: "Usado" },
];
const iphonesdoze = [
  { id: 1, Image: iphone1, title: "Iphone 12 ", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 12 PRO MAX", Estado: "Novo" },
  { id: 3, Image: iphone3, title: "Iphone 12 PRO", Estado: "Usado" },
];
const iphonestreze = [
  { id: 1, Image: iphone1, title: "Iphone 13 ", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 13 PRO MAX", Estado: "Novo" },
  { id: 3, Image: iphone3, title: "Iphone 13 PRO", Estado: "Usado" },
];
const iphonesquatorze = [
  { id: 1, Image: iphone1, title: "Iphone 14 ", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 14 PRO MAX", Estado: "Novo" },
  { id: 3, Image: iphone3, title: "Iphone 14 PRO", Estado: "Usado" },
];
const iphonesquinze = [
  { id: 1, Image: iphone1, title: "Iphone 15 ", Estado: "Semi Novo" },
  { id: 2, Image: iphone2, title: "Iphone 15  PRO MAX", Estado: "Novo" },
  { id: 3, Image: iphone3, title: "Iphone 15  PRO", Estado: "Usado" },
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
                    <div className="cardMedia">
                      <img src={Ipqueima.Image} />
                      <span className="badgeDois">{Ipqueima.tag}</span>
                    </div>
                    <div className="cardText">
                      <h5>{Ipqueima.title}</h5>
                      <p>{Ipqueima.Estado}</p>
                      <button className="btnCard">Ver detalhes</button>
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
              <h2>Iphones 11</h2>

              <div className="iphonesCatalogos">
                <div className="gridCardCatalogo">
                  {iphonesonze.map((Iponze) => (
                    <article className="cardCatalogo" key={Iponze.id}>
                      <img src={Iponze.Image} />
                      <div className="cardText">
                        <h5>{Iponze.title}</h5>
                        <p>{Iponze.Estado}</p>
                        <button className="btnCard">Ver detalhes</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Iphones 12 */}
            <div className="Iphones">
              <h2>Iphones 12</h2>

              <div className="iphonesCatalogos">
                <div className="gridCardCatalogo">
                  {iphonesdoze.map((Ipdoze) => (
                    <article className="cardCatalogo" key={Ipdoze.id}>
                      <img src={Ipdoze.Image} />
                      <div className="cardText">
                        <h5>{Ipdoze.title}</h5>
                        <p>{Ipdoze.Estado}</p>
                        <button className="btnCard">Ver detalhes</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Iphones 13 */}
            <div className="Iphones">
              <h2>Iphones 13</h2>

              <div className="iphonesCatalogos">
                <div className="gridCardCatalogo">
                  {iphonestreze.map((Iptreze) => (
                    <article className="cardCatalogo" key={Iptreze.id}>
                      <img src={Iptreze.Image} />
                      <div className="cardText">
                        <h5>{Iptreze.title}</h5>
                        <p>{Iptreze.Estado}</p>
                        <button className="btnCard">Ver detalhes</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Iphones 14 */}
            <div className="Iphones">
              <h2>Iphones 14</h2>

              <div className="iphonesCatalogos">
                <div className="gridCardCatalogo">
                  {iphonesquatorze.map((Ipquatorze) => (
                    <article className="cardCatalogo" key={Ipquatorze.id}>
                      <img src={Ipquatorze.Image} />
                      <div className="cardText">
                        <h5>{Ipquatorze.title}</h5>
                        <p>{Ipquatorze.Estado}</p>
                        <button className="btnCard">Ver detalhes</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Iphones 15 */}
            <div className="Iphones">
              <h2>Iphones 15</h2>

              <div className="iphonesCatalogos">
                <div className="gridCardCatalogo">
                  {iphonesquinze.map((Ipquinze) => (
                    <article className="cardCatalogo" key={Ipquinze.id}>
                      <img src={Ipquinze.Image} />
                      <div className="cardText">
                        <h5>{Ipquinze.title}</h5>
                        <p>{Ipquinze.Estado}</p>
                        <button className="btnCard">Ver detalhes</button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Catalogo;
