import * as React from "react";

function SvgComponent() {
  return (
    <svg
      width={45}
      height={45}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M15 13.125l1.387-2.08a3.75 3.75 0 013.12-1.67h5.986a3.75 3.75 0 013.12 1.67L30 13.125h9.375V33.75H5.625V13.125H15z"
        stroke="#828282"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M22.5 28.125a5.625 5.625 0 100-11.25 5.625 5.625 0 000 11.25z"
        stroke="#828282"
        strokeWidth={3}
      />
    </svg>
  );
}

export default SvgComponent;
