import React from 'react';
import UserProfile from '../components/UserProfile';
import { UserProvider } from '../context/UserContaxt';
import Login from '../components/Login';

function User(){
    return (
        <UserProvider>
            <UserProfile/>
            <Login/>
        </UserProvider>
    );
}

export default User;