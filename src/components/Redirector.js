import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Redirector extends React.Component {

  render() {
    const { authedUser, currentLocation} = this.props;
    return (
        <Fragment>
            {authedUser === null ? (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { referrer: currentLocation },
                    }}
                />
            ) : (null)
            } 
        </Fragment>
    ) 
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Redirector);