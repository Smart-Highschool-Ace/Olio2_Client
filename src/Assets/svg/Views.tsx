import * as React from "react";

function Views() {
  return (
    <svg
      width={15}
      height={11}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 3.455A2.047 2.047 0 005.455 5.5c0 1.128.917 2.045 2.045 2.045A2.047 2.047 0 009.546 5.5 2.047 2.047 0 007.5 3.455z"
        fill="#C4C4C4"
      />
      <path
        d="M7.5.386C4.09.386 1.18 2.506 0 5.5c1.18 2.993 4.09 5.114 7.5 5.114 3.412 0 6.32-2.12 7.5-5.114C13.82 2.507 10.912.386 7.5.386zm0 8.523a3.41 3.41 0 113.41-3.41A3.41 3.41 0 017.5 8.91z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

Views.defaultProps = {
  width: 15,
  height: 11,
};

export default Views;
