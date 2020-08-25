import React, { useState } from 'react';
import firebase from 'firebase';
import { TextField, Button } from '@material-ui/core';
import db from '../../firebase';
import './ChatInput.css';
import { useStateValue } from '../../StateProvider';

const ChatInput = ({ id }) => {

    const [input, setInput] = useState('');
    const { state: { user } } = useStateValue();

    const handleOnChange = (event) => {
        if (event.target) setInput(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (input) {
            db.collection('rooms').doc(id).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            });
            setInput('');
        }
    }

    return (
        <div className="chatInput">
            <form onSubmit={handleOnSubmit}>
                <TextField      placeholder="Enter your message..."
                value={input}
                onChange={handleOnChange}
                />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}

export default ChatInput
