import * as React from "react"

type Ellipse10Props = {
    width: number;
    height: number;
};

const Ellipse10 = ({width, height}: Ellipse10Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={5} cy={5} r={5} fill="#68A299" fillOpacity={0.37} />
    </svg>
  );
};

Ellipse10.defaultProps = {
    width: 10,
    height: 10,
};

export default Ellipse10;