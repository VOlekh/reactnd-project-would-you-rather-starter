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
                {this.props.unansweredQuestionIds.map((id) => (
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
    question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser));

  console.log(Object.values(questions))

  const unansweredQuestions = Object.values(questions)
    .filter((question) => 
    !answeredQuestions.includes(question));
     // questions are sorted by time

  return {
    unansweredQuestionIds:
    unansweredQuestions
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({id})=>id),

    answeredQuestionIds:
    answeredQuestions
    .sort((a, b) => b.timestamp - a.timestamp)
    .map(({id})=>id)
      
  };
}

export default connect(mapStateToProps)(Dashboard);
