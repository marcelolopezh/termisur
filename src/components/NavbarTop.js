import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/termisur-logo.png";
import { ListUl } from "react-bootstrap-icons";

export const NavbarTop = ({ handleClickScroll, handleShowModal }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
        <Navbar.Brand className="mx-5">
          <img src={Logo} width="90px" alt="..."></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <ListUl width="5vh" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <div></div>
          </Nav>
          <Nav>
            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleClickScroll("inicio")}
            >
              Inicio
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation "
              onClick={() => handleClickScroll("seccion-servicios")}
            >
              Servicios
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation "
              onClick={() => handleClickScroll("proyectos")}
            >
              Proyectos
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleClickScroll("seccion-clientes")}
            >
              Clientes
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleShowModal()}
            >
              Contáctenos
            </Nav.Link>
            <Nav.Link href="#" className="">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
