import { createContext, useState } from "react";

const CounterContext = createContext(); // step 1

const CounterProvider = ({children}) =>{ // Step 2

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <CounterContext.Provider value={{count, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterContext, CounterProvider} // Step 3