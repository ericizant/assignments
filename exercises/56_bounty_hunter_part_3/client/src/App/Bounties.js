import React, { Component } from 'react';
import axios from 'axios';

import Bounty from './Bounty';

const bountiesUrl = 'http://localhost:8080/bounties';

class Bounties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: []
        }
    }

    componentDidMount() {
        axios.get(bountiesUrl)
            .then(response => {
                this.setState({
                    bounties: response.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        let { bounties } = this.state;
        return (
            <div>
                {bounties.map(bounty => {
                    return <Bounty {...bounty} />
                })}
            </div>
        )
    }
}

export default Bounties;