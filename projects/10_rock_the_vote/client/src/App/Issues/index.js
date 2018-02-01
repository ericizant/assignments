import React, { Component } from 'react';

import Form from './Form';
import Issue from './Issue';
import VoteCounter from './VoteCounter'

import issues from '../../shared/issues.json';

class Issues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: issues
        }
        this.deleteIssue = this.deleteIssue.bind(this);
        this.editIssue = this.editIssue.bind(this);
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
        let { issues } = this.state;
        return (
            <div>
                {issues.map((issue, i) => {
                    return (
                        <div>
                            <Issue index={i} editIssue={this.editIssue} deleteIssue={this.deleteIssue} key={i}{...issue}>
                                <VoteCounter />
                            </Issue>
                        </div>
                    )
                })}
                <Form submit={this.addIssue}></Form>
            </div>
        )
    }
}

export default Issues;