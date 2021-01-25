import * as React from "react";

type Polygon1Props = {
    width: number;
    height: number;
};

const Polygon1 = ({width, height}: Polygon1Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.902 1.5c1.155-2 4.041-2 5.196 0l14.29 24.75c1.154 2-.29 4.5-2.599 4.5H3.211c-2.31 0-3.753-2.5-2.598-4.5L14.902 1.5z"
        fill="#5A948B"
        fillOpacity={0.16}
      />
    </svg>
  );
};

Polygon1.defaultProps = {
    width: 35,
    height: 31,
};

export default Polygon1;