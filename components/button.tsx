import { FC } from "react";
import styled from "styled-components";

export const Button: FC = (props) => {
  return <SButton>{props.children}</SButton>;
};

const SButton = styled.button`
  background: blueviolet;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: ease-in 80ms;
  cursor: pointer;

  :hover {
    opacity: 60%;
  }
`;
