"use client";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import "@/app/components/NavBarComponent/NavBar.css";

export default function (){
    const currentPath = usePathname();
    return (
        <>
            <nav>
                <Link href="/" className={currentPath === "/" ? "link active" : "link"} >Home</Link>
                <Link href="/Totals"  className={currentPath === "/Totals" ? "link active" : "link"}>Totals</Link>
            </nav>
        </>
    );
}