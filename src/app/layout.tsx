import './globals.css'
import {Inter} from 'next/font/google'
import {Footer} from "@/components/footer";
import {NavBar} from "@/components/nav-bar";

const inter = Inter({subsets: ['latin']})


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={"dark"}>
        <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
