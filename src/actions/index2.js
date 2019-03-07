import {ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST} from "../constants/index2";

export const addPost = content =>({
  type : ADD_POST,
    content
});

export const editPost = (idPost) =>({
  type : EDIT_POST,
  id:idPost,
});

export const updatePost = (idPost,text) =>({
  type : UPDATE_POST,
  id:idPost,
  text
});


export const deletePost = (idPost) =>({
  type : DELETE_POST,
  id:idPost,
});

// export const showAllPost = () =>({
//   type : DELETE_POST,
//   posts
// });
