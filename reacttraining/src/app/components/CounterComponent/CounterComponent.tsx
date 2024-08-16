"use client";
import {useContext, useEffect, useState} from "react";
import {TotalsContext} from "@/app/store/store";
import {usePrevious} from "@uidotdev/usehooks";

// @ts-ignore

export default function CounterComponent({initialCount, countChanged}) {

    let [count, setCount] = useState(0);

    const prevCount = usePrevious(count);

    const [letter, setLetter] = useState("");

    let totalState = useContext(TotalsContext);
    
    function Reset() {
        setCount(0);
    }

    useEffect(() => {
        totalState.setTotal(0);
        setCount(initialCount);
    }, []);

    useEffect(() => {
        getLetter();
        if (prevCount != null) {
            totalState.incrementBy(count - (prevCount || 0));
        }
        countChanged(count);
    }, [count]);

    function getLetter() {
        let ordA = 'a'.charCodeAt(0);
        let ordZ = 'z'.charCodeAt(0);
        let len = ordZ - ordA + 1;

        let s = "";
        let n = count - 1;
        while (n >= 0) {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
        }
        setLetter(s);
    }


    return (
        <div>
            Count is : {count}
            <br/>
            <input type="number" value={count} onChange={(event) => setCount(Number.parseInt(event.target.value))}/>
            <button onClick={Reset}>Reset</button>
            <br/>
            Letter is : {letter}
            <br/>
            Total is : {totalState.total}
            <br/><br/>
        </div>
    );
}
