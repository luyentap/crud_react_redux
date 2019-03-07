import {ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST} from "../constants/";

export const addPost = ( text ) => ({
  type: ADD_POST,
  text
});

export const editPost = (idPost) => ({
  type: EDIT_POST,
  id: idPost,
});

export const updatePost = (idPost, text) => ({
  type: UPDATE_POST,
  id: idPost,
  text
});


export const deletePost = (idPost) => ({
  type: DELETE_POST,
  id: idPost,
});
