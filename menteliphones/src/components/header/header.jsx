import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import logomentel from "../../images/logopimenta.jpeg";

import { FaWhatsapp } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const WHATSAPP_NUMBER = "5519999001725"; // troca aqui
const WHATSAPP_TEXT = encodeURIComponent(
  "Oi! Quero ver os iPhones disponíveis 👀📱",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

function NavHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navWrap">
      <nav className="navBar">
        <div className="navInner">
          {/* Brand */}
          <NavLink
            to="/"
            className="brand"
            onClick={closeMenu}
            aria-label="Ir para Home"
          >
            <div className="brandLogo" aria-hidden="true">
              {/* <img src={logomentel} className="logo" alt="Pimentel iPhones" /> */}
            </div>
            <span className="brandName">Pimentel iPhones</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="navLinks">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo">Catálogo</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/suporte">Suporte</NavLink>
            </li>
          </ul>

          {/* Right actions */}
          <div className="navActions">
            <a
              className="navCta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            {/* Mobile toggle */}
            <button
              className="navToggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobilePanel ${open ? "open" : ""}`}>
          <ul className="mobileLinks">
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalogo" onClick={closeMenu}>
                Catálogo
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" onClick={closeMenu}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/suporte" onClick={closeMenu}>
                Suporte
              </NavLink>
            </li>
          </ul>

          <a
            className="mobileCta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <FaWhatsapp /> Falar no WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
