import React from "react";
import NavHeader from "../../components/header/header";
import "./suporte.css";

function Suporte() {
  return (
    <>
      <NavHeader />

      <main className="page">
        <section className="containerSobre">
          {/* HERO */}
          <div className="supportHero">
            <span className="supportBadge">Central de Suporte</span>

            <h1>
              Estamos aqui para garantir que sua experiência seja perfeita —
              antes, durante e depois da compra.
            </h1>

            <p>
              Nosso compromisso vai além da entrega. Conte com um atendimento
              rápido, humano e preparado para resolver qualquer situação com
              transparência e segurança.
            </p>
          </div>

          {/* CARDS */}
          <div className="supportGrid">
            <div className="supportCard">
              <h3>💬 Fale Conosco</h3>
              <p>
                Precisa de ajuda imediata? Nossa equipe está pronta para te
                atender com agilidade.
              </p>

              <button>Iniciar atendimento</button>
            </div>

            <div className="supportCard">
              <h3>📦 Acompanhar Pedido</h3>
              <p>
                Consulte o status do seu pedido em tempo real e acompanhe cada
                etapa da entrega.
              </p>

              <button>Rastrear pedido</button>
            </div>

            <div className="supportCard">
              <h3>🛡 Garantia e Devoluções</h3>
              <p>
                Produtos com procedência e suporte real. Confira nossas
                políticas de troca e garantia.
              </p>

              <button>Ver políticas</button>
            </div>

            <div className="supportCard">
              <h3>❓ Dúvidas Frequentes</h3>
              <p>
                Respostas rápidas para as perguntas mais comuns dos nossos
                clientes.
              </p>

              <button>Acessar FAQ</button>
            </div>
          </div>

          {/* INFO EXTRA */}
          <div className="supportFooter">
            <h2>Atendimento que acompanha o nível do seu iPhone.</h2>

            <span>
              Segunda a Sábado • 9h às 19h
              <br />
              Respostas em poucos minutos.
            </span>
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

export default Suporte;
