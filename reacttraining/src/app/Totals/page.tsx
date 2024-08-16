"use client";


import {TotalsContext} from "@/app/store/store";
import {useContext} from "react";

export default function Totals() {

    let { total } = useContext(TotalsContext);
    
    return (
        <>
            Totals Page<br/>
            {total}
        </>
    );
}
