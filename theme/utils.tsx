import { css } from "styled-components";

export type MarginOptions = {
  /** All sides */
  all?: number;
  /** Left, Right */
  x?: number;
  /** Top, Down */
  y?: number;
  /** Top */
  t?: number;
  /** Right */
  r?: number;
  /** Bottom */
  b?: number;
  /** Left */
  l?: number;
};

export type PaddingOptions = {
  /** All sides */
  all?: number;
  /** Left, Right */
  x?: number;
  /** Top, Down */
  y?: number;
  /** Top */
  t?: number;
  /** Right */
  r?: number;
  /** Bottom */
  b?: number;
  /** Left */
  l?: number;
};

const px = (value?: number) => {
  if (value !== undefined) return `${value}px`;
};
const stringOrPx = (value?: number | string) =>
  typeof value === "number" ? `${px(value)}` : value;

export const margin = (m?: MarginOptions) => css`
  margin: ${stringOrPx(m?.all)};

  margin-left: ${stringOrPx(m?.x)};
  margin-right: ${stringOrPx(m?.x)};

  margin-top: ${stringOrPx(m?.y)};
  margin-bottom: ${stringOrPx(m?.y)};

  margin-left: ${stringOrPx(m?.l)};
  margin-top: ${stringOrPx(m?.t)};
  margin-right: ${stringOrPx(m?.r)};
  margin-bottom: ${stringOrPx(m?.b)};
`;

export const padding = (p?: PaddingOptions) => css`
  padding: ${px(p?.all)};

  padding-left: ${px(p?.x)};
  padding-right: ${px(p?.x)};

  padding-top: ${px(p?.y)};
  padding-bottom: ${px(p?.y)};

  padding-left: ${px(p?.l)};
  padding-top: ${px(p?.t)};
  padding-right: ${px(p?.r)};
  padding-bottom: ${px(p?.b)};
`;
