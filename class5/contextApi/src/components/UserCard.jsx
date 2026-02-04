import React, { useState } from 'react';
import UserName from "./UserName";

function UserCard(){
return (
        <div style={{ padding: "20px", border: "2px solid yellow" }}>
            <h2> UserCard Component</h2>
            <UserName/>
        </div>
    )
}

export default UserCard;