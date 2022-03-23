import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const endpoint = "http://api.github.com/users/";
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("chimoha31");
  const searchInput = React.useRef();

  useEffect(() => {
    getUser();
  }, []);

  // fetch(endpoint).then(response => response.json()).then(result => setUser(result))
  async function getUser() {
    const response = await fetch(endpoint + username);
    const data = await response.json();
    setUser(data);
  }

  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  return user ? (
    <>
      <input
        type="text"
        placeholder="Enter a github user"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={user.name} style={{ height: 50 }} />
    </>
  ) : (
    <p>Loading</p>
  );
};

export default App;
