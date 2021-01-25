import * as React from "react";

type Polygon2Props = {
    width: number;
    height: number;
};

const Polygon2 = ({width, height}: Polygon2Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.886 38.74a1 1 0 01-1.047 1.38L7.47 35.774a1 1 0 01-.67-1.596L27.745 6.587a1 1 0 011.718.218L42.886 38.74z"
        stroke="#D5EACE"
        strokeWidth={8}
      />
    </svg>
  );
};

Polygon2.defaultProps = {
    width: 60,
    height: 60,
};

export default Polygon2;