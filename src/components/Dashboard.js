import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom'
import Redirector from "./Redirector";


class Dashboard extends Component {
state = {
  defaultTab: "Unanswered"
}

handleTab = (e) => {
  this.setState(() => ({
    defaultTab: e
  }))
}
  render() {
    console.log(this.unasweredQuestionIds);

    return (
      <div className="dashboard">
         <Redirector currentLocation="/"/>
        <Tabs defaultActiveKey="profile" id="HomePage"   activeKey={this.state.defaultTab}
                onSelect={this.handleTab}>
          <Tab  htmlFor="Unanswered" eventKey="Unanswered" title="Unanswered questions">
            <div label="Unanswered">
              <ul className="questions-List">
                {this.props.unansweredQuestionIds.map((id) => (
                  <li key={id}>
                    <Card>
                      <Card.Body>
                        <Question id={id} />
                        <Link to={`/questions/${id}`}>
                          <Button variant="warning">View Poll</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>

          <Tab htmlFor="Answered" eventKey="Answered" title="Answered questions">
            <div label="Answered">
              <ul className="questions-List">
                {this.props.answeredQuestionIds.map((id) => (
                  <li key={id}>
                    <Card>
                    <Card.Body>
                        <Question id={id} />
                        <Link to={`/questions/${id}`}>
                          <Button variant="warning">Details</Button>
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
