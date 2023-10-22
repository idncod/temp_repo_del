import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="./favicon_36x36.png"
          rel="icon"
          />
      </Head>
      <body className="font-ubuntu">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}