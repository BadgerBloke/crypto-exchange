import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
// import * as gtag from "@components/lib/gtag";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="application-name" content="Vidura" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <meta
                        name="apple-mobile-web-app-title"
                        content="Vidura"
                    />
                    <meta
                        name="description"
                        content="Low fees, Secure, and Fastest crypto exchange platform"
                    />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="theme-color" content="#0f0e13" />

                    <link
                        rel="apple-touch-icon"
                        sizes="192x192"
                        href="/icons/apple-touch-icon.png"
                    />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href="/favicon.ico"
                    />
                    <link rel="manifest" href="/manifest.json" />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {/* <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <script
                        id="gaTagKey"
                        async
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                        }}
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
