import "./rrss.css";
import { apiwsp } from "../../assets/constants";

export const RRSS = () => {
  return (
    <div className="floating-social-buttons">
      <a href={apiwsp} className="wsp" target="_blank" rel="noreferrer">
        <i className="fab fa-whatsapp "></i>
      </a>

      <a
        href="https://www.instagram.com/termisur/"
        className="instagram"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram "></i>
      </a>
    </div>
  );
};
