import React, { Component, Fragment } from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../img/draw-banner-background-cute-cats-yellow.png";
import {faFacebook, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
//Loading TBD
//import LoadingBar from "react-redux-loading";


import { handleInitialData } from "../actions/shared";
import NavComponent from "./Nav";
import Dashboard from "./Dashboard";
import QuestionNew from "./QuestionNew";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Logout from "./Logout";
import QuestionRoute from "./QuestionRoute";
import PageNotFound from "./PageNotFound";


//Banner taken from
//https://www.shutterstock.com/image-vector/cat-set-popcorn-french-fries-soda-1818755765

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

          <div className="container">
            <div className="banner">
              <div className="banner-text">Would you rather..</div>
              <Image alt="banner" src={banner} fluid />
            </div>
            <NavComponent authedUser={this.props.authedUser} />
            {/* {this.props.loading === true ? null : this.props.authedUser === null*/}
            {this.props.authedUser === null ? (
              <div>
                <Route component={Login} />
              </div>
            ) : (
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
                <Route path="/add" component={QuestionNew} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/logout" component={Logout} />
                <Route
                  path="/questions/:question_id"
                  component={QuestionRoute}
                  questions={this.props.questions}
                />
                <Route path="/404" component={PageNotFound} />
              </Switch>
            )}

            <Navbar
              className="navbar-fixed-bottom"
              bg="dark"
              expand="lg"
              variant="dark"
            >
              <Container>
                <NavbarBrand>
                  <div>
                    <h6> &copy; Copyright 2021 Valentina Olekhnovich</h6>
                    <h6>All rights reserved</h6>
                  </div>
                  <div>
                    <ul className="social-network social-circle">
                      <li><FontAwesomeIcon icon={faFacebook} /></li>
                      <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                      <li><FontAwesomeIcon icon={faTwitter} /></li>
                    </ul>
                  </div>
                </NavbarBrand>
              </Container>
            </Navbar>
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  console.log(authedUser);
  return {
    // loading: authedUser === null,
    authedUser,
  };
}

export default connect(mapStateToProps)(App);