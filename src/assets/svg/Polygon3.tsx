import * as React from "react";

type Polygon3Props = {
    width: number;
    height: number;
};

const Polygon3 = ({width, height}: Polygon3Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.158 26.704c-1.063 1.604-3.464 1.456-4.322-.267L5.19 7.054c-.858-1.723.471-3.728 2.392-3.61l21.61 1.338c1.92.119 2.992 2.272 1.929 3.876L19.158 26.704z"
        stroke="#C6DCBF"
        strokeOpacity={0.4}
        strokeWidth={5}
      />
    </svg>
  );
};

Polygon3.defaultProps = {
    width: 35,
    height: 32,
};

export default Polygon3;