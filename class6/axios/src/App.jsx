import { useEffect, useState } from 'react'
import api from "./api";


function App() {
  const [name, setName] = useState('');
  const fetchUsers = async () => {
    const res = await api.get("/users");
    console.log(res.data);

    // const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // const res1 = await res.json();
    // console.log(res1);
  };

  const addUser = async () => {
    console.log("name---", name);
    const newUser = { name };

    const res = await api.post("/users", newUser);
    console.log(res.data);

  }

   const updateUser = async () => {
    console.log("name---", name);
    const newUser = { name };

    const res = await api.put("/users", newUser);
    console.log(res.data);

  }

  const deleteUser = async () => {
    console.log("name---", name);
    const newUser = { name };

    const res = await api.delete("/users", newUser);
    console.log(res.data);

  }

  useEffect(() => {
    fetchUsers();
  }, [])
  return (

    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addUser}>addUser</button>
      <button onClick={updateUser}>updateUser</button>
      <button onClick={deleteUser}>deleteUser</button>
    </>

  )
}

export default App
