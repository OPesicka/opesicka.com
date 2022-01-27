import { FC } from "react";
import styled, { css } from "styled-components";

type Props = {
  variant: FontVariant;
};

export const Text: FC<Props> = (props) => {
  return <SText variant={props.variant}>{props.children}</SText>;
};

type FontVariant = "body" | "title";

const fontDefinition: Record<FontVariant, { fontSize: number }> = {
  body: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
  },
};

const SText = styled.p<Props>`
  color: gray;
  font-size: 14px;
  margin: 8px 0px 16px 0px;

  ${(props) => {
    const definition = fontDefinition[props.variant];
    return css`
      font-size: ${definition.fontSize}px;
    `;
  }}
`;
