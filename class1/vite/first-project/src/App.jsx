import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import FruitsCompnents from './components/FruitsComponent'
import LoginComponent from "./components/LoginComponent";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CountDisaplay";
function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  // const fruitsArray=["Apple","Banana","Mangole","orang","Pineapple"];
  // const laptops = ["apple","Lenovo","hp","Dell"];

  // const personDetails={
  //   name: "bhargava",
  //   salary: 10000
  // }

  // const sampleFun =()=>{
  //   return "sampleFun"
  // }

  return (
    <>

      {/* <LoginComponent status = {false}/> */}
      <h1> app.js component 1</h1>
      {/* <FruitsCompnents fruitsArray = {fruitsArray}
      laptops={laptops} personDetails= {personDetails}
      sampleFun = {sampleFun}
      /> */}
      {/* <HeaderComponent />
      <FooterComponent /> */}

      <h1>Lift State Counter</h1>

      <CounterDisplay count={count} />
      <CounterControls
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />

    </>
  )
}

export default App
