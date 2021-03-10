//import { saveQuestionAnswer } from '../utils/api';
import { saveQuestionAnswer} from '../utils/api'
import { getSaveQuestionToUser } from '../actions/users'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'



export function receiveQuestions (questions) {
    
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

//
export function getSaveAnswerObject ({qid, authedUser, answer}) { 
    console.log(authedUser)
    return{
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer
    }
}

// asyncronouseaction creator responsible for invoking saveQuestionAnswer, dispatching (thunk action creator)
export function handleQuestionAnswer(info) {
    console.log(info)
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(() => {
                dispatch(getSaveAnswerObject(info))
                dispatch (getSaveQuestionToUser(info))
            })
            .catch((e) => {
                console.warn('Error in handleQuestionAnswer: ', e);
                alert('There was an error saving Question. Try again.');
            });
    }
    
}