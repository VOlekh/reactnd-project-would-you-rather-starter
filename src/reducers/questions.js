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
        case SAVE_ANSWER:
          return {
            ...state,
            [action.id]:{
              ...state[action.id],
              [action.id]:{
                ...state[action.id.option],
                 //allready saved the answer, need to disable save button
                votes: action.hasSaved === true
                  //filter users that allready have choosen this answer
                ?state[action.id].save.filter((userid)=> userid !== action.authedUser)
                 //add username to question
                :state[action.id].save.concat([action.authedUser])
              }
            }

          }
        default:
          return state;
      }
}