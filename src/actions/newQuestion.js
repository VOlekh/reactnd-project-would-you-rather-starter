import { saveQuestion } from "../utils/api";

export const SAVE_QUESTION = "SAVE_QUESTION";
//action creator
// function saveQuestion (questions) {
    
//     return{
//         type: SAVE_QUESTION,
//         questions
//     }
// }

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    //   dispatch(showLoading())

    return (
      saveQuestion({
        author: authedUser,
        timestamp: Date.now(),
        optionOne: {
          text: optionOneText,
        },
        optionTwo: {
          text: optionTwoText,
        },
      })
        //once above resolves,we are taking a question dispatching ower ad question action creator passing it the questin
        .then((question) => dispatch(saveQuestion(question)))
    );
    // .then(() => dispatch(hideLoading()))
  };
}
