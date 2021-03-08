import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';

class Logout extends Component {
    state = {
        redirect: false
    }

    render() {

        return (
            <Card>
                <Card.Body>
                <div className="center">
                    <h3>You are logged out</h3>
                   
                </div>
                </Card.Body>
            </Card>    
         
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Logout);