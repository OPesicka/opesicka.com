import * as React from "react";
import { SVGProps } from "react";

const WorkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.823 13.133a.25.25 0 0 0 .354 0l4.956-4.956a.25.25 0 0 0 0-.354L8.177 2.867a.25.25 0 0 0-.354 0L2.867 7.823a.25.25 0 0 0 0 .354l4.956 4.956ZM.376 7.203 7.202.375a1.136 1.136 0 0 1 1.595 0l6.826 6.826a1.137 1.137 0 0 1 0 1.595l-6.826 6.826a1.121 1.121 0 0 1-1.595 0L.376 8.797a1.136 1.136 0 0 1 0-1.595Z"
        fill="#787484"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#787484" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default WorkIcon;
