import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./clientes.css";
import javierbeltran from "../../assets/javierbeltran.png";
import ebnervinibaldo from "../../assets/ebnervinibaldo.png";
import anavesquez from "../../assets/anavasquez.png";
import daisygarcia from "../../assets/daisygarcia.png";

const clientes = [
  {
    id: 1,
    nombre: "Ebner Concha Saavedra",
    testimonio:
      "Me encantó el trabajo, Termisur cumplió con lo que ofrecieron y su trabajo se adapta perfectamente a lo que solicite, muy recomendable su trabajo",
    img: ebnervinibaldo,
  },
  {
    id: 2,
    nombre: "Javier Belrán",
    testimonio:
      "Me acomodó mucho el trabajo y la responsabilidad de Termisur, agrego que son muy eficientes en lo que hacen, entregan una muy buena asesoría que se complementa bastante bien con mis construcciones de alto estándar, 100% recomendables.",
    img: javierbeltran,
  },
  {
    id: 3,
    nombre: "Ana María Vasquez Torres",
    testimonio:
      "Excelente trabajo!! Muy confiable empresa Termisur, terminaciones perfectas, material utilizado de buena calidad y cumplen con los tiempos estipulados … 100 % recomendable. Cumple con nuestras expectativas en el aislamiento térmico y ahorro en energía calórica.",
    img: anavesquez,
  },
  {
    id: 4,
    nombre: "Daisy García Quipo",
    testimonio:
      "Me impresionó la rapidez con la que cambiaron mis ventanas y el orden que mantienen cuando las instalan, además la calefacción del hogar mejoró bastante, un 7 Termisur.",
    img: daisygarcia,
  },
  
];

export const Clientes = () => {
  const [expandedTestimonio, setExpandedTestimonio] = useState(null);

  const handleMouseEnter = (id) => {
    setExpandedTestimonio(id);
  };

  const handleMouseLeave = () => {
    setExpandedTestimonio(null);
  };

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
          <Row xs={1} md={4} className="g-4">
            {clientes.map((cliente) => (
              <Col key={cliente.id}>
                <Card
                  onMouseEnter={() => handleMouseEnter(cliente.id)}
                  onMouseLeave={handleMouseLeave}
                  className={`card ${
                    expandedTestimonio === cliente.id ? "expanded" : ""
                  }`}
                >
                  <Card.Img src={cliente.img} />
                  <Card.Body>
                    <Card.Title>{cliente.nombre}</Card.Title>
                    <hr className="hr"></hr>
                    <p className="testimonio" title={cliente.testimonio}>
                      {expandedTestimonio === cliente.id
                        ? cliente.testimonio
                        : cliente.testimonio}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
