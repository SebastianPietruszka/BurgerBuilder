import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Order</NavigationItem>
    </ul>
);

export default navigationItems;