import React, { useState } from "react";

const Login = ({setUser}) => {
const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username)
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="submit" placeholder="Inputr username" onChange={(e) => setUsername(e.target.value)} value={username}/>
      </form>
    </div>
  );
};

export default Login;
