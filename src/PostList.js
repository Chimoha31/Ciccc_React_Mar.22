import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          {post.image && (
            <img
              src={URL.createObjectURL(post.image)}
              alt="upload"
              style={{ height: 100 }}
            />
          )}
          <p>{post.content}</p>
          <div>{posts.user}</div>
        </div>
      ))}
    </>
  );
};

export default PostList;
