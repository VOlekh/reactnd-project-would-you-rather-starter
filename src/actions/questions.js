//import { saveQuestionAnswer } from '../utils/api';
import { saveQuestionAnswer} from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'



export function receiveQuestions (questions) {
    
    return{
        type: RECEIVE_QUESTIONS,
        questions
    }
}

//
export function getSaveAnswerObject ({qid, author, answer}) { 
    console.log(author)
    return{
        type: SAVE_ANSWER,
        qid,
        author,
        answer
    }
}

// asyncronouseaction creator responsible for invoking saveQuestionAnswer, dispatching (thunk action creator)
export function handleQuestionAnswer(info) {
    console.log(info)
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(() => dispatch(getSaveAnswerObject(info)))
            .catch((e) => {
                console.warn('Error in handleQuestionAnswer: ', e);
                alert('There was an error saving Question. Try again.');
            });
    }
    
}