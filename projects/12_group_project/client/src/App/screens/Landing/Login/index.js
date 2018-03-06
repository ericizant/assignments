// App/views/Landing/Login/index.js

//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../../redux/auth/auth';

//components
import LoginForm from './LoginForm.js';


//styling
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }

    }

    handleChange(e) {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // This is where we will call our signin function from redux
        this.props.login(this.state.inputs)
        this.clearInputs();
    }

    render() {
        return (
            <div className='login-wrapper'>
                <LoginForm />
            </div>
        )
    }
}

export default connect(state => state, { login })(Login);