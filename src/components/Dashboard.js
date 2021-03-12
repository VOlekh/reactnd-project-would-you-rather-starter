import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'

class Dashboard extends Component {


  render() {
    console.log(this.unasweredQuestionIds);

    return (
      <div className="dashboard">
        <h3 className="center">Dashboard</h3>
        <Tabs defaultActiveKey="profile" id="HomePage">
          <Tab eventKey="Unanswered" title="Unanswered questions">
            <div label="Unanswered">
              <ul className="questions-List">
                {this.props.unansweredQuestionIds.map((id) => (
                  <li key={id}>
                    <Card>
                      <Card.Body>
                        <Question id={id} />
                        <Link to={`/questions/${id}`}>
                          <Button>View Poll</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>

          <Tab eventKey="Answered" title="Answered questions">
            <div label="Answered">
              <ul className="questions-List">
                {this.props.answeredQuestionIds.map((id) => (
                  <li key={id}>
                    <Card>
                    <Card.Body>
                        <Question id={id} />
                        <Link to={`/questions/${id}`}>
                          <Button>Details</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

{
  /* // take a state of our store { questions } */
}
function mapStateToProps({ questions, authedUser }, { id }) {
  const question = questions[id];

  console.log(authedUser);

  const answeredQuestions = Object.values(questions).filter(
    (question) =>
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
  );

  console.log(Object.values(questions));

  const unansweredQuestions = Object.values(questions).filter(
    (question) => !answeredQuestions.includes(question)
  );
  // questions are sorted by time

  return {
    id,
    unansweredQuestionIds: unansweredQuestions
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(({ id }) => id),

    answeredQuestionIds: answeredQuestions
      .sort((a, b) => b.timestamp - a.timestamp)
      .map(({ id }) => id),
  };
}

export default connect(mapStateToProps)(Dashboard);
