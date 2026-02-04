import React, { useState } from 'react';
import UserCard from './UserCard';

function Profile() {
    return (
        <div style={{ padding: "20px", border: "2px solid blue" }}>
            <h2> Profile Component</h2>
            {/* <h3>username : {username}</h3> */}
            <UserCard/>
        </div>
    )

}

export default Profile;