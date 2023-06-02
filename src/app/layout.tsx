'use client'
import './globals.css'
import {Inter} from 'next/font/google'
import {Footer} from "@/components/footer";
import {NavBar} from "@/components/nav-bar";
import {SessionProvider} from "next-auth/react";


const inter = Inter({subsets: ['latin']})


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={"dark"}>
        <body className={inter.className}>
        <SessionProvider>
            <NavBar/>
            {children}
            <Footer/>
        </SessionProvider>
        </body>
        </html>
    )
}
