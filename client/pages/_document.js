import Document, { Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";
import React from "react";

class MyDocument extends Document{
    render(){
        const currentLocale =
            this.props.__NEXT_DATA__.query.locale ||
            i18nextConfig.i18n.defaultLocale;

        return(
            <Html lang={currentLocale}>
                <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="bg-[#f5f5f5]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument