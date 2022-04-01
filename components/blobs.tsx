import styled, { css } from "styled-components";
import { breakpoint } from "../theme/theme";

export const Blobs = () => {
  return (
    <Container>
      <PurpleBlob />
      <RedBlob />
      <BlueBlob />
      <OrangeBlog />
    </Container>
  );
};

const Container = styled.div`
  filter: saturate(1.2) blur(50px);
  width: 960px;
  height: 440px;
  //border: 1px solid white;
  position: relative;
  ${breakpoint(
    "mobile",
    "down",
    css`
      width: 480px;
      height: 320px;
    `
  )}
`;

const RedBlob = styled.div`
  background: #d43e3c;
  height: 85%;
  width: 65%;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;

  animation-name: red;
  animation-duration: 18s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.47, 0.36, 0.73, 0.64);

  @keyframes red {
    0% {
      left: 0%;
      top: 0%;
      transform: rotate(0deg);
    }

    55% {
      left: 6%;
      top: 20%;
      transform: rotate(-10deg);
    }

    70% {
      left: 2%;
      top: 10%;
      transform: rotate(-5deg);
    }

    100% {
      left: 0%;
      top: 0%;
      transform: rotate(0deg);
    }
  }
`;

const OrangeBlog = styled.div`
  background: #f88f14;
  height: 55%;
  width: 35%;
  border-radius: 100%;
  position: absolute;
  opacity: 0.6;

  animation-name: orange;
  animation-duration: 16s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.47, 0.36, 0.73, 0.64);

  @keyframes orange {
    0% {
      left: 10%;
      top: 10%;
      transform: rotate(0deg);
    }

    45% {
      left: 40%;
      top: 5%;
      transform: rotate(0deg);
    }

    60% {
      left: 30%;
      top: 20%;
      transform: rotate(0deg);
    }

    100% {
      left: 10%;
      top: 10%;
      transform: rotate(0deg);
    }
  }
`;

const PurpleBlob = styled.div`
  background: #9461f4;
  height: 100%;
  width: 50%;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;

  animation-name: purple;
  animation-duration: 24s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.47, 0.36, 0.73, 0.64);

  @keyframes purple {
    0% {
      left: 40%;
      top: -10%;
      transform: rotate(45deg);
    }
    25% {
      left: 60%;
      top: 0%;
      transform: rotate(60deg);
    }
    50% {
      left: 50%;
      top: 20%;
      transform: rotate(70deg);
    }
    75% {
      left: 40%;
      top: 10%;
      transform: rotate(55deg);
    }
    100% {
      left: 40%;
      top: -10%;
      transform: rotate(45deg);
    }
  }
`;

const BlueBlob = styled.div`
  background: #234bfb;
  height: 60%;
  width: 40%;
  border-radius: 100%;
  opacity: 0.5;

  position: absolute;
  animation-name: blue;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.47, 0.36, 0.73, 0.64);

  @keyframes blue {
    0% {
      left: 60%;
      top: 50%;
      transform: rotate(0deg);
    }

    50% {
      left: 50%;
      top: 30%;
      transform: rotate(0deg);
    }

    80% {
      left: 60%;
      top: 40%;
      transform: rotate(0deg);
    }

    100% {
      left: 60%;
      top: 50%;
      transform: rotate(0deg);
    }
  }
`;
