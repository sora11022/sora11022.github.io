import React, { useContext } from 'react'
import { CounterContext } from './context/CounterContext'

const CounterButtons = () => {

    const { increment , decrement } = useContext(CounterContext)

  return (
    <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
    </div>
  )
}

export default CounterButtons