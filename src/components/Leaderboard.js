import React, { Component } from "react";
import { formatDate, formatQuestion } from '../utils/helper'
import Question from "./Question";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";


class Leaderboard extends Component {
  render() {
    let { users } = this.props
    users = Object.values(users);
    
    //The length property of an object which is an instance of type Array sets or returns the number of elements in that array. 
    users.sort((a, b) => {
        const a_score =  a.questions.length + Object.keys(a.answers).length;
        const b_score =  b.questions.length + Object.keys(b.answers).length;
        return b_score - a_score;
    })

    console.log("Array / leaderbord:", users)
    // console.log("scoreQustions:", scoreQustions )
    return (
        <div className="leaderboard">
            <h3 className="center">Leaderboard</h3>
            <ul className="leaderbord_list">
                {users.map((user) => 
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
                                    
                                    <div>Score questions asked: {user.questions.length}</div>
                                    <div>Score questions answered: {Object.keys(user.answers).length}</div>
                                    <div>TotalScore: {user.questions.length + Object.keys(user.answers).length}</div>
                                </div>
                            </Card.Body>
                        </Card>
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
    console.log("mapStateProps/leaderbord:", users)
    return{
        users    
    }
}


export default connect(mapStateToProps)(Leaderboard);
