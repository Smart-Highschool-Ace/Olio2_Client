import * as React from "react";

type Ellipse9Props = {
    width: number;
    height: number;
};

const Ellipse9 = ({width, height}: Ellipse9Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={10} cy={10} r={10} fill="#68A299" fillOpacity={0.44} />
    </svg>
  );
};

Ellipse9.defaultProps = {
    width: 20,
    height: 20,
};

export default Ellipse9;