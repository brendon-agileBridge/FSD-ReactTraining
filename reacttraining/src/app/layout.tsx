import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import NavBar from "@/app/components/NavBarComponent/NavBar";

const inter = Inter({subsets: ["latin"]});
import {TotalsApp, TotalsContext} from "@/app/store/store";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body className={inter.className}>

        <NavBar></NavBar>
        <TotalsApp>{children}</TotalsApp>


        </body>
        </html>
    );
}
