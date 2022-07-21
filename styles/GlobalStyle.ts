import { createGlobalStyle } from "styled-components";
import { color } from "../theme/theme";

export const GlobalStyle = createGlobalStyle`
    @font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url("https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.19") format("woff2"), url("https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.19") format("woff")
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-Bold.woff2?v=3.19") format("woff2"),
    url("https://rsms.me/inter/font-files/Inter-Bold.woff?v=3.19") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-ExtraBold.woff2?v=3.19") format("woff2"),
    url("https://rsms.me/inter/font-files/Inter-ExtraBold.woff?v=3.19") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("https://rsms.me/inter/font-files/Inter-Black.woff2?v=3.19") format("woff2"),
    url("https://rsms.me/inter/font-files/Inter-Black.woff?v=3.19") format("woff");
}


    body {
        background-color: ${color("neutral.950")};
        overflow-x: hidden;
        margin: 0;
    }
`;
