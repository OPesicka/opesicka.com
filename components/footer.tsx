import styled from "styled-components";
import { Text } from "../theme/theme";
import { Title } from "./title";

export const Footer = () => {
  return (
    <>
      <Text variant="h2">Want to get in touch?</Text>
      <Text variant="text">
        I’m always open to new adventures and interesting projects.
      </Text>
      <Text variant="footnote">hello@opesicka.com</Text>
      <ul>
        <li>
          <a href="">Linkedin</a>
        </li>
        <li>
          <a href="">Behance</a>
        </li>
        <li>
          <a href="">Dribbble</a>
        </li>
      </ul>
    </>
  );
};
