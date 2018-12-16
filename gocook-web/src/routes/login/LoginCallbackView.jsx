// @flow
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Auth from "../../lib/auth";
import NAV_ROUTES from "../NAV_ROUTES";

type Props = {
    auth: Auth
}

const handleCallback = async (auth: Auth, history) => {
    await auth.handleLoginCallback();
    history.push(NAV_ROUTES.TODAY.path);
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