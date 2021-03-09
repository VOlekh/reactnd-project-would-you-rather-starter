import React, { Component } from "react";
import { formatDate, formatQuestion } from '../utils/helper'
import Question from "./Question";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";


class Leaderboard extends Component {
  render() {
    const { users } = this.props
    console.log("Dictionary/ leaderbord:", users)
    console.log("Array/ leaderbord:", Object.values(users))
    //The length property of an object which is an instance of type Array sets or returns the number of elements in that array. 
   
    // console.log("scoreQustions:", scoreQustions )
    return (
        <div className="leaderboard">
            <h4 className="center">Leaderboard</h4>
            <ul className="leaderbord_list">
                {Object.values(users).map((user) => 
                        (
                        <Card className="leaderboard-list" key={user.id}>
                            <Card.Body>
                                <div>
                                    <Media>
                                    <img
                                        width={64}
                                        height={64}
                                        className="mr-3"
                                        src={user.avatarURL}
                                        alt={`Avatar of ${user.name}`} 
                                    />
                                    <Media.Body>
                                        <h5>{user.name}</h5>
                                     
                                    </Media.Body>
                                    </Media>
                                    
                                    <div> Score questions asked: {user.questions.length}</div>
                                    <div>Score questions answered: {Object.keys(user.answers).length}</div>
                                    <div>TotalScore: {user.questions.length + Object.keys(user.answers).length}</div>
                                </div>
                            </Card.Body>
                            <Button
                                variant="primary"
                                onClick={this.onViewPoll}
                                type="viewPoll"
                                >
                                View Poll
                            </Button>
                        </Card>

                         
                            

                        // <div className='user_leaderbord_card' key={user.id}> 
                        // {user.name}
                        // <img src = {user.avatarURL} alt = {`Avatar of ${user.name}`} className='avatar' />                    
                        //  {/* Array - massive */}
                        // <div> Score questions asked: {user.questions.length}</div>
                        // {/* Dictionary, map, slovar */}
                        // <div>Score questions answered: {Object.keys(user.answers).length}</div>
                        // <div>TotalScore: {user.questions.length + Object.keys(user.answers).length}</div>               
                        // </div>
                        ))
                        }

                
            </ul>
        </div>
     );
   }
}

// function mapStateToProps({ users}) {
//   // let usersTotalScore =
//   let questionsScore = Object.values(users).map((user) => ({
//     scoreQustions: {user.questions}.length,
//   }));
//   console.log("mapStateProps/ leaderboard:", users)

//   let answersScore = Object.values(users).map((user) => ({
//     scoreAnswers: Object.keys(user.answeres).length,
//   }));

//   return {
//     usersQuestionsScoreIDs:
//     questionsScore
//     .sort((a, b) => b.score - a.score)
//     .map(({id})=>id),
//   };
// }
function mapStateToProps({users}) {
    console.log("mapStateProps/ leaderbord:", users)
    return{
        users    
    }
}


export default connect(mapStateToProps)(Leaderboard);
