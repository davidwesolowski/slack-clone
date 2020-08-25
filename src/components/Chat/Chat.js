import React, { useState, useEffect, useRef } from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';
import './Chat.css';

const Chat = () => {

    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    const messagesRef = useRef(null);

    useEffect(() => {
        
        db.collection('rooms').doc(id).onSnapshot(snapshot => setRoomDetails(snapshot.data()));
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())));
        console.log(messagesRef.current.scrollHeight)

        messagesRef.current.scrollTop = 2255
        
    }, [id]);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages" ref={messagesRef}>
                {
                    roomMessages.map(({ message, timestamp, user, userImage }) => <Message key={timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />)
                }
            </div>
            <ChatInput id={id} messagesRef={messagesRef}/>
        </div>
    )
}

export default Chat
