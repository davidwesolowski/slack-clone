import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { setUser } from '../../actions/userActions';
import './Login.css';

const Login = () => {

    const { dispatch } = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(response => dispatch(setUser(response.user)))
            .catch(alert)
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1024px-Slack_icon_2019.svg.png" alt="logo"/>
                <h2>Sign in to my slack clone app</h2>
                <Button onClick={signIn}>Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login;
