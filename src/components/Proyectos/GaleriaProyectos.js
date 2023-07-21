import { useState, useEffect } from "react";
import { storage } from "../Firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Modal, Carousel, Spinner } from "react-bootstrap";
import "./style.css";

export const GaleriaProyectos = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageRef = ref(storage, categoria);
    listAll(storageRef)
      .then((res) => {
        const imageURLs = res.items.map((item) => getDownloadURL(item));
        return Promise.all(imageURLs);
      })
      .then((urls) => {
        setImagenes(urls);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
        setLoading(false);
      });
  }, [categoria]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  return (
    <div>
      <div
        className="row m-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {loading ? (
          <Spinner animation="border" role="status" className="m-auto">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        ) : (
          imagenes.map((url, index) => (
            <div
              key={`image-${index}`}
              className="galeriaProyectos"
              onClick={() => openModal(index)}
            >
              <img
                className="rounder text-center"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "2px solid #ff7e2b",
                }}
                src={url}
                alt={`Imagen ${index + 1}`}
              />
            </div>
          ))
        )}
      </div>

      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        onEnter={() => setCurrentImageIndex(selectedImageIndex)}
        dialogClassName="modal-max-height"
      >
        <Modal.Body>
          <h6 style={{ textAlign: "center" }}>{categoria.toUpperCase()}</h6>
          <Carousel
            interval={null}
            indicators={false}
            activeIndex={currentImageIndex}
            onSelect={(selectedIndex) => setCurrentImageIndex(selectedIndex)}
            className="carousel"
          >
            {imagenes.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={url}
                  alt={`Imagen ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};
