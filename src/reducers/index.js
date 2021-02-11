import {combineReducers} from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
//import {loadingBarReducer} from 'react-redux-loading'

//combine all of these reducers into one main, root reducer, the createStore function only accepts a single reducer
export default combineReducers({
  authedUser,
  questions,
  users
  //loadingBar: loadingBarReducer,
});