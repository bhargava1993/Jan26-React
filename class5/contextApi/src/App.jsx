import { useState } from 'react'
import Profile from './components/profile'
import UserContext from './context/UserContext';


function App() {
  const [username, setUsername] = useState("venu");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div style={{ padding: "20px", border: "2px solid black" }}>
        <h2> APP Component(parent)</h2>
        <Profile />
      </div>
    </UserContext.Provider>
  )
}

// function App() {

//   const [username, setUsername] = useState("venu");

//   return (
//     <div style={{padding: "20px", border:"2px solid black"}}>
//       <h2> APP Component(parent)</h2>
//       <Profile username={username}/>
//     </div>
//   )
// }

export default App
