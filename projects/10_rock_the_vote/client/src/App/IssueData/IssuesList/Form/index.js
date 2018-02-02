import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: props.title || '',
                description: props.description || '',
                voteCount: props.voteCount || 0,
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e) {
        this.props.submit(this.state.inputs, this.props.index);
        this.clearInputs();
    }

    deleteIssue(i) {
        this.setState((prevState) => {
            let newIssues = [...prevState.issues];
            newIssues.splice(i, 1);
            return {
                items: newIssues
            }
        })
    }

    editIssue(editedIssue, i) {
        this.setState((prevState) => {
            let newIssues = [...prevState.issues];
            newIssues[i] = editedIssue;
            return {
                items: newIssues
            }
        })
    }

    render() {
        let { title, description, voteCount } = this.state.inputs;
        return (
            <div className='form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={title} name='title' type='text' placeholder='Title' />
                    <input onChange={this.handleChange} value={description} name='description' type='text' placeholder='Description' />
                    <input onChange={this.handleChange} value={voteCount} name='voteCount' type='number' placeholder='Vote Count' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
};

export default Form;