import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/termisur-logo.png";
import { Grid1x2, ListUl, Share } from "react-bootstrap-icons";
import Offcanvas from "react-bootstrap/Offcanvas";

export const NavbarTop = ({ handleClickScroll }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
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
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleClickScroll("seccion-clientes")}
            >
              Clientes
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleClickScroll("seccion-nosotros")}
            >
              Quienes Somos
            </Nav.Link>

            <Nav.Link
              href="#"
              className="mx-3 hover-underline-animation fs-6"
              onClick={() => handleClickScroll("seccion-contacto")}
            >
              Contáctenos
            </Nav.Link>
            <Nav.Link href="#" className="mx-3 hover-underline-animation fs-6">
              <Share />
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleShow()}
              className="mx-3 hover-underline-animation fs-6"
            >
              <Grid1x2 />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Aside</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum{" "}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
