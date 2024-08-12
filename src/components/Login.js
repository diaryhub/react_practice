import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContaxt';

function Login() {
  const { user, login } = useContext(UserContext);
  const [userId, setUserId] = useState(user ? user.id : '');
  const [userName, setUserName] = useState(user ? user.name : '');

  const handleLogin = () => {
    const userData = { id: userId, name: userName };
    login(userData);
  };

  return (
    <div>
      <input 
        type="text" 
        value={userId} 
        onChange={(e) => setUserId(e.target.value)} 
        placeholder="Enter user ID" 
      />
      <input 
        type="text" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        placeholder="Enter user name" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
