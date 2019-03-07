import React, {Component} from 'react'
import CreatePost from "./create_post";
import AllPost from "./all_post";
import {connect} from 'react-redux'
import EditPost from "./edit_post";

const PageCRUD = () => {
  return (
    <>
      <CreatePost/>
      <AllPost/>
    </>
  );
}

export default connect()(PageCRUD)
