import * as React from "react";

type Vector6Props = {
    width: number;
    height: number;
};

const Vector6 = ({width, height}: Vector6Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 273 714"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.496 75.413C28.088-9.754-81.004-5.773-128 6.864v701.078c54.212 12.464 190.728 14.022 303.094-79.455 140.459-116.847 91.879-298.088 80.79-387.93-11.089-89.842-91.879-58.683-167.388-165.143z"
        fill="#5A948B"
        fillOpacity={0.13}
      />
    </svg>
  );
};

Vector6.defaultProps = {
    width: 273,
    height: 714,
}

export default Vector6;