import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

const Message = ({ message, userImage, user, timestamp }) => {

    return (
        <div className="message">
            <Avatar src={userImage} alt="user-avatar"/>
            <div className="message__info">
                <h4>
                    {user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
