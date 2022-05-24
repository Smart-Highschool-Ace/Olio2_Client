import * as React from "react";

function ProfileCamera() {
  return (
    <svg
      width={33}
      height={33}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        clipRule="evenodd"
        d="M11 9.625L12.017 8.1a2.75 2.75 0 012.288-1.225h4.39c.92 0 1.778.46 2.288 1.225L22 9.625h6.875V24.75H4.125V9.625H11z"
        stroke="#828282"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M16.5 20.625a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25z"
        stroke="#828282"
        strokeWidth={2}
      />
    </svg>
  );
}

export default ProfileCamera;
