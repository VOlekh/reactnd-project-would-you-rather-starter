import React, { Component } from "react";
import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helper";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { handleQuestionAnswer } from "../actions/questions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TextTruncate from 'react-text-truncate'; // recommend
var TextTruncate = require('react-text-truncate'); // CommonJS or UMD


class Question extends Component {
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
    // console.log(this.props)
    const { question, authedUser } = this.props;
    console.log(authedUser);
    const { name, avatar, timestamp, optionOne, optionTwo } = question;

    return (
      <Card>
        <Card.Body>
          <div>
            <div className="x">
            <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
            </div>
            

            <div className="question-info">
              <span>{name}</span>
              <span> {formatDate(timestamp)}</span>

              <h3>Would you rather ...</h3>
              <div>
              <TextTruncate
                    line={1}
                    element="span"
                    truncateText="…"
                    text={optionOne.text}
                    textTruncateChild={<a href="#">Read on</a>}
                />
              </div>
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
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  console.log(authedUser);
  return {
    authedUser,
    question: formatQuestion(question, users[question.author], authedUser),
  };
}

export default connect(mapStateToProps)(Question);
