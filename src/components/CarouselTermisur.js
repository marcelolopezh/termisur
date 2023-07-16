import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png"

import Carousel from "react-bootstrap/Carousel";

export const CarouselTermisur = () => {
  return (
    <Carousel fade slide interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src={slider2} alt="First slide" />
        <Carousel.Caption>
          <h1 className="subTextSlider">
            {"Calidad y eficiencia en cada trabajo".toUpperCase()}
          </h1>
          <h4 className="subTextSlider">
            Transformamos tu hogar en un espacio confortable y energéticamente
            eficiente.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider1} alt="Second slide" />

        <Carousel.Caption>
          <h1 className="subTextSlider">
            {"A medida para tus necesidades".toUpperCase()}
          </h1>
          <h4 className="subTextSlider">
            Nos comprometemos con brindar soluciones personalizadas y duraderas
            para tu hogar o negocio.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption>
          <h1 className="subTextSlider">
            {"Expertos en aislamiento térmico y acústico".toUpperCase()}
          </h1>
          <h4 className="subTextSlider">
            Descubre el confort y tranquilidad que ofrecen nuestras ventanas
            termopanel.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
