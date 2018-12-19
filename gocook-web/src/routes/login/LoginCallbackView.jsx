// @flow
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Auth from "../../lib/auth/Auth";
import { ROUTES } from "../../routes";
import MainContent from "../../components/sections/MainContent";

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
        <MainContent>
            <CircularProgress size={80}/>
        </MainContent>
    );
};

export default LoginCallbackView;