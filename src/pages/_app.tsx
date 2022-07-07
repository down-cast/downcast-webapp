import "../styles/global/globals.scss";
import type {AppProps} from "next/app";
import {Layout} from "../components/Layout.component";

function DowncastApp({Component, pageProps}: AppProps) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default DowncastApp;
