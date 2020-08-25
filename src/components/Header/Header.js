import React from 'react'
import { Avatar } from '@material-ui/core';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar src="user" alt="user-avatar"/>
            </div>
        </div>
    )
}

export default Header
