import React, { useState, useEffect } from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import './Chat.css';

const Chat = () => {

    const { id } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        db.collection('rooms').doc(id).onSnapshot(snapshot => setRoomDetails(snapshot.data()));
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
        </div>
    )
}

export default Chat
