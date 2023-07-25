import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./clientes.css";
import javierbeltran from "../../assets/javierbeltran.png";
import ebnervinibaldo from "../../assets/ebnervinibaldo.png";
import anavesquez from "../../assets/anavasquez.png";

export const Clientes = () => {
  return (
    <div id="clientes" className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 data-aos="fade-up">Nuestros Clientes</h2>
          <p data-aos="fade-up">
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
                  <img src={ebnervinibaldo} alt="Cliente 1" />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content">
                    <div class="etiqueta-cita">
                      Reconocido en el mundo de la gastronomía y dueño de
                      restaurantes construye un nuevo y maravillo local en
                      Nehuentue.
                      <blockquote>
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          “
                        </span>
                        Me encanto el trabajo, Termisur cumplió con lo que
                        ofrecieron y su trabajo se adapta perfectamente a lo que
                        solicite, muy recomendable su trabajo
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          ”
                        </span>
                      </blockquote>
                      <hr />
                      <span style={{ fontWeight: "bold" }}>
                        Ebner Vinibaldo Concha Saavedra
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <img src={javierbeltran} alt="Cliente 2" />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content">
                    <div class="etiqueta-cita">
                      <blockquote>
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          “
                        </span>
                        Me acomodó mucho el trabajo y la responsabilidad de
                        Termisur, agrego que son muy eficientes en lo que hacen,
                        entregan una muy buena asesoría que se complementa
                        bastante bien con mis construcciones de alto estándar,
                        100% recomendables.
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          ”
                        </span>
                      </blockquote>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <img src={anavesquez} alt="Cliente 2" />
                </div>
                <div className="col-md-8">
                  <div className="testimonial-content">
                    <div class="etiqueta-cita">
                      <blockquote>
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          “
                        </span>
                        Excelente trabajo!! Muy confiable empresa Termisur,
                        terminaciones perfectas, material utilizado de buena
                        calidad y cumplen con los tiempos estipulados … 100 %
                        recomendable. Cumple con nuestras expectativas en el
                        aislamiento térmico ,ahorro en energía calórica.
                        <span
                          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                        >
                          ”
                        </span>
                      </blockquote>
                      <hr />
                      <span style={{ fontWeight: "bold" }}>
                        Ana María Vasquez Torres
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
