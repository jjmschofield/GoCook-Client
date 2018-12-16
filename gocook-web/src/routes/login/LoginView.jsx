// @flow
import React from 'react';
import Auth from '../../lib/auth';

type Props = {
    auth: Auth,
};

const LoginView = (props: Props) => {
    props.auth.login();
    return null;
};

export default LoginView;