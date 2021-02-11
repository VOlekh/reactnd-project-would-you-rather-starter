import React, { Component } from "react";
import { connect } from "react-redux";
import { HamdleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(HamdleInitialData());
  }

  render() {
    return <div>Hallo world!</div>;
  }
}

export default connect()(App);
