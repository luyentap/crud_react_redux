import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {render} from 'react-dom'
import {addPost} from "./actions";
import post from './reducers/post'
import CreatePost from "./containers/CreatePost";
import PageCRUD from "./containers/App";

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

class App extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <PageCRUD/>
      </Provider>
    )
  }
}

export default App;
