import { useRef, useState } from 'react';
function SendFocus() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null);

  const focusInput = ()=>{
    console.log("focus Input--");
    console.log("dom---",document.getElementById("firstInput"));
    console.log("inputRef----",inputRef.current);
    inputRef.current.focus();
  }
  return (
    <>
     <input type="text" ref={inputRef} id="firstInput"></input>

     <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default SendFocus;