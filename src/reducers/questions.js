import {
  RECEIVE_QUESTIONS,
  SAVE_ANSWER_TO_QUESTION,
  SAVE_QUESTION_TO_QUESTION,
} from "../actions/questions";

// 1st way to initialize the state inside the store: include a default state parameter as the first argument inside a particular reducer function.
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      console.log(state);
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_QUESTION_TO_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };

    //When saving a question, the state for that specific question needs to change - either the property which, is an array and will contain the names of the users
    case SAVE_ANSWER_TO_QUESTION: {
      // const {users, questions} = state;
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    }
    default:
      return state;
  }
}
