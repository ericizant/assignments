import React, { Component } from 'react';
import axios from 'axios';

import IssuesList from './IssuesList';

const issuesUrl = "http://localhost:8080";

class IssueData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            loading: true,
            err: false,
            errMsg: ""
        }
    }

    componentDidMount() {
        axios.get(issuesUrl)
            .then((response) => {
                let { results } = response.data;
                this.setState({
                    issues: results,
                    loading: false,
                })
            })

            .catch((err) => {
                this.setState({
                    loading: false,
                    err: true,
                    errMsg: err.message
                })
            })
    }

    getIssues() {
        axios.get(issuesUrl)
            .then(response => {
                this.setState({
                    issues: response.data
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
    
    render() {
        let { issues, loading, err, errMsg } = this.state;
        return (
            loading ?
                <div>
                    <h1>page loading...</h1>
                </div>
                :
                err ?
                    <div>
                        <p>Sorry, your data is temporarily unavailable. Please try again.</p>
                        <p>{errMsg}</p>
                    </div>
                    :
                    <div>
                        {IssueData.map((IssuesList, i) => {
                            let { title, description, voteCount } = IssuesList;
                            return <IssuesList key={i} title={title} description={description}></IssuesList>
                        })}
                    </div>
        )
    }
}

export default IssueData;