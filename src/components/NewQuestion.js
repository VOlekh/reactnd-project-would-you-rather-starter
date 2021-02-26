import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/newQuestion";
//import { Redirect } from "react-router-dom";

class newQuestion extends Component {
  state = {
    //set state as empty string
    optionOne: "",
    optionTwo: "",
    toHome: false,
  };

  handleChange = (eOne) => {
    const optionOne = eOne.target.value;
    

    this.setState(() => ({
        optionOne: "",

    }));
  };
  handleChange = (eTwo) => {
    const optionTwo = eTwo.target.value;
    

    this.setState(() => ({
        optionTwo: "",

    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, id, authedUser } = this.props;
    // Add Question to Store
    console.log("New question: ", optionOne, optionTwo);
    dispatch(handleSaveQuestion(optionOne, optionTwo, id, authedUser));
    // reset to empty string
    this.setState(() => ({
      optionOne: "",
      optionTwo: "",

      // if id is a thing, then toHome is false, if not - true
      //toHome: id ? false : true,
      //this.setState(()=>({toHome:true}))
    }));
  };

  render() {
    const { optionOne, optionTwo } = this.state;
    const textLeft = 100 - optionTwo.length;
    //TBd: const textLeft = 100 - optionOne.length;

    return (
      <div>
        <h3 className="center">Compose new Question</h3>
        {/* //invoked handle submit method */}
        <form className="new-question" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option one"
            value={optionOne}
            // when input fild changes
            onChange={this.handleChange}
            className="answerarea"
            maxLength={100}
          />
          <textarea
            placeholder="Option two"
            value={optionTwo}
            onChange={this.handleChange}
            className="answerarea"
            maxLength={100}
          />
          {/* when the text is more then 100 show how much is left */}
          {textLeft <= 100 && (
            <div className="answer-length">{textLeft}</div>
          )}

          <button
            className="btn"
            type="submit"
            // disabled if the text is equal to empty string
            //'value' is not defined  no-undef
            //disabled={text === ""}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
// export default NewTweet
export default connect()(newQuestion);
