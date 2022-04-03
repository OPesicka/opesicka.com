import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo
        title="Ondřej Pešička"
        description="Ondřej Pešička is a professional product designer based in Prague, Czechia"
        openGraph={{
          type: "website",
          title: "Ondřej Pešička",
          url: "https://opesicka.com/",
          description:
            "Ondřej Pešička is a professional product designer based in Prague, Czechia",
          images: [{ url: "https://opesicka.com/og.png" }],
        }}
        twitter={{ cardType: "summary_large_image", handle: "@opesicka" }}
        additionalMetaTags={[
          { name: "author", content: "Ondřej Pešička" },
          {
            name: "keywords",
            content: "product desgin, ux, ui, design, digital design, startups",
          },
        ]}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
