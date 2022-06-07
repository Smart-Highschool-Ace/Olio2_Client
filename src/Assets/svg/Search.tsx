import * as React from "react";

function Search() {
  return (
    <svg
      width={17}
      height={21}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={7} cy={7} r={6.5} stroke="#989898" />
      <path stroke="#989898" d="M10.395 12.693l6.139 7.894" />
    </svg>
  );
}

Search.defaultProps = {
  width: 17,
  height: 21,
};

export default Search;
