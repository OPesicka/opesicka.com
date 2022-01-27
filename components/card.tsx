import { FC } from "react";
import styled from "styled-components";

export const Card: FC = (props) => {
  return <SCard>{props.children}</SCard>;
};

const SCard = styled.div`
  padding: 24px;
  border: 1px solid lightgray;
  border-radius: 12px;
  transition: all ease-in 80ms;
  :hover {
    background: #f5f5f5;
    box-shadow: 0px 0.4px 0.5px rgba(0, 0, 0, 0.024),
      0px 1px 1.5px rgba(0, 0, 0, 0.035), 0px 2.4px 3.6px rgba(0, 0, 0, 0.046),
      0px 8px 12px rgba(0, 0, 0, 0.07);
  }
`;
