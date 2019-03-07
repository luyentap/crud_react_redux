import React, {Component} from 'react'
import CreatePost from "./CreatePost";
import AllPost from "./AllPost";
import {connect} from 'react-redux'
import EditPost from "./UpdatePost";

const PageCRUD = () => {
  return (
    <>
      <CreatePost/>
      <AllPost/>
    </>
  );
}

export default connect()(PageCRUD)
