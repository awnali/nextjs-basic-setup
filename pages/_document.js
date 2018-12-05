import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // console.log(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My next js app</title>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link rel="stylesheet" href="/static/app.css" />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <script
            async
            src="https://cloud.lunchon.ae/static/js/checkoutkit.js"
            type="fe1fad23251442968d412d9a-text/javascript"
          />
        </body>
      </html>
    );
  }
}
