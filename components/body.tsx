import { FC } from "react";
import styled from "styled-components";

export const Body: FC = (props) => {
  return <SBody>{props.children}</SBody>;
};

const SBody = styled.p`
  color: gray;
  font-size: 14px;
  margin: 8px 0px 16px 0px;
`;
