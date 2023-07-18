import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { CarouselTermisur } from "./Carousel/CarouselTermisur";
import { Clientes } from "./Clientes/Clientes";
import { Footer } from "./Footer/Footer";
import { NavbarTop } from "./NavbarTop";
import { Nosotros } from "./Nosotros/Nosotros";
import { Servicios } from "./Servicios/Servicios";

export const Main = () => {
  const [showButton, setShowButton] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 300); // Muestra el botón cuando el scroll está más abajo de 300 píxeles
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  const handleClickScroll = (elementSelected) => {
    const element = document.getElementById(elementSelected);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Agrega el evento de scroll al montar el componente
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid id="inicio">
      <NavbarTop handleClickScroll={handleClickScroll} />
      <CarouselTermisur />
      <div id="servicios">
        <Servicios />
      </div>
      <div id="clientes">
        <Clientes />
      </div>
      <div id="nosotros">
        <Nosotros />
      </div>
      <Footer id="contacto"></Footer>
      {showButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </Container>
  );
};
