import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { CarouselTermisur } from "./Carousel/CarouselTermisur";
import { Clientes } from "./Clientes/Clientes";
import { DividerTriangle } from "./Dividers/DividerTriangle";
import { Footer } from "./Footer/Footer";
import { NavbarTop } from "./NavbarTop";
import { RRSS } from "./RRSS/RRSS";
import { Proyectos } from "./Proyectos/Proyectos";
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
      behavior: "smooth",
    });
  };

  const handleClickScroll = (elementSelected) => {
    const element = document.getElementById(elementSelected);
    if (element) {
      let yOffset = -60; // Valor predeterminado para PC
      if (window.innerWidth <= 767) {
        // Dispositivos móviles con ancho de pantalla igual o menor a 767px
        yOffset = -300; // Ajusta este valor según sea necesario para dispositivos móviles
      }
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid id="inicio">
      <RRSS />
      <NavbarTop handleClickScroll={handleClickScroll} />
      <CarouselTermisur />
      <div id="seccion-servicios">
        <Servicios />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id="seccion-clientes" style={{ marginBottom: "2rem" }}>
        <Clientes />
      </div>
      <DividerTriangle />

      <div id="seccion-nosotros">{/**<Nosotros /> */}</div>
      <Footer id="seccion-contacto"></Footer>
      {showButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </Container>
  );
};
