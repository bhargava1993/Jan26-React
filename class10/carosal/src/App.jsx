import { useState } from 'react'
import './App.css'
import Carosal from './components/Carousal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Carosal />
    </>
  )
}

export default App
