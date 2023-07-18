import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./clientes.css";
import testimonio1 from "../../assets/testimonio1.png";
import testimonio2 from "../../assets/testimonio2.png";

export const Clientes = () => {
  return (
    <section id="clientes" className="full-height-section">
      <div className="container">
        <h2 data-aos="fade-up">Testimonios de nuestros clientes</h2>
        <Carousel
           showArrows={false}
           infiniteLoop={true}
           autoPlay={true}
           emulateTouch={true}
           showThumbs={false}
           showStatus={false}
           interval={5000}
           transitionTime={500}
           swipeScrollTolerance={40}
           className="testimonial-carousel"
        >
          <div className="testimonial">
            <div className="row">
              <div className="col-md-3">
                <img src={testimonio1} alt="Cliente 1" />
              </div>
              <div className="col-md-9">
                <div className="testimonial-content">
                  <p>
                    "¡Excelente trabajo! Las ventanas de PVC instaladas por
                    Termisur han mejorado significativamente el aislamiento
                    térmico y acústico de mi hogar. ¡Muy recomendable!"
                  </p>
                  <h3>Nombre del Cliente</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="row">
              <div className="col-md-9">
                <div className="testimonial-content">
                  <p>
                    "¡Excelente trabajo! Las ventanas de PVC instaladas por
                    Termisur han mejorado significativamente el aislamiento
                    térmico y acústico de mi hogar. ¡Muy recomendable!"
                  </p>
                  <h3>Nombre del Cliente</h3>
                </div>
              </div>
              <div className="col-md-3">
                <img src={testimonio2} alt="Cliente 1" />
              </div>
            </div>
          </div>
        </Carousel>
        {/* Agrega más testimonios aquí */}
      </div>
    </section>
  );
};
