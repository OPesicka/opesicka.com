import styled from "styled-components";
import { Title } from "./title";

export const Footer = () => {
  return (
    <SFooter>
      <Title>Goodbye</Title>
    </SFooter>
  );
};

const SFooter = styled.footer`
  padding: 24px;
`;
