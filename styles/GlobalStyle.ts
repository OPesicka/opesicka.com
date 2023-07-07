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

.light-mode {
  background-color: ${color("neutral.50")};
  color-scheme: "light";

  
  body {
    --color-neutral-text: ${color("neutral.900")};
    --color-neutral-text-subtle: ${color("neutral.700")};
    --color-neutral-background: ${color("neutral.0")};
    --color-neutral-background-subtle: ${color("neutral.50")};
    --color-neutral-border: ${color("neutral.150")};
    --color-neutral-hover: ${color("neutral.0")};
    --color-neutral-illustration: ${color("neutral.600")};
    --color-neutral-illustration-subtle: ${color("neutral.500")};
    --color-primary-text: ${color("primary.600")};

    --shadow-l1: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.15);

    :before {
      opacity: 0.05;
    }
  }
}
.dark-mode {
  background-color: ${color("neutral.900")};
  color-scheme: "dark";

  
  body {
    --color-neutral-text: ${color("neutral.100")};
    --color-neutral-text-subtle: ${color("neutral.200")};
    --color-neutral-background: ${color("neutral.900")};
    --color-neutral-background-subtle: ${color("neutral.800")};
    --color-neutral-border: ${color("neutral.700")};
    --color-neutral-hover: ${color("neutral.750")};
    --color-neutral-illustration: ${color("neutral.0")};
    --color-neutral-illustration-subtle: ${color("neutral.50")};
    --color-primary-text: ${color("primary.400")};

    --shadow-l1: 0px 1px 3px rgba(0, 0, 0, 0.9), 0px 0px 1px rgba(0, 0, 0, 1);

    :before {
      opacity: 0.25;
    }
  }
}

body {
  /* background-color: ${color("neutral.900")}; */
  overflow-x: hidden;
  margin: 0;
  :before {
    background-image: url(/noise.png);
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* opacity: 0.25; */
  }
}

`;
