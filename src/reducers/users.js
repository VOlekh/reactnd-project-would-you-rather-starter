import {RECEIVE_USERS} from '../actions/users'
import {SAVE_ANSWER_TO_USER, SAVE_QUESTION_TO_USER} from '../actions/users'
//include a default state parameter as the first argument inside a particular reducer function.
//initialized each slice of the store by setting a default state value as the first parameter inside each reducer function
export default function users (state = {}, action) {
    switch (action.type) {

        case RECEIVE_USERS:
          return {
              // new state which is at the beginning an empty state {} plus action.users
            ...state,
            ...action.users,
          };

        case SAVE_ANSWER_TO_USER:
          //TBD test with breake point change action.question to action.users to test 
          const { answer, qid, authedUser } = action.question;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            };

        case SAVE_QUESTION_TO_USER:
          //TBD test with breake point change action.question to action.users to test 
            return {
              ...state,
              [action.question.author]: {
                  ...state[action.question.author],
                  questions: state[action.question.author].questions.concat(action.question.id)
              }
            }  

        default:
          return state;
      }
}