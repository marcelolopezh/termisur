import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { GaleriaProyectos } from "./GaleriaProyectos";
import { getListadoCarpeta } from "../Firebase/config";

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    getListadoCarpeta("").then((resp) => {
      resp.prefixes.forEach((item) => {
        setProyectos((prevProyectos) => [
          ...prevProyectos,
          item._location.path_,
        ]);
      });
    });
  }, []);

  const handleTabClick = (eventKey) => {
    setActiveCategory(eventKey);
  };

  return (
    <div className="container-fluid containerProyectos">
      <h2>Nuestros Proyectos</h2>

      <Nav
        fill
        variant="tabs"
        activeKey={activeCategory}
        onSelect={handleTabClick}
        className="tabProyectos"
      >
        {proyectos.map((element) => (
          <Nav.Item key={element} className="tabProyectos">
            <Nav.Link eventKey={element} className="tabProyectos">
              {element}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="proyecto-info"></div>
      <GaleriaProyectos categoria={activeCategory} />
    </div>
  );
};
