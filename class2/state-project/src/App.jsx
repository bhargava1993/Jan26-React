import { useState } from 'react'

import './App.css'

function App() {

  let [count, setCount] = useState(0);
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");

  let [formData, setFormData] = useState({
    name:"",
    email:""
  });


  // let count = 0;

  // let count1 = useState(0)
  // console.log("line 12---",count1[0])
  // console.log("line 13----",count1[1])

  const incrementCount = () => {

    // count = count + 1;
    setCount(count)
    // printName();
    console.log("incrementCount---", count);
  }

  const printName = () => {
    console.log("bhargava-----");
    setCount(count + 1)
  }

  const decrementCount = () => {

    setCount(count - 1)
    // count = count - 1;
    console.log("decrementCount----", count);
    // setCount(count)
  }



  const submitUserDataFn = () => {
    const userData = {
      email: email,
      name: name
    }

    console.log("userData-----", userData)
  }

  const dataObj = {
    name: "",
    email: ""
  }
  const handleSubmitFrom = (event) => {
    event.preventDefault();

    // dataObj.name = name;
    // dataObj.email = email;

    // console.log("dataObj---", dataObj);
    // setEmail("");
    // setName("");

    console.log("formdata------",formData);
  }

 

 const handleChange = (event) => {
  const { name, value } = event.target;

  console.log("name:", name);
  console.log("value:", value);

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};


  return (
    //   <>
    //     <h1>count: {count}</h1>
    //     <button onClick={incrementCount}>Increase</button>
    //     <button onClick={decrementCount}>Decrease</button>

    //     <br />
    //     <lable>Email:</lable>
    //     <input
    //       type="text"
    //       value={email}
    //       onChange={(event) => {
    //         console.log("event---", event.target.value)
    //         setEmail(event.target.value)
    //       }}
    //     />
    //     <br />
    //     <lable>Name:</lable>
    //     <input
    //       type="text"
    //       value={name}
    //       onChange={(event) => {
    //         console.log("event---", event.target.value)
    //         setName(event.target.value)
    //       }}

    //     />
    //     <br />
    //     <button onClick={submitUserDataFn}> submit</button>
    // </>


    // <form onSubmit={handleSubmitFrom}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       value={name}
    //       onChange={(event) => {
    //         setName(event.target.value)
    //       }}
    //     />
    //     <br />
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="text"
    //       id="email"
    //       value={email}
    //       onChange={(event) => {
    //         setEmail(event.target.value)
    //       }}
    //     />
    //   </div>
    //   <button type="submit">Submit</button>
    // </form>





     <form onSubmit={handleSubmitFrom}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}



export default App
