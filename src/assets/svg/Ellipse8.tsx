import * as React from "react";

type Ellipse8Props = {
    width: number;
    height: number;
};

const Ellipse8 = ({width, height}: Ellipse8Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={20} cy={20} r={20} fill="#5A948B" fillOpacity={0.56} />
    </svg>
  );
};

Ellipse8.defaultProps = {
    width: 40,
    height: 40,
};

export default Ellipse8;