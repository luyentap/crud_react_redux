import React, {Component} from "react";
import {Post} from "./post";
import EditPost from "../containers/edit_post";

const ListPost = ({posts,deleteAPost,editAPost}) => {
  return (
    <table className="table table-bordered">
      <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">content</th>
        <th scope="col">action</th>
      </tr>
      </thead>
    <tbody>

      {posts.map(post =>
        <>
          {!post.edit ?
          <Post key={post.id}
                id={post.id} text={post.text} clickDelete={() => deleteAPost(post.id)} clickEdit={() => editAPost(post.id)}/> :
            <div><EditPost key={post.id} id={post.id}/></div>
          }
        </>
      )}
    </tbody>
    </table>
  );
}

export default ListPost;
