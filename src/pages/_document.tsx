import Document, {Html, Main, NextScript, Head} from "next/document";

class DowncastDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="material-theme">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default DowncastDocument;
