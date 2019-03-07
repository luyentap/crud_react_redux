import React, {Component} from "react";
import {connect} from 'react-redux';
import {addPost} from "../actions/index2";

class CreatePost extends Component{
  onSubmitForm =(e)=>{
    e.preventDefault();
    const text = this.getMessage.value;
    const content ={
      id: new Date().getMilliseconds(),
      text
    }
    console.log('content',content);

    this.props.createAPost(content);//it's same : this.props.dispatch(addPost(content));
    //clear the area tag
    this.getMessage.value = '';
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Content</label>
          <textarea className="form-control" rows="3" ref={(input)=>this.getMessage = input}></textarea>
          <small className="form-text text-muted">Enter the content</small>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    createAPost: (content) => dispatch(addPost(content))
  }
}

export default connect(null,mapDispatchToProps)(CreatePost);
