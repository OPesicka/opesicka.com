import * as React from 'react'
import { type SVGProps } from 'react'

export const RbndIllustration: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={187}
    height={120}
    fill="none"
    {...props}
    viewBox="0 0 187 120"
  >
    <g clipPath="url(#rbnda)">
      <circle cx={93.5} cy={60} r={19} fill="url(#rbndb)" />
      <circle
        cx={93.5}
        cy={60}
        r={28.482}
        stroke="url(#rbndc)"
        strokeWidth={1.036}
        opacity={0.5}
      />
      <circle
        cx={93.5}
        cy={60}
        r={31.429}
        stroke="url(#rbndd)"
        strokeWidth={1.143}
        opacity={0.5}
        transform="rotate(135 93.5 60)"
      />
      <circle
        cx={93.5}
        cy={60}
        r={42.982}
        stroke="url(#rbnde)"
        strokeWidth={1.036}
        opacity={0.5}
        transform="rotate(90 93.5 60)"
      />
      <circle
        cx={93.5}
        cy={60}
        r={64.482}
        stroke="url(#rbndf)"
        strokeWidth={1.036}
        opacity={0.5}
        transform="rotate(-60 93.5 60)"
      />
      <circle
        cx={93.5}
        cy={59}
        r={97.982}
        stroke="url(#rbndg)"
        strokeWidth={1.036}
        opacity={0.5}
        transform="rotate(105 93.5 59)"
      />
    </g>
    <defs>
      <linearGradient
        id="rbndb"
        x1={112.5}
        x2={74.5}
        y1={41}
        y2={79}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="rbndc"
        x1={122.5}
        x2={64.5}
        y1={31}
        y2={89}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="rbndd"
        x1={125.5}
        x2={61.5}
        y1={28}
        y2={92}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="rbnde"
        x1={137}
        x2={50}
        y1={16.5}
        y2={103.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="rbndf"
        x1={158.5}
        x2={28.5}
        y1={-5}
        y2={125}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="rbndg"
        x1={192}
        x2={-5}
        y1={-39.5}
        y2={157.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration)"
          stopOpacity={0}
        />
      </linearGradient>
      <clipPath id="rbnda">
        <path fill="var(--color-neutral-illustration)" d="M0 0h187v120H0z" />
      </clipPath>
    </defs>
  </svg>
)
