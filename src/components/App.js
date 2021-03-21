import React, { Component, Fragment } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import QuestionNew from "./QuestionNew";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Logout from "./Logout";
import QuestionRoute from "./QuestionRoute";
import PageNotFound from "./PageNotFound";
import LoadingBar from "react-redux-loading";

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
          <div className="container">
            <Nav authedUser={this.props.authedUser} />
            {/* {this.props.loading === true ? null : this.props.authedUser === */}
            { this.props.authedUser === null
              ? ( <div><Route component={Login} /></div>) 
              : (
                  <div>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/new" component={QuestionNew} />
                    <Route path="/leaderboard" component={Leaderboard} />
                    <Route path="/logout" component={Logout} />
                    <Route
                      path="/questions/:question_id"
                      component={QuestionRoute}
                      questions={this.props.questions}
                    />
                    <Route component={PageNotFound} />
                  </div>
                )           
            }
            <footer>
              <p className="footer">
                Made by Valentina Olekhnovich
              </p>
            </footer>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }, { users, questions }) {
  console.log(authedUser);
  return {
    // loading: authedUser === null,
    users,
    authedUser,
    questions,
  };
}

export default connect(mapStateToProps)(App);
