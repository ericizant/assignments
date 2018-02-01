import React, { Component } from 'react';
import axios from 'axios';

const bountiesUrl = 'http://localhost:8080/bounties';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                bountyPrice: '',
                type: '',
                living: false
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        if (name === 'living') {
            if (value === 'true') {
                value = true;
            } else {
                value = false;
            }
        }
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
        console.log(this.state.inputs);
    }

    handleSubmit(e) {
        let bounty = this.state.inputs
        e.preventDefault();
        axios.post(bountiesUrl, bounty)
            .then(response => {
                console.log('response:', response);
            })
            .catch(err => {
                console.error(err);
            })
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                bountyPrice: '',
                type: '',
                living: false
            }
        })
    }

    render() {
        let { firstName, lastName, bountyPrice } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit} className='form-wrapper'>
                <input onChange={this.handleChange} name='firstName' value={firstName} type='text' placeholder='First Name' />
                <input onChange={this.handleChange} name='lastName' value={lastName} type="text" placeholder="Last Name" />
                <input onChange={this.handleChange} name="bountyPrice" value={bountyPrice} type="number" placeholder="Bounty Price" />
                <label>
                    Side:
                    <input onChange={this.handleChange} type="radio" name="type" value="Jedi" /> Jedi
                    <input onChange={this.handleChange} type="radio" name="type" value="Sith" /> Sith
                </label>
                <label>
                    Still Living?
                    <input onChange={this.handleChange} type="radio" name="living" value='true' />   True
                    <input onChange={this.handleChange} type="radio" name="living" value='false' />   False
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        )
    }
}

export default Form;