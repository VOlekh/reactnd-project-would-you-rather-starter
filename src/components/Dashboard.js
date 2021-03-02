import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Tabs from 'react-bootstrap/Tabs';
import { Redirect } from 'react-router-dom'
import Tab from 'react-bootstrap/Tabs';

class Dashboard extends Component {
  render() {
    console.log(this.unasweredQuestionIds);

    return (
      <div className="dashboard">
        <h3 className="center">Questions Answered/Unanswered</h3>
        <Tabs defaultActiveKey="profile" id="HomePage">
            
          <Tab eventKey="Unanswered" title="unanswered">
            <div label="Unanswered">
              <p>You choose...</p>
              <ul className="questions-List">
                {this.props.unasweredQuestionIds.map((id) => (
                  <li key={id}>
                    <Question id={id} />
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
    
          <Tab eventKey="Answered" title="answered">
          <div label="Answered">
              <p>You answered...</p>
              <ul className="questions-List">
                {this.props.answeredQuestionIds.map((id) => (
                  <li key={id}>
                    <Question id={id} />
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
function mapStateToProps({ questions, authedUser }) { 
  console.log(authedUser)

  const answeredQuestions = Object.values(questions)
    .filter(question =>  
    ((authedUser in question.optionOne.votes) || (authedUser in question.optionTwo.votes)));

  console.log(answeredQuestions)

  const unasweredQuestions = Object.values(questions)
    .filter((question) => 
    !(question.id in Object.keys(answeredQuestions)));
    

  return {
    answeredQuestionIds: Object.keys(answeredQuestions)
      // questions are sorted by time
      .sort((a, b) => answeredQuestions[b].timestamp - answeredQuestions[a].timestamp),

    unasweredQuestionIds: Object.keys(unasweredQuestions)
      // questions are sorted by time
      .sort((a, b) => unasweredQuestions[b].timestamp - unasweredQuestions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
