
import '../styles/sass/globals.css'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { SSRProvider } from "@react-aria/ssr";

function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
