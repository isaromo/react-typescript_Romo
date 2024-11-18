import { useState } from "react"

const ComponentCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  
  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  }

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  }

  return (
    <div>
      <h2> Valor del counter: {counter}</h2>

      <button onClick={incrementCounter} >Incrementar</button>
      <button onClick={decrementCounter} >Decrementar</button>

    </div>
  )
}

export default ComponentCounter