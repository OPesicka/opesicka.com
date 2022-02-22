import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  variant: FontVariant;
  as?: string | React.ComponentType<unknown>;
  children: ReactNode;
};

export const Text = (props: Props) => {
  return (
    <SText variant={props.variant} as={props.as}>
      {props.children}
    </SText>
  );
};

type FontVariant =
  | "h1"
  | "h2"
  | "h3"
  | "text"
  | "textStrong"
  | "footnote"
  | "footnoteStrong";

const fontDefinition: Record<
  FontVariant,
  { fontSize: number; lineHeight: number; weight: number }
> = {
  h1: {
    fontSize: 48,
    lineHeight: 64,
    weight: 700,
  },
  h2: {
    fontSize: 32,
    lineHeight: 40,
    weight: 700,
  },
  h3: {
    fontSize: 24,
    lineHeight: 36,
    weight: 700,
  },
  text: {
    fontSize: 20,
    lineHeight: 32,
    weight: 400,
  },
  textStrong: {
    fontSize: 20,
    lineHeight: 32,
    weight: 700,
  },
  footnote: {
    fontSize: 16,
    lineHeight: 24,
    weight: 400,
  },
  footnoteStrong: {
    fontSize: 16,
    lineHeight: 24,
    weight: 700,
  },
};

const SText = styled.p<Props>`
  margin: 8px 0px 16px 0px;

  ${(props) => {
    return text(props.variant);
  }}
`;

export const text = (variant: FontVariant) => {
  const definition = fontDefinition[variant];
  return css`
    font-size: ${definition.fontSize}px;
    line-height: ${definition.lineHeight}px;
    font-weight: ${definition.weight};
    font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue",
      "sans-serif";
    color: #f2effb;
  `;
};

type Shadows = "l1" | "l2" | "l3";

const shadowDefinition: Record<Shadows, string> = {
  l1: "0.5px 1px 1px #000000;",
  l2: "1px 2px 2px rgba(0, 0, 0, 0.4), 2px 4px 4px rgba(0, 0, 0, 0.4), 3px 6px 6px rgba(0, 0, 0, 0.4);",
  l3: "1px 2px 2px rgba(0, 0, 0, 0.3), 2px 4px 4px rgba(0, 0, 0, 0.3), 4px 8px 8px rgba(0, 0, 0, 0.3), 8px 16px 16px rgba(0, 0, 0, 0.3), 16px 32px 32px rgba(0, 0, 0, 0.3);",
};

export const shadow = (variant: Shadows) => {
  return css`
    box-shadow: ${shadowDefinition[variant]};
  `;
};
