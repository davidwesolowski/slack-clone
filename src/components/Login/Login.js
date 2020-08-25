import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png" alt="logo"/>
                <h2>Sign in to my slack clone app</h2>
                <Button>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login;
