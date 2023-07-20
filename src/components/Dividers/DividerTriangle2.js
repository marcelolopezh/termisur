export const DividerTriangle2 = () => {
  return (
    <svg
      id=""
      className="svg-separator sep12"
      viewBox="0 0 1600 200"
      data-height="200"
      style={{ display: "block", marginTop: "-3rem" }}
    >
      <polygon
        className=""
        points="0,320 720,0 1440,320"
        style={{ fill: "rgb(255, 255, 255)" }}
      ></polygon>
      <polygon
        className=""
        points="-4,0 800,198 1604,0 1604,11.833 -400,198 -4,12 "
        style={{ opacity: 1, fill: "rgb(255, 126, 43)" }}
      ></polygon>
      <polygon
        className=""
        points="-4,12 -900,24 800,198 20,24 1000,11.833 800,198 "
        style={{ opacity: 0.1, fill: "rgb(255, 165, 0)" }}
      ></polygon>
    </svg>
  );
};
