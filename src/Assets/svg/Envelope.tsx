import * as React from "react";

function Envelope() {
  return (
    <svg
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="#5A948B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 15h60v42H6z"
      />
      <path d="M6 15l30 27 30-27M6 57l21-24" stroke="#5A948B" />
      <path clipRule="evenodd" d="M66 57L45 33l21 24z" stroke="#5A948B" />
    </svg>
  );
}

export default Envelope;
