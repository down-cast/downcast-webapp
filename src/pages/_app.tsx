import "../styles/global/globals.scss";
import type { AppProps } from "next/app";

function DowncastApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default DowncastApp;
