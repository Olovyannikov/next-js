import "@/styles";
import React from "react";
import Head from "next/head";
import type {AppProps} from 'next/app'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>Next JS App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
