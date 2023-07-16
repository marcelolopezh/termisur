import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
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

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect} fade slide interval={3000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.image}
            alt={`Slide ${index + 1}`}
            onLoad={handleImageLoad}
          />
          <TransitionGroup>
            {activeIndex === index && isImageLoaded && (
              <CSSTransition classNames="slide-text" timeout={300}>
                <Carousel.Caption>
                  <h1 className="subTextSlider">{slide.title.toUpperCase()}</h1>
                  <h4 className="subTextSlider">{slide.description}</h4>
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
    image: slider2,
    title: "Calidad y eficiencia en cada trabajo",
    description: "Transformamos tu hogar en un espacio confortable y energéticamente eficiente."
  },
  {
    image: slider1,
    title: "A medida para tus necesidades",
    description: "Nos comprometemos con brindar soluciones personalizadas y duraderas para tu hogar o negocio."
  },
  {
    image: slider3,
    title: "Expertos en aislamiento térmico y acústico",
    description: "Descubre el confort y tranquilidad que ofrecen nuestras ventanas termopanel."
  }
];