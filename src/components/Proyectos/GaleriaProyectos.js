import { useState, useEffect } from "react";
import { storage } from "../Firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const GaleriaProyectos = ({ categoria }) => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const storageRef = ref(storage, categoria);
    listAll(storageRef)
      .then((res) => {
        const imageURLs = res.items.map((item) => getDownloadURL(item));
        return Promise.all(imageURLs);
      })
      .then((urls) => {
        setImagenes(urls);
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
      });
  }, [categoria]);

  return (
    <div className="row m-5">
      {imagenes.map((url, index) => (
        <div key={`image-${index}`} className="col-lg-4 mb-1">
          <img
            className="w-100 mb-4 rounded"
            src={url}
            alt={`Imagen ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
