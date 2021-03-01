import React, { Component, Fragment  } from 'react'
import { Route, BrowserRouter as Router,} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Logout from './Logout'
import QuestionDetails from './QuestionDetails';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  // NBD: redirectToLogin


  render() {
    return (
      <Router>
        <Fragment>
          {/*right after router tag we have to pass only one tag (single child), but we are passing LoadingBar and div, for this use Fragment */}
          {/* <LoadingBar /> */}
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/new' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/logout' component={Logout} />
                  <Route path='/question_details' component={QuestionDetails} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  console.log(authedUser)
 return{
   loading: authedUser === null
 } 
}
export default connect(mapStateToProps)(App);
