import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    render() {
        const { users } = this.props
        console.log("Dictionary:", users)
        console.log("Array:", Object.values(users))
        return (
            //https://react-bootstrap.github.io/components/forms/
            //TBD <Form  onSubmit={this.handleSelection}>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control as="select">
                    <option disabled value='Select'>Select user</option>
                    {Object.values(users).map((user) => 
                    (
                    <option key={user.id}> {user.name} </option>
                    ))
                    }
                </Form.Control>

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        )
    }
}

function mapStateToProps({ users}) {
    console.log("Krya:", users)
    return{
        users    
    }
}

export default connect(mapStateToProps)(Login);