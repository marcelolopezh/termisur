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
        setProyectos((prevProyectos) => [...prevProyectos, item._location.path_]);
      });
    });
  }, []);

  const handleTabClick = (eventKey) => {
    console.log(eventKey)
    setActiveCategory(eventKey);
  };

  return (
    <div className="container">
      <h2>Nuetros Proyectos</h2>

      <Nav
        fill
        variant="tabs"
        activeKey={activeCategory}
        onSelect={handleTabClick}
      >
        {proyectos.map((element) => (
          <Nav.Item key={element}>
            <Nav.Link eventKey={element}>{element}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="proyecto-info"></div>
      <GaleriaProyectos categoria={activeCategory} />
    </div>
  );
};
