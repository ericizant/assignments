// App/views/Landing/Login/index.js

//dependencies
import React, {Component} from 'react';
import {connect}  from "react-redux";
import {withRouter} from "react-router-dom";
import {login} from "../../../../redux/auth/auth";

//styling
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
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
        this.props.login(this.state.inputs, this.props.history);
        this.clearInputs();
    }
    render(){
        return (
            <div className="LoginForm-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.username}
                        name="username"
                        type="text"
                        placeholder="@Username" />
                    <input
                        onChange={this.handleChange}
                        value={this.password}
                        name="password"
                        type="password"
                        placeholder="#" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(state => state, {login})(LoginForm));