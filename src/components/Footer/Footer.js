import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#ff7e2b" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="">
          <p className="d-flex justify-content-center align-items-center"></p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        © 2023 Copyright
        <a
          className="text-white"
          style={{ marginLeft: ".4rem" }}
          href="https://termisur.cl/"
        >
          www.termisur.cl
        </a>
      </div>
    </MDBFooter>
  );
};
