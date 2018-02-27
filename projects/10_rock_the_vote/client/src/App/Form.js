import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    clearInputs = () => {
        this.setState({
            inputs: {
                title: '',
                description: ''
            }
        })
    }
    handleSubmit = (e) => {
        let { add, id } = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs);
        }
        else {
            this.props.submit(this.state.inputs, id);
            this.props.options.toggleDisplay();
        }
    }

    render() {
        let { title, description } = this.state.inputs;
        return (
            <div className='form-wrapper'>
                <form>
                    <input className='form-title' onChange={this.handleChange} type="text" placeholder='Title' value={title} name='title' />
                    <input onChange={this.handleChange} type="text" placeholder='Description' value={description} name='description' />
                    <button type='submit' onClick={this.handleSubmit}>Submit Issue</button>
                </form>
            </div>
        )
    }
}

export default Form;