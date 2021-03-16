import {getInitialData} from '../utils/api'
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'
import {saveQuestion } from "./questionNew";

const AUTHED_ID = 'johndoe' 
getInitialData()

//thunk action creator 
export function handleInitialData () {
    
    //Now, we need to give our components access to the data that came in from _DATA.js
    return (dispatch) =>{
        return getInitialData()
        .then(({questions, users}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}