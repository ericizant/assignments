//App/views/Landing//SignUp/SignUpForm/index.js

//dependencies
import React, { Component } from 'react';
import {connect}  from "react-redux";
import {signup} from "../../../../redux/auth/auth";

//styling
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
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
        // This is where we will call our signup function from redux
        this.props.signup(this.state.inputs);
        console.log(this.state.inputs);
        this.clearInputs();
    }
    render() {
        return (
            <div className="SignUpForm-wrapper">
                <form className='regForm-container' onSubmit={this.handleSubmit}>
                    <h2 className='regForm-title'>Scrap or Die!!!</h2>
                    <h3 className='regForm-subtitle'>Sign up today -- it's free.</h3>
                    <div className='regForm-inputs'>
                        <label htmlFor='firstName'>Username</label>
                        <input onChange={this.handleChange} value={this.username} name="username" type='text' />
                        <label htmlFor='password'>Password (8 or more characters)</label>
                        <input onChange={this.handleChange} value={this.password} name="password" type='password' />
                        <span className='agreement'>By clicking Join now, you agree to the BitClock User Agreement, Privacy Policy, and Cookie Policy.</span>
                        <input className='reg-button' type='submit' value='Join Now' />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(state => state, {signup}) (SignUpForm);