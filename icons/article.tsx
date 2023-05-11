import * as React from "react";
import { SVGProps } from "react";

const ArticleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)" fill="#787484">
      <path d="m12.665 12.14-1.54-9.21A2.4 2.4 0 0 0 8.36.96L2.005 2.024a2.4 2.4 0 0 0-1.972 2.76l1.541 9.21a2.4 2.4 0 0 0 2.763 1.972l6.357-1.062a2.4 2.4 0 0 0 1.971-2.764Zm-5.539-1.76-1.984.34a1 1 0 0 1-.32-1.973l1.984-.331a1 1 0 0 1 .33 1.97l-.01-.005Zm.67-3.926-3.607.603a.96.96 0 0 1-.16.015 1 1 0 0 1-.16-1.986l3.598-.606a1 1 0 1 1 .33 1.97v.004ZM14.371 8.394c-.04.002-.08.002-.121 0a1.201 1.201 0 0 1-1.076-1.314l.426-4.24a.4.4 0 0 0-.4-.44 1.2 1.2 0 1 1 0-2.4 2.798 2.798 0 0 1 2.786 3.078l-.423 4.236a1.202 1.202 0 0 1-1.192 1.08Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#787484" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArticleIcon;
