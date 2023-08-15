import React from "react";

import classes from './Topbar.module.css'

const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}>
            <img src='https://cdn4.iconfinder.com/data/icons/orange-social-icons/128/amazon.png' alt='amazon logo' />
            </nav>
        </header>
    )
}

export default Topbar;