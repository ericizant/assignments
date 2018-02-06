import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postBounty, updateBounty } from '../redux/bounty';
import '../index.css';

class Form extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, bountyPrice, forceType, living } = props;
        this.state = {
            inputs: {
                firstName: firstName || '',
                lastName: lastName || '',
                bountyPrice: bountyPrice || '',
                forceType: forceType || 'Jedi',
                living: living || true
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === 'checkbox' ? checked : value
                }
            }
        })
    }

    handleSubmit(e) {
        let { _id, add, postBounty, updateBounty, clear, options } = this.props;
        e.preventDefault();
        if (add) {
            postBounty(this.state.inputs);
        } else {
            updateBounty(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                bountyPrice: '',
                forceType: '',
                living: ''
            }
        })
    }

    render() {
        let { firstName, lastName, bountyPrice } = this.state.inputs;
        return (
            <div className='form-wrapper'>
                <h1>Bounty List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='firstName' value={firstName} type='text' placeholder='First Name' />
                    <br />
                    <input onChange={this.handleChange} name='lastName' value={lastName} type='text' placeholder='Last Name' />
                    <br />
                    <input onChange={this.handleChange} name='bountyPrice' value={bountyPrice} type='number' placeholder='Bounty Price' />
                    <br />
                    <label>
                        Force Type:
                        <input onChange={this.handleChange} name='forceType' value='Jedi' type='radio' /> Jedi
                        <input onChange={this.handleChange} name='forceType' value='Sith' type='radio' /> Sith
                    </label>
                    <br />
                    <label>
                        Dead or Alive:
                        <input onChange={this.handleChange} name='living' value='Dead' type='radio' />Dead
                        <input onChange={this.handleChange} name='living' value='Alive' type='radio' />Alive
                    </label>
                    <br />
                    <button>Submit</button>
                    <br />
                </form>
                <br />
            </div>
        )
    }
}

export default connect(null, ({ postBounty, updateBounty }))(Form);