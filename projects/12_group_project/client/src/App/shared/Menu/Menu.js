import React from 'react';

import './Menu.css';

//import CommandButtons from './CommandButtons/CommandButtons';
import MenuBoxes from './MenuBoxes/MenuBoxes';

const Menu = () => (
    <div className='menu-wrapper'>
        {/* <CommandButtons /> */}
        <MenuBoxes />
    </div>
)

export default Menu;