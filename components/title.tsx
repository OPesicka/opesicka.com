import { FC } from "react";
import styled from "styled-components";

export const Title: FC = (props) => {
  return <STitle>{props.children}</STitle>;
};

const STitle = styled.h1`
  font-weight: 800;
  margin: 0;
`;
