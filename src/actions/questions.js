import { saveQuestionAnswer } from '../utils/api';
import { saveAnswerToUser} from '../actions/users'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'
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
export function saveAnswerToQuestion ({qid, authedUser, answer}) { 
    console.log(authedUser)
    return{
        type: SAVE_ANSWER_TO_QUESTION,
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
                dispatch(saveAnswerToQuestion(info))
                dispatch (saveAnswerToUser(info))
            })
            .catch((e) => {
                console.warn('Error in handleQuestionAnswer: ', e);
                alert('There was an error saving Question. Try again.');
            });
    }
    
}