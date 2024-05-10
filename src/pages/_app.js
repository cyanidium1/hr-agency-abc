// "use client";
import '../app/globals.css'
import '../app/gradientbg.css'

import { Jost } from '@next/font/google'

import '../components/loader.css'

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const jost = Jost(
    {
        subsets: ['latin', 'cyrillic'],
        weight: ['400', '700']
    }
)

function MyApp({ Component, pageProps }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark" className={jost.className}>
                <Component {...pageProps} />
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export default MyApp;