import {RECEIVE_QUESTIONS, SAVE_ANSWER} from '../actions/questions'

// 1st way to initialize the state inside the store: include a default state parameter as the first argument inside a particular reducer function.
export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
          return {           
            ...state,
            ...action.questions,
          };

//When saving a question, the state for that specific question needs to change - either the property which, is an array and will contain the names of the users          
        case SAVE_ANSWER: {
          console.log(action);
          const {users, questions} = state; 
          const { authedUser, qid, answer } = action;
          return {
            users : {
              ...users,
              [authedUser]: {
                ...users[authedUser],
                answers: {
                  ...users[authedUser].answers,
                  [qid]: answer
                }
              }
            },
            questions : {
              ...questions,
              [qid]: {
                ...questions[qid],
                [answer]: {
                  ...questions[qid][answer],
                  votes: questions[qid][answer].votes.concat([authedUser])
                }
              }
            }
          };
        }
        default:
          return state;
      }
}