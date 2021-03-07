import * as React from "react";
function Result1() {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x={1.5} y={1.5} width={77} height={77} rx={8.5} fill="#DEDEDE" />
      <rect x={1.5} y={1.5} width={77} height={77} rx={8.5} fill="#DEDEDE" />
      <rect
        x={1.5}
        y={1.5}
        width={77}
        height={77}
        rx={8.5}
        fill="url(#Result1)"
      />
      <rect
        x={1.5}
        y={1.5}
        width={77}
        height={77}
        rx={8.5}
        stroke="#5A948B"
        strokeWidth={3}
      />
      <defs>
        <pattern
          id="Result1"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#Result1Img"
            transform="matrix(.00044 0 0 .00044 -.167 0)"
          />
        </pattern>
        <image
          id="Result1Img"
          width={3000}
          height={2250}
        />
      </defs>
    </svg>
  );
}
export default Result1;