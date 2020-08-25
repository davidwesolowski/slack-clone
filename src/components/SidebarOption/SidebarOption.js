import React from 'react';
import db from '../../firebase';
import './SidebarOption.css';

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {

    const addChannel = () => {
        const channelName = prompt('Eneter your channel name:');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            });
        }
    };

    return (
        <div className="sidebarOption">
            {
                Icon && <Icon className="sidebarOption__icon"/>
            }
            {
                Icon ? 
                    (<h3>{title}</h3>) 
                : 
                <h3 className="sidebarOption__channel">
                    <span className="sidebarOption__hash">#</span>{title}
                </h3>
            } 
        </div>
    )
}

export default SidebarOption
