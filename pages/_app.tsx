import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { AppStateProvider } from "../components/AppStateProvider";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppStateProvider>
  );
}
