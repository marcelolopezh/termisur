import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./modalContacto.css";

export const ModalContacto = ({ showModal, handleCloseModal }) => {
  return (
    <div className="modalContacto">
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contáctenos!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Gracias por visitarnos! Estamos encantados de poder ayudarte. Si
          tienes alguna pregunta, comentario o consulta, no dudes en ponerte en
          contacto con nosotros. Puedes elegir la opción que más te convenga a
          continuación:
          <hr />
          <a
            href="https://w.app/ZbxVfl"
            style={{ fontSize: "1.4rem" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
            <span style={{ fontSize: "1rem", marginLeft: ".6rem" }}>
              WhatsApp
            </span>
          </a>
          <br></br>
          <a
            href="https://www.instagram.com/termisur/"
            style={{ fontSize: "1.4rem" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <span style={{ fontSize: "1rem", marginLeft: ".6rem" }}>
              Instagram
            </span>
          </a>
          <br></br>
          <a
            href="tel:+56985819870"
            style={{ fontSize: "1.3rem" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-phone "></i>
            <span style={{ fontSize: "1rem", marginLeft: ".6rem" }}>
             +569 8581 9870
            </span>
          </a>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
