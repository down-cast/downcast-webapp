import "../styles/global/globals.scss";
import type {AppProps} from "next/app";
import {Page} from "../utils/PageWithLayout";
import {Fragment} from "react";

type Props = AppProps & {
    Component: Page
}

function DowncastApp({Component, pageProps}: Props) {
    const Layout = Component.layout ?? Fragment
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default DowncastApp;
