import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const Contacto = () => {
  return (
    <div className="contacto-bg" style={{ alignItems: "center" }}>
      <div className="row">
        <div className="col-md-6">
          <h4 className="text-white subTextSlider">Contáctanos</h4>
          <h6 className="text-white subTextSlider">
            ¡Contáctanos y transforma tu hogar con ventanas termopanel de
            calidad! Estamos aquí para responder a todas tus consultas,
            brindarte asesoramiento personalizado y ayudarte a encontrar la
            mejor solución para tus necesidades. Completa el formulario de
            contacto o llámanos directamente, ¡nos encantaría ser parte de tu
            proyecto!
          </h6>
          <Card
            style={{ width: "18rem", alignItems: "center", margin: "2rem" }}
          >
            <Card.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email Ejemplo</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Texto Ejemplo</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
              <Button variant="primary">TEST</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <iframe
            title="map-temuco"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49800.13769747952!2d-72.60272105000001!3d-38.72908949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scl!4v1689468136580!5m2!1ses-419!2scl"
            width="500"
            height="500"
            style={{ border: "0" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
