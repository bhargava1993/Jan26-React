import React, { useContext, useState } from 'react';
import UserContext from "../context/UserContext"

function UserName() {

    const {username}= useContext(UserContext);
    return (
        <div style={{ padding: "20px", border: "2px solid red" }}>
            <h2> UserName Component</h2>
            <h3>username : {username}</h3>
        </div>
    )
}

export default UserName;