import React from "react";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";



function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default App;
