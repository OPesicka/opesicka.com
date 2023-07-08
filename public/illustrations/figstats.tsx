import * as React from 'react'
import { type SVGProps } from 'react'

export const FigStatsIllustration: React.FC<SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={187}
    height={120}
    fill="none"
    {...props}
    viewBox="0 0 187 120"
  >
    <g clipPath="url(#figa)">
      <path
        fill="url(#figb)"
        d="m80.72 61.213-.204-28.43c-.015-2.031 2.52-2.969 3.83-1.416l17.119 20.278a2.171 2.171 0 0 1-.716 3.357l-16.916 8.152c-1.435.692-3.102-.347-3.114-1.94Z"
      />
      <path
        fill="url(#figc)"
        d="M80.744 61.235V32.738a2.171 2.171 0 0 1 2.531-2.14l24.031 4.04c1.731.29 2.419 2.41 1.188 3.663l-24.03 24.456c-1.362 1.386-3.72.422-3.72-1.522Z"
      />
      <path
        fill="url(#figd)"
        fillOpacity={0.06}
        d="M199 120.949 187 58l-11.625 30.549-11.625 13.885-11.625-23.143L140.5 95.954l-11.625.926-11.625 12.96-11.625-14.811L94 103.36l-11.625-5.554L70.75 109.84l-11.625-3.703L47.5 87.623l-11.625 14.811L24.25 80.217 12.625 95.03 1 58l-14 60.634V139h212v-18.051Z"
      />
      <path
        stroke="url(#fige)"
        d="M199 120.949 187 58l-11.625 30.549-11.625 13.885-11.625-23.143L140.5 95.954l-11.625.926-11.625 12.96-11.625-14.811L94 103.36l-11.625-5.554L70.75 109.84l-11.625-3.703L47.5 87.623l-11.625 14.811L24.25 80.217 12.625 95.03 1 58l-14 60.634V139h212v-18.051Z"
      />
    </g>
    <defs>
      <linearGradient
        id="figb"
        x1={103.272}
        x2={80.744}
        y1={45.575}
        y2={45.575}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.193}
          stopColor="var(--color-neutral-illustration-subtle)"
        />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration-subtle)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="figc"
        x1={115.215}
        x2={80.744}
        y1={47.814}
        y2={47.814}
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset={0.422}
          stopColor="var(--color-neutral-illustration-subtle)"
        />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration-subtle)"
          stopOpacity={0.46}
        />
      </linearGradient>
      <linearGradient
        id="figd"
        x1={89.717}
        x2={86.746}
        y1={100.07}
        y2={138.772}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--color-neutral-illustration-subtle)" />
        <stop
          offset={1}
          stopColor="var(--color-neutral-illustration-subtle)"
          stopOpacity={0}
        />
      </linearGradient>
      <linearGradient
        id="fige"
        x1={182.584}
        x2={128.095}
        y1={99.51}
        y2={195.641}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EE49C3" />
        <stop offset={1} stopColor="#926FFF" />
      </linearGradient>
      <clipPath id="figa">
        <path fill="var(--color-neutral-illustration)" d="M0 0h187v120H0z" />
      </clipPath>
    </defs>
  </svg>
)
