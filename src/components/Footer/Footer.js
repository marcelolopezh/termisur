import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <h3>Encuéntranos</h3>
            <div className="map-container">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.446733734138!2d-72.60424818311688!3d-38.7386700460163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96199004ea5d0f79%3A0x7a0d55fb1d9a78d!2sTemuco%2C%20Araucan%C3%ADa!5e0!3m2!1sen!2scl!4v1627064487456!5m2!1sen!2scl"
                width="300"
                height="300"
                a
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <h3>Contacto</h3>
            <p>
              <strong>Termisur</strong>
            </p>
            <p>Dirección: [Dirección de la empresa]</p>
            <p>Teléfono: [Número de teléfono]</p>
            <p>Email: [Dirección de correo electrónico]</p>
          </div>

          <div className="col-md-6 col-lg-4">
            <h3>Síguenos en redes sociales</h3>
            <ul className="social-icons">
              <li>
                <a href="[Enlace a la página de Facebook]" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="[Enlace a la página de Twitter]" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="[Enlace a la página de Instagram]" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="[Enlace a la página de LinkedIn]" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Termisur. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
