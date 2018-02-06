import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBounty } from '../../redux/bounty';
import Form from '../../shared/Form';
import '../../index.css';

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounty: {},
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        let { firstName, lastName, bountyPrice, forceType, living, _id, deleteBounty } = this.props;
        if (this.state.isEditing) {
            return (
                <div className='edit-form'>
                    <Form {...this.props} options={{ toggle: this.toggleEdit }} />
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )
        }

        return (
            <div className='bounty-display'>
                <h2>Name: {firstName} {lastName}</h2>
                <br />
                <h3>Reward: ${bountyPrice}</h3>
                <h3>Force Type: {forceType}</h3>
                <h3>Dead/Alive: {living ? 'Dead' : 'Alive'}</h3>
                <br />
                <button onClick={this.toggleEdit}>Edit</button>
                <button onClick={() => deleteBounty(_id)}>Delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteBounty })(Bounty);