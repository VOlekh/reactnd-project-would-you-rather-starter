import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import NeewQuestion from "./NewQuestion";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';

class Dashboard extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="dashboard">
        <h3 className="center">Questions Answered/Unanswered</h3>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            
          <Tab eventKey="Unanswered" title="unanswered">
            <div label="Unanswered">
              <p>You choose...</p>
              <ul className="questions-List">
                {this.props.questionIds.map((id) => (
                  <li key={id}>
                    {/* <div> question: {id}</div> */}
                    <Question id={id} />
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
    
          <Tab eventKey="Answered" title="answered">
            <div> hdsgfjhsdgf</div>
          </Tab>

        </Tabs>
      </div>
    );
  }
}

{
  /* // take a state of our store { questions } */
}
function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      // questions are sorted by time
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
