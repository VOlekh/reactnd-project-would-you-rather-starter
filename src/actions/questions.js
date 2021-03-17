import { saveQuestionAnswer, saveQuestion } from '../utils/api';
import { saveAnswerToUser} from '../actions/users'
import {saveQuestionToUser } from '../actions/users'
import { formatQuestion } from "../utils/helper";
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'

export const SAVE_QUESTION_TO_QUESTION = "SAVE_QUESTION_TO_QUESTION"





export function receiveQuestions (questions) {
    
    return{
        type: RECEIVE_QUESTIONS,
        questions
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

export function saveQuestionToQuestion (question) {
    
    return{
        type: SAVE_QUESTION_TO_QUESTION,
        question
    }
}


export function handleSaveQuestion(question) {
  console.log(question)
  return (dispatch) => {
      return saveQuestion(question)
          .then(() => {
              dispatch(saveQuestionToQuestion(formatQuestion))
              dispatch (saveQuestionToUser(formatQuestion))
          })
          .catch((e) => {
              console.warn('Error in handleQuestionAnswer: ', e);
              alert('There was an error saving Question. Try again.');
          });
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