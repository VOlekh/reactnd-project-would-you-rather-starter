import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { handleQuestionAnswer } from "../actions/questions";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Redirector from "./Redirector";

class QuestionViewPoll extends Component {

  state = {
    answer: "",
  }
    
  onAnswerChange = (answer) => {
    console.log(answer);
    this.setState(() => ({
      answer,
    }));
  };

  onAnswerSubmit = (e) => {
    e.preventDefault();
    const { dispatch, question, authedUser } = this.props;
    const { answer } = this.state;

    dispatch(
      handleQuestionAnswer({
        qid: question.id,
        answer,
        authedUser,
      })
    );
  };

  render() {
    const { question, authedUser } = this.props;
    // Сheck if question is null. If it is, we can redirect the user to a 404 page
    if (!question) {
      console.log("Redirecting to 404");
      return <Redirect to='/404' />;
    }
    console.log(authedUser);
    const { name, avatar, timestamp, optionOne, optionTwo } = question;
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    return (
            <Card>
              <Redirector currentLocation="/questions/:question_id"/>
              <Card.Body>
                <h4 className="center">View Poll</h4>
                  <div>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={avatar}
                            alt={`Avatar of ${name}`} 
                        />
                        <Media.Body >
                            <h5>{name}</h5>
                            <p>{formatDate(timestamp)}</p>
                        </Media.Body>
                    </Media>
                    <hr/>
                    <h4>Would you rather ...</h4>
                    <div>
                      <RadioGroup onChange={this.onAnswerChange}>
                          <RadioButton value="optionOne">{optionOne.text}</RadioButton>
                          <RadioButton value="optionTwo">{optionTwo.text}</RadioButton>
                      </RadioGroup>
                      <Button
                          variant="warning"
                          onClick={this.onAnswerSubmit}
                          type="submit"
                          disabled={
                            this.state.answer === ""
                          }
                      >
                          Submit
                      </Button>
                    </div>

                  </div>
                </Card.Body>
            </Card>  
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);
    const question = questions[id];
    console.log(authedUser);

    return {  
      authedUser,
      question: question
      // add a check to format the question only if the question is not undefined.
        ? formatQuestion(question, users[question.author], authedUser)
        : null,
  };
}

export default connect(mapStateToProps)(QuestionViewPoll);
