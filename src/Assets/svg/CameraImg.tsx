import * as React from "react";

function CameraImg() {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M10 8.75l.925-1.387a2.5 2.5 0 012.08-1.113h3.99a2.5 2.5 0 012.08 1.113L20 8.75h6.25V22.5H3.75V8.75H10z"
        stroke="#828282"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M15 18.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        stroke="#828282"
        strokeWidth={2}
      />
    </svg>
  );
}

export default CameraImg;
