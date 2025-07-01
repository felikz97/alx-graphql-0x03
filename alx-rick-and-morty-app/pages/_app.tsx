import React from "react";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import Layout from "@/pages//layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
