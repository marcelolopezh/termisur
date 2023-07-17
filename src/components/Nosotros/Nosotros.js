import "./nosotros.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import avatar from "../../assets/avatar.webp";

export const Nosotros = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="row">
      <h2 className="section-title">Nuestro Equipo</h2>
      <div
        className="team-member col-md-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <img
          src={avatar}
          alt="Nombre del integrante 1"
          className="team-member-image"
        />
        <h3 className="team-member-name">Nombre del integrante 1</h3>
        <p className="team-member-position">Cargo del integrante 1</p>
      </div>
      <div
        className="team-member col-md-4"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <img
          src={avatar}
          alt="Nombre del integrante 2"
          className="team-member-image"
        />
        <h3 className="team-member-name">Nombre del integrante 2</h3>
        <p className="team-member-position">Cargo del integrante 2</p>
      </div>
      <div
        className="team-member col-md-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img
          src={avatar}
          alt="Nombre del integrante 3"
          className="team-member-image"
        />
        <h3 className="team-member-name">Nombre del integrante 3</h3>
        <p className="team-member-position">Cargo del integrante 3</p>
      </div>
    </div>
  );
};
