# Jan26-React
React.js 


Real DOM?


Virtual DOM? - copy of real DOM 
Reconciliation?

diffing algoritham -> is will compare your real dom with virutal dom, if i will identify any change, changed value is going to update in to real dom.

<h1>
<h2>
<div>
<span>
<input>


fiber: 

bhargava - teamLead  - 10 years = 

copy
bhargava - teamLead  -  10 years = 


state:  

obj={
    name: "Venu",
    salray:10000
}



function componets

useState()

props and useState()


display currect data

updating your data web will re-render--useState()


lift the state:
---------------

sync




useEffect: 
----------
1. to perform sideEffect
2. lifecycle methods also we can achive by using useEffect hook only

use + Effect -- useEffect 

1. API Call
2. timers
3. asycronous (Promises/async-await)

syntax:
--------
1.useEffect(()=>{
    
})

2.useEffect(()=>{

    retrun "";
},[])

3.useEffect(()=>{
    
},[status])

4.cleanUp Function

 useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Timer Tick");
    },2000);

    //clenup function
    return ()=>{
      clearInterval(timer)
    };
},[])



component life cycle methods:
-----------------------------

Bron           mounting

updation        update

Die             unmount


routing: (Navigation) / redirection
-----------------------------------

 client                     server

 npm i react-router-dom

BrowserRouter --> main.jsx -> you  need to wrap your main component (<app />)