import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        return(
            <div>
                <h3 className='center'>Questions Answered/Unanswered</h3>
                <ul className='questions-List'>
                    {this.props.questionIds.map((id) => (
                        <li key={id}> 
                            {/* <div> question: {id}</div> */}
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>    
            </div>
        )
    }
}
// take a state of our store { questions }
function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
        // questions are sorted by time
            .sort((a,b)=> questions[b].timestamp - questions[a].timestamp)
    }
}    

export default connect(mapStateToProps)(Dashboard)