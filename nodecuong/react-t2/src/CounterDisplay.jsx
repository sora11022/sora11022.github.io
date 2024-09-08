import { useContext } from "react"
import { CounterContext } from "./context/CounterContext"

const CounterDisplay = () => {

    const { count } = useContext(CounterContext)

  return (
    <div>{count}</div>
  )
}

export default CounterDisplay