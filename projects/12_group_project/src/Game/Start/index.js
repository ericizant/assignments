// /Game/Start/index.js

//dependencies
import React from 'react';

//components
import MenuSelect from '../MenuSelect';


//============[ "Start" component ]============//
//(start screen)

const Start = ({ start }) => (
    <MenuSelect
        active={true}
        onChoice={start}
        items={["Start Game"]}
        renderItem={item => <span>{item}</span>}>
    </MenuSelect>
)

export default Start;