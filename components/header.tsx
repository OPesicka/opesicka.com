import Link from "next/link";
import styled from "styled-components";
import { Text } from "../theme/theme";
import { Title } from "./title";

export const Header = () => {
  return (
    <SHeader>
      <Text variant="h1">OPESICKA</Text>
      <SDiv>
        <ul>
          <li>
            <Link href="">Work</Link>
          </li>
          <li>
            <Link href="">Playground</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
        </ul>
      </SDiv>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: space-between;
`;

const SDiv = styled.div`
  display: flex;
  gap: 24px;
`;
