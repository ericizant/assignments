import React from 'react';

const Bounty = (props) => {
    let { firstName, lastName, bountyPrice, type, living } = props;
    return (
        <div>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{bountyPrice}.00</p>
            <p>{type}</p>
            <p>{living}</p>
            <button>Enter</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Bounty;