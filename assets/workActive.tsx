import * as React from "react";
import { SVGProps } from "react";

const ActiveWorkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M5.073 4.144a1.178 1.178 0 0 1 0-1.654l2.1-2.1a1.163 1.163 0 0 1 1.654 0l2.1 2.1a1.178 1.178 0 0 1 0 1.654l-2.1 2.1a1.164 1.164 0 0 1-1.654 0l-2.1-2.1Zm10.537 3.03-2.1-2.1a1.164 1.164 0 0 0-1.654 0l-2.1 2.1a1.178 1.178 0 0 0 0 1.653l2.1 2.1a1.164 1.164 0 0 0 1.654 0l2.1-2.1a1.178 1.178 0 0 0 0-1.654Zm-9.366 0-2.1-2.1a1.163 1.163 0 0 0-1.654 0l-2.1 2.1a1.178 1.178 0 0 0 0 1.653l2.1 2.1a1.163 1.163 0 0 0 1.654 0l2.1-2.1a1.178 1.178 0 0 0 0-1.654Zm2.583 2.582a1.163 1.163 0 0 0-1.654 0l-2.1 2.1a1.178 1.178 0 0 0 0 1.654l2.1 2.1a1.163 1.163 0 0 0 1.654 0l2.1-2.1a1.178 1.178 0 0 0 0-1.654l-2.1-2.1Z"
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

export default ActiveWorkIcon;
