import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { handleQuestionAnswer } from "../actions/questions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

class QuestionViewPoll extends Component {
    
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
    console.log(authedUser);
    const { name, avatar, timestamp, optionOne, optionTwo } = question;
    let url = window.location.pathname;
    let id = url.substring(url.lastIndexOf('/') + 1);

    return (
        <div className="view-poll">
        <h4 className="center">View Poll</h4>
            <Card>
                <Card.Body>
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

                    <h3>Would you rather ...</h3>
                    <div>
                    <RadioGroup onChange={this.onAnswerChange}>
                        <RadioButton value="optionOne">{optionOne.text}</RadioButton>
                        <RadioButton value="optionTwo">{optionTwo.text}</RadioButton>
                    </RadioGroup>
                    <Button
                        variant="primary"
                        onClick={this.onAnswerSubmit}
                        type="submit"
                    >
                        Submit
                    </Button>
                    </div>
                </div>
                </Card.Body>
            </Card>
        </div>    
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
        question: formatQuestion(question, users[question.author], authedUser),
  };
}

export default connect(mapStateToProps)(QuestionViewPoll);
