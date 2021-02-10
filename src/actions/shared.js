import {_getQuestions, _getUsers} from '../utils/_DATA';
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'
import {setAuthedUser} from '../actions/authedUser'

const AUTHED_ID = 'johndoe'

//thunk action creator 
export function HamdleInitialData () {
    //Now, we need to give our components access to the data that came in from _DATA.js
    return (dispatch) =>{
        return getInitialData()
        .then(({questions, users}) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(setAuthedUser(AUTHED_ID));
        })
    }
}