"use client";

import {createContext, useState} from 'react';

const TotalsContext = createContext({
    total : 0,
    setTotal : (total : number) => {},
    incrementBy : (increment : number) => {}
});

// @ts-ignore
function TotalsApp({children}) {
    
    let newTotal = 0;
    
    const setTotal = (total: number) => {
        newTotal = total;
        setState({...state, total: newTotal})
    }
    const incrementBy = (increment : number) => {
        newTotal+=increment;
        setState({...state, total: newTotal})
    }

    const initState = {
        total: 0,
        setTotal: setTotal,
        incrementBy: incrementBy
    }
    
    const [state, setState] = useState(initState);

    
    return (
        <TotalsContext.Provider value={state}>
                  {children}
        </TotalsContext.Provider>
    );
}

export {TotalsApp,TotalsContext};