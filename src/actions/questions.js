//import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'


export function receiveQuestions (questions) {
    
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}


export function saveQuestionAnswer (qid, authedUser, answer) {
    
    return{
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer
    }
}
// action creator responsible for dispatching (thunk action creator)
export function handleQuestionAnswer(info) {
    return (dispatch) => {
        dispatch(saveQuestionAnswer(info))
        //use optimistic update, save in to db

    }
    
}