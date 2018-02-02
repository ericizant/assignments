import React from 'react';

import EditForm from './EditForm';
import VoteCounter from '../VoteCounter';

import './EditForm/EditForm.css';

function Issue(props) {
    let { title, description, voteCount, deleteIssue, editIssue, index } = props;
    return (
        <div className='editForm-wrapper'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{voteCount}</p>
            <VoteCounter />
            <div>
                <button onClick={() => deleteIssue(index)}>Delete</button>
                <button onClick={() => editIssue(index)}>Edit</button>
                <EditForm {...props}></EditForm>
            </div>
        </div>
    )
}

export default Issue;