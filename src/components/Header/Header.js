import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar src="user" alt="user-avatar"/>
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search for new people!"/>
            </div>
            <div className="header__right">
                <HelpIcon />
            </div>
        </div>
    )
}

export default Header
