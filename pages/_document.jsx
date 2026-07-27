import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sreeja Vaddi — Full Stack Developer</title>
        <meta name="theme-color" content="#151515" />
        <meta
          name="description"
          content="Sreeja Vaddi is a full stack developer building scalable products across healthcare, fintech, SaaS, and construction."
        />
        <meta property="og:title" content="Sreeja Vaddi — Full Stack Developer" />
        <meta
          property="og:description"
          content="Full-stack products with clear interfaces, reliable systems, and measurable outcomes."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2318201c'/%3E%3Ctext x='50%25' y='54%25' text-anchor='middle' font-family='Georgia, serif' font-size='30' fill='%239fd0bd'%3ESV%3C/text%3E%3C/svg%3E"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
