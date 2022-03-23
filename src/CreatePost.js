import React, { useState } from "react";

const CreatePost = ({ user, setPosts }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const post = { content, image, user };
    setPosts((prevPosts) => [...prevPosts, post]);
  }
  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit Post</button>
      </form>
      <p>{content}</p>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="upload"
          style={{ height: 100 }}
        />
      )}
    </div>
  );
};

export default CreatePost;
