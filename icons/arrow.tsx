import * as React from "react";
import { SVGProps } from "react";
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#938EA1"
      fillRule="evenodd"
      d="M10.707 2.293a1 1 0 0 0-1.414 1.414L12.586 7H1a1 1 0 0 0 0 2h11.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l4.999-4.999A.997.997 0 0 0 16 8.003v-.006a.996.996 0 0 0-.293-.704l-5-5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Arrow;
