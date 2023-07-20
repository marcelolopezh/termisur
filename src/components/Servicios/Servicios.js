import "./servicios.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Servicios = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <section id="services" className="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 data-aos="fade-up">Nuestros Servicios</h2>
              <p data-aos="fade-up">
                En Termisur, nos enorgullece ofrecerte servicios de ventanas
                termopanel de la más alta calidad. Nuestro equipo de expertos
                está comprometido en proporcionar soluciones a medida para tus
                necesidades.
              </p>
            </div>
          </div>
          <div className="row md-5">
            <div
              className="col-lg-4"
              data-aos="zoom-out-top"
              data-aos-delay="300"
            >
              <div className="service-item service-item-border-top">
                <i className="fas fa-hammer"></i>
                <h3>Fabricación</h3>
                <p>
                  Ofrecemos ventanas de PVC de alta calidad, duraderas y con
                  excelentes propiedades aislantes. Diseñadas a medida para tus
                  necesidades.
                </p>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="zoom-out-top"
              data-aos-delay="450"
            >
              <div className="service-item service-item-border-top">
                <i className="fas fa-house"></i> <h3>Instalación</h3>
                <p>
                  Nuestro equipo de profesionales se encarga de la instalación
                  experta de las ventanas en tu hogar o negocio, garantizando un
                  ajuste perfecto y máximo rendimiento.
                </p>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="zoom-out-top"
              data-aos-delay="600"
            >
              <div className="service-item service-item-border-top">
                <i className="fas fa-toolbox"></i>
                <h3>Reparación</h3>
                <p>
                  Brindamos servicios de reparación de ventanas termopanel,
                  solucionando cualquier problema o desperfecto para asegurar su
                  buen funcionamiento y prolongar su vida útil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
