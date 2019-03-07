import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListPost from "../components/ListPost";
import {Post} from "../components/Post";
import {deletePost, editPost} from "../actions";
import {bindActionCreators} from 'redux'
import EditPost from "./UpdatePost";

const mapStateToProps = (state) => {
  return {
    posts: state.post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAPost: (id) => dispatch(deletePost(id)),
    editAPost: (id) => dispatch(editPost(id))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ListPost)

