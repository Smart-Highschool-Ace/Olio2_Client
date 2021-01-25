import * as React from "react";

type Union2Props = {
    width: number;
    height: number;
};

const Union2 = ({width, height}: Union2Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.4 0a5 5 0 00-5 5v17.4H5a5 5 0 00-5 5v15.2a5 5 0 005 5h17.4V65a5 5 0 005 5h15.2a5 5 0 005-5V47.6H65a5 5 0 005-5V27.4a5 5 0 00-5-5H47.6V5a5 5 0 00-5-5H27.4z"
        fill="#D5EACE"
        fillOpacity={0.54}
      />
    </svg>
  )
}

Union2.defaultProps = {
    width: 70,
    height: 70,
};

export default Union2;