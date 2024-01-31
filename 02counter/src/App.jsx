import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <p>Manish Singh</p>
      <h2>Counter Value : {count}</h2>
      <button onClick={()=> count >=20 ? 20 : setCount(count+1)}>Add Value</button>
      <br/>
      <button onClick={()=> count <=0 ? 0 : setCount(count-1)}>Remove Value</button>
    </>
  )
}

export default App
