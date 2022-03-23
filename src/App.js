import React, { useState } from "react";
import Login from "./Login";
import Header from "./Header";
import CreatePost from "./CreatePost";
import PostList from "./PostList";

const App = () => {
  const [user, setUser] = useState("hoge");
  const [posts, setPosts] = useState([]);

  if(!user) {
   return <Login setUser={setUser} />;
  }
 

  return (
    <div>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
