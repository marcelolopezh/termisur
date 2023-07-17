import React from "react";
import Container from "react-bootstrap/Container";
import { CarouselTermisur } from "./Carousel/CarouselTermisur";
import { Footer } from "./Footer/Footer";
import { NavbarTop } from "./NavbarTop";
import { Nosotros } from "./Nosotros/Nosotros";
import { Servicios } from "./Servicios/Servicios";

export const Main = () => {
  const handleClickScroll = (elementSelected) => {
    const element = document.getElementById(elementSelected);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid id="inicio">
      <NavbarTop handleClickScroll={handleClickScroll} />
      <CarouselTermisur />
      <div id="servicios">
        <Servicios />
      </div>
      <div id="nosotros">
        <Nosotros/>
      </div>
      <Footer id="contacto"></Footer>
    </Container>
  );
};
