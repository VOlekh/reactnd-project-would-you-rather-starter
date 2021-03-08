import React, { Component } from "react";
import { formatDate, formatQuestion } from '../utils/helper'
import Question from "./Question";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    const { users } = this.props
    console.log("Dictionary/ leaderbord:", users)
    console.log("Array/ leaderbord:", Object.values(users))
    //The length property of an object which is an instance of type Array sets or returns the number of elements in that array. 
   
    // console.log("scoreQustions:", scoreQustions )
    return (
        <div>
            <ul className="leaderbord">
                {Object.values(users).map((user) => 
                        (
                        <div className='user_leaderbord_card' key={user.id}> 
                        {user.name}
                        <img src = {user.avatarURL} alt = {`Avatar of ${user.name}`} className='avatar' />                    
                         {/* Array - massive */}
                        <div> Score questions asked: {user.questions.length}</div>
                        {/* Dictionary, map, slovar */}
                        <div>Score questions answered: {Object.keys(user.answers).length}</div>
                        <div>TotalScore: {user.questions.length + Object.keys(user.answers).length}</div>               
                        </div>
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
