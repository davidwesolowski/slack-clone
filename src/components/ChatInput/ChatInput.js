import React, { useState } from 'react';
import './ChatInput.css';
import { TextField, Button } from '@material-ui/core';

const ChatInput = () => {

    const [input, setInput] = useState('');

    const handleOnChange = (event) => {
        if (event.target) setInput(event.target.value);
    }

    return (
        <div className="chatInput">
            <form>
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
