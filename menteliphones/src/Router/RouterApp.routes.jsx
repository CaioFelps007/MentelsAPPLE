import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//pages
import Home from "../Pages/Home/home";
import Catalogo from "../Pages/Catalogo/catalogo";
import Suporte from "../Pages/Suporte/suporte";
import Sobre from "../Pages/Sobre/sobre";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
