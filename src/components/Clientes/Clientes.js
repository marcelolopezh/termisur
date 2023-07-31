import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./clientes.css";
import javierbeltran from "../../assets/javierbeltran.png";
import ebnervinibaldo from "../../assets/ebnervinibaldo.png";
import anavesquez from "../../assets/anavasquez.png";
import daisygarcia from "../../assets/daisygarcia.png";
import carlostraipe from "../../assets/carlostraipe.png";

let clientes = [
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
  {
    id: 5,
    nombre: "Carlos Traipe Bocca",
    testimonio:
      "Me agradó la forma de trabajar de Termisur, son personas agradables que inspiran confianza, el trabajo que realizaron en mi casa fue excelente, además me solucionaron alguno problemas con otras instalaciones que tenía anteriormente, muy buen trabajo el de Termisur.",
    img: carlostraipe,
  },
];

export const Clientes = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  clientes = shuffleArray(clientes);

  return (
    <div id="clientes" className="container-fluid-custom">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 data-aos="fade-up">Nuestros Clientes</h2>
            <p data-aos="fade-up">
              Nuestros clientes satisfechos son la prueba de nuestro excelente
              trabajo. Sus testimonios reflejan el nivel de calidad y servicio
              que ofrecemos en Termisur.
            </p>
          </Col>
        </Row>
        <div className="scrolling-container">
          <div className="testimonios-row">
            {clientes.map((cliente) => (
              <div key={cliente.id} className="card-wrapper">
                <Card>
                  <Card.Img src={cliente.img} />
                  <Card.Body>
                    <Card.Title>{cliente.nombre}</Card.Title>
                    <hr className="hr" />
                    <p className="testimonio" title={cliente.testimonio}>
                      {cliente.testimonio}
                    </p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
