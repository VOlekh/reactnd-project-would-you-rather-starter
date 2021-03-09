import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';

class Logout extends Component {
    state = {
        redirect: false
    }

    render() {

        return (
            <div>
                <h3 className="center">Logout</h3>
                <Card>
                    <Card.Body>
                    <div className="center">
                        <h3>You are logged out</h3>
                    
                    </div>
                    </Card.Body>
                </Card>    
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Logout);