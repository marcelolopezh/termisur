import { useState, useEffect } from "react";
import { storage } from "../Firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { Spinner } from "react-bootstrap";
import "./style.css";
import ImageGallery from "react-image-gallery";
import "./galleryStyle.scss";

export const GaleriaProyectos = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingImgs, setLodingImgs] = useState(true);
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    setLoading(true);

    if (categoria === null || categoria === undefined) {
      setLoading(false);
    }
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

  useEffect(() => {
    if (imagenes.length > 0) {
      normalizeImgs(imagenes);
    }
  }, [imagenes]);

  const normalizeImgs = (imgs) => {
    setImagesArray([]);
    imgs.forEach((img) => {
      setImagesArray((image) => [
        ...image,
        {
          original: img,
          thumbnail: img,
        },
      ]);
    });
    setLodingImgs(false);
  };

  return (
    <div>
      <div>
        {loading && loadingImgs ? (
          <Spinner animation="border" role="status" className="m-auto">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        ) : (
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ImageGallery items={imagesArray} thumbnailPosition="top" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
