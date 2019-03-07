import React, {Component} from "react";
import {Post} from "./post";

const ListPost = ({posts,deleteAPost}) => {
  return (
    <tbody>
      {posts.map(post =>
        <Post key={post.id}
        id={post.id} text={post.text} clickDelete={()=>deleteAPost(post.id)}/>
      )}
    </tbody>
  );
}

export default ListPost;
