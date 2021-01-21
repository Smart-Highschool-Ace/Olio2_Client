import * as React from "react";

function ProjectImg() {
  return (
    <svg
      width={859}
      height={434}
      viewBox="0 0 859 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={859} height={434} rx={10} fill="url(#project-img)" />
      <defs>
        <pattern
          id="project-img"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#project_image"
            transform="matrix(.00033 0 0 .00066 0 -.242)"
          />
        </pattern>
        <image
          id="project_image"
          width={3000}
          height={2250}
        />
      </defs>
    </svg>
  );
}
export default ProjectImg;