import { useState, useEffect } from 'react'
import './App.css'
import FetchDataComponent from './component/FetchDataComponent';

function App() {
  const [count, SetCount] = useState(0);
  let status = false;

  useEffect(() => {

    console.log("without Dependency array");
    if (count % 2 === 0) {
      status = true;
    }
  })


  useEffect(() => {
    console.log("with Dependency array");
  }, [])

  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Positive count");
      document.title = `you clicked ${count} times`;
    }
  }, [count]);


  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Timer Tick");
    },2000);

    //clenup function
    return ()=>{
      clearInterval(timer)
    };
  },[])
  

  return (
    <>
      <h1>My App.js component</h1>
      {/* <p>click counter: {count}</p> */}
      {/* <button onClick={() => SetCount(count + 1)}> cick me</button> */}
      <FetchDataComponent />
    </>
  )
}

export default App
