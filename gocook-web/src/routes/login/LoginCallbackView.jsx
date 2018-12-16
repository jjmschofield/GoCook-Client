// @flow
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Auth from "../../lib/auth/Auth";
import { ROUTES } from "../../routes";

type Props = {
    auth: Auth
}

const handleCallback = async (auth: Auth, history) => {
    await auth.handleLoginCallback();
    history.push(ROUTES.BROWSE);
};

const LoginCallbackView = (props: Props) => {

    handleCallback(props.auth, props.history);

    return (
        <div>
            <CircularProgress size={80}/>
        </div>
    );
};

export default LoginCallbackView;