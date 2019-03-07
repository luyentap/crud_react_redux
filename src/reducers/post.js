import {ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST} from "../constants/index2";

let initState = [];

let idPost = 0;
export default function post(state = initState, action) {
  switch (action.type) {
    case ADD_POST:
      console.log("add");
      idPost++;
      const {content} = action;
      return [...state, action.content] //it same // return state.concat([action.content]);
    case DELETE_POST:
      console.log('delete id', action.id)
      return state.filter((post) => post.id !== action.id);
    case EDIT_POST:
      console.log("click edit a post id", action.id)
      return state.map((post) => post.id === action.id ? {...post, edit: !post.edit} : post);
    case UPDATE_POST:
      console.log("update a post id", action.id)
      return state.map((post) => post.id === action.id ? {...post, text: action.text, edit: !post.edit} : post);
    default:
      return state;
  }
}



