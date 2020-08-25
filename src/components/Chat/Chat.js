import React, { useState, useEffect } from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './Chat.css';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';

const Chat = () => {

    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);
    useEffect(() => {
        db.collection('rooms').doc(id).onSnapshot(snapshot => setRoomDetails(snapshot.data()));
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
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
            <div className="chat__messages">
                {
                    roomMessages.map(({ message, timestamp, user, userImage }) => <Message key={timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />)
                }
            </div>
            <ChatInput id={id}/>
        </div>
    )
}

export default Chat
