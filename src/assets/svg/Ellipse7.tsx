import * as React from "react";

type Ellipse7Props = {
    width: number;
    height: number;
};

const Ellipse7 = ({width, height}: Ellipse7Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={25} cy={25} r={25} fill="#fff" />
      <circle
        cx={25}
        cy={25}
        r={19}
        stroke="#5A948B"
        strokeOpacity={0.25}
        strokeWidth={12}
      />
    </svg>
  );
};

Ellipse7.defaultProps = {
    width: 50,
    height: 50,
};

export default Ellipse7;