import "./servicios.css";

export const Servicios = () => {
  return (
    <>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4>Nuestros Servicios</h4>
              <h6>
                En Termisur, nos enorgullece ofrecerte servicios de ventanas
                termopanel de la más alta calidad. Nuestro equipo de expertos
                está comprometido en proporcionar soluciones a medida para tus
                necesidades.{" "}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="service-item animate__animated animate__fadeIn">
                <i className="fas fa-window-maximize"></i>
                <h3>Fabricación de ventanas PVC</h3>
                <p>
                  Ofrecemos ventanas de PVC de alta calidad, duraderas y con
                  excelentes propiedades aislantes. Diseñadas a medida para tus
                  necesidades.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item animate__animated animate__fadeIn">
                <i className="fas fa-tools"></i>
                <h3>Instalación</h3>
                <p>
                  Nuestro equipo de profesionales se encarga de la instalación
                  experta de las ventanas en tu hogar o negocio, garantizando un
                  ajuste perfecto y máximo rendimiento.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-item animate__animated animate__fadeIn">
                <i className="fas fa-tools"></i>
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
