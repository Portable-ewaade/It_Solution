import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>
    </Html>
  );
}
