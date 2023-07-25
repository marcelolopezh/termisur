import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useMediaQuery } from "@react-hook/media-query";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import "./carousel.css";
import Carousel from "react-bootstrap/Carousel";

export const CarouselTermisur = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const mobileStyle = {
    height: "340px",
    // Aquí puedes agregar más estilos específicos para dispositivos móviles
  };

  const mobileTextStyle = {
    fontSize : "1.1rem"
  }

  const mobileSubTextStyle = {
    fontSize : ".9rem"
  }

  const desktopStyle = {
    maxHeight: "590px",
  };

  // Utilizar la función useMediaQuery para detectar si se está en un dispositivo móvil
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={4000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            style={isMobile ? mobileStyle : desktopStyle}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            onLoad={handleImageLoad}
          />
          <TransitionGroup>
            {activeIndex === index && isImageLoaded && (
              <CSSTransition classNames="slide-text" timeout={3000}>
                <Carousel.Caption className="slide-caption">
                  <h1 style={isMobile ? mobileTextStyle : {}}>{slide.title.toUpperCase()}</h1>
                  <h5 style={isMobile ? mobileSubTextStyle : {}}className="subTextSlider">{slide.description}</h5>
                </Carousel.Caption>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const slides = [
  {
    image: slider1,
    title: "Calidad y Eficiencia",
    description:
      "Transformamos tu hogar en un espacio energéticamente eficiente.",
  },
  {
    image: slider2,
    title: "Compromiso",
    description:
      "Nos comprometemos a brindar soluciones personalizadas y duraderas.",
  },
  {
    image: slider3,
    title: "Expertos en aislamiento térmico y acústico",
    description: "Confort y tranquilidad que ofrecen nuestras ventanas.",
  },
  {
    image: slider4,
    title: "Variedad de Estilos",
    description: "Encuentra el diseño perfecto para tus ventanas.",
  },
  {
    image: slider5,
    title: "Máximo Rendimiento",
    description: "Ventanas que combinan eficiencia y elegancia.",
  },
];
