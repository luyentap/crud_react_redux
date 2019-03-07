import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListPost from "../components/list_post";
import {Post} from "../components/post";
import {deletePost, editPost} from "../actions/index2";
import {bindActionCreators} from 'redux'
import EditPost from "./edit_post";

class AllPost extends Component {
  render() {
    const {posts} = this.props;
    const {deleteAPost,editAPost} = this.props;

    return (
      <div>
        {console.log(posts)}
        {/*<ListPost posts={this.props.posts}/>*/}
        {posts.map((post) => (
          <div key={post.id}>
          {!post.edit ?
            <Post key={post.id} id={post.id} text={post.text} clickDelete={() => deleteAPost(post.id)} clickEdit={()=>editAPost(post.id)}/> :
            <EditPost key={post.id} id={post.id}/>
          }
          </div>
          )
          )}
        {/*{this.props.posts.map((post) => <Post key={post.id} id={post.id} content={post.text}/>)}*/}
      </div>
    );
  }
}

// const AllPost = () =>{
//   // const {posts} = this.props;
//   // const {a} = this.props.action;
//   return (
//     <div>
//       {this.props.posts.map((post) =>
//         <Post key={post.id} id={post.id} text={post.text} clickDelete={null} />)}
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log("delete");
  return {
    deleteAPost: (id) => dispatch(deletePost(id)),
    editAPost: (id) => dispatch(editPost(id))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllPost)
