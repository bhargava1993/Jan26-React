import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import FruitsCompnents from './components/FruitsComponent'
import LoginComponent from "./components/LoginComponent";

function App() {

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

      <LoginComponent status = {false}/>
      <h1> app.js component 1</h1>
      {/* <FruitsCompnents fruitsArray = {fruitsArray}
      laptops={laptops} personDetails= {personDetails}
      sampleFun = {sampleFun}
      /> */}
      <HeaderComponent />
      <FooterComponent />
    </>
  )
}

export default App
