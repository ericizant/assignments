import React, { Component } from 'react';

import Form from './Form';
import Issue from './Issue';
import VoteCounter from './VoteCounter';

class IssuesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IssuesList: IssuesList
        };
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

export default IssuesList;