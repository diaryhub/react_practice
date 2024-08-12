import React, { useContext } from 'react';
import { UserContext } from '../context/UserContaxt';

function UserProfile(){
    const {user} = useContext(UserContext);
    if(!user){
        return <div>Please log in.</div>;
    }
    return (
    <div>
        <h2>User Profile</h2>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
    </div>
    );
}

export default UserProfile;