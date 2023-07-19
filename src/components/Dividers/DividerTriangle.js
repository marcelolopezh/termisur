export const DividerTriangle = () => {
  return (
    <svg
      id=""
      preserveAspectRatio="xMidYMax meet"
      className="svg-separator sep12"
      viewBox="0 0 1600 200"
      data-height="200"
      style={{ display: "block" }}
    >
      <polygon
        className=""
        points="-4,24 800,198 1604,24 1604,204 -4,204 "
        style={{ fill: "rgb(255, 255, 255)" }}
      ></polygon>
      <polygon
        className=""
        points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "
        style={{ opacity: 1, fill: "rgb(149, 165, 166)" }}
      ></polygon>
      <polygon
        className=""
        points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "
        style={{ opacity: 1, fill: "rgb(210, 215, 211)" }}
      ></polygon>
    </svg>
  );
};
