import Link from "next/link";
import styled from "styled-components";
import { Title } from "./title";

export const Header = () => {
  return (
    <SHeader>
      <Title>Welcome</Title>
      <SDiv>
        <ul>
          <li>
            <Link href="">Dribble</Link>
          </li>
          <li>
            <Link href="">LinkedIn</Link>
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
