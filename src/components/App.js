import React, { Component, Fragment  } from 'react'
import { Route, BrowserRouter as Router,} from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import newQuestion from './NewQuestion';
import Nav from './Nav'
import NewQuestion from './NewQuestion';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

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
