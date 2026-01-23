import React from "react";
import NavHeader from "../../components/header/header";
import logomentel from "../../images/logopimenta.jpeg";
import "./home.css";

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
        <section>Continua</section>
      </main>
    </>
  );
}

export default Home;
