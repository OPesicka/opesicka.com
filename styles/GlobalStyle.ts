import { createGlobalStyle } from "styled-components";
import { color } from "../theme/theme";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${color("neutral.900")};
        overflow-x: hidden;
        margin: 0;
    }
`;
