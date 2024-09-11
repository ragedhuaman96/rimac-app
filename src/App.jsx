import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import family from './assets/Familiy.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={family} />
    </>
  )
}

export default App
