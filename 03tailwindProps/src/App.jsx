import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl mb-3'>Welcome Singh Rajput</h1>
      <Card userName ="Algolia" />
      <Card userName ='Hitesh' />
      <Card userName ='Singh' />
    </>
  )
}

export default App
