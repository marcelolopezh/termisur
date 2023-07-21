import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./clientes.css";
import testimonio1 from "../../assets/testimonio1.png";
import testimonio2 from "../../assets/testimonio2.png";

export const Clientes = () => {
  return (
    <div id="clientes" className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 data-aos="fade-up">Nuestros Clientes</h2>
          <p data-aos="fade-up" >
            Nuestros clientes satisfechos son la prueba de nuestro excelente
            trabajo. Sus testimonios reflejan el nivel de calidad y servicio que
            ofrecemos en Termisur.
          </p>
        </div>
        <div>
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
            style={{ backgroundColor: "red" }}
          >
            <div className="testimonial" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <img src={testimonio1} alt="Cliente 1" />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content">
                    <p>
                      ¡Excelente trabajo! Las ventanas de PVC instaladas por
                      Termisur han mejorado significativamente el aislamiento
                      térmico y acústico de mi hogar. ¡Muy recomendable!
                    </p>
                    <h3>Ramon Soto</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <img src={testimonio2} alt="Cliente 2" />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content">
                    <p>
                      ¡Increíble resultado! Los profesionales de Termisur han
                      superado todas mis expectativas al instalar las ventanas
                      de PVC en mi hogar. Ahora disfruto de un aislamiento
                      térmico y acústico excepcional. No puedo dejar de
                      recomendar sus servicios, ¡son realmente impresionantes!
                    </p>
                    <h3>Anibal Momo</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Agrega más testimonios aquí */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
