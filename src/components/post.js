import React, {Component} from "react";
import {DELETE_POST} from "../constants/index2";
import {deletePost} from "../actions/index2";

export const Post = ({id, text, clickDelete,clickEdit}) => {
  return (
    <tr>
      <td scope="row">{id}</td>
      <td>{text}</td>
      <td>
        <button className="btn btn-danger" onClick={clickDelete}>Delete</button>
        <button className="btn btn-info" onClick={clickEdit}>Edit</button>
      </td>
    </tr>
  );
}
