import * as React from "react";

type Union1Props = {
    width: number;
    height: number;
};

const Union1 = ({width, height}: Union1Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.423 13.043a5 5 0 00-7.066-.261l-5.716 5.308-5.307-5.716a5 5 0 00-7.067-.261l-3.224 2.994a5 5 0 00-.261 7.066l5.308 5.716-5.716 5.307a5 5 0 00-.261 7.066l2.994 3.225a5 5 0 007.066.261l5.716-5.308 5.307 5.716a5 5 0 007.066.261l3.225-2.994a5 5 0 00.261-7.066l-5.308-5.715 5.716-5.308a5 5 0 00.261-7.067l-2.994-3.224z"
        fill="#D5EACE"
        fillOpacity={0.96}
      />
    </svg>
  );
};

Union1.defaultProps = {
    width: 57,
    height: 57,
};

export default Union1;
