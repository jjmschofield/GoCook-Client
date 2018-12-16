import React from 'react';

export default (ComposedComponent, auth) => {
    class AuthRestricted extends React.Component{
        constructor(props){
            super(props);
        }

        componentDidMount() {
            this.assertAuthenticated();
        }

        componentDidUpdate() {
            this.assertAuthenticated();
        }

        assertAuthenticated() {
            if(!auth.isAuthenticated()){
                auth.login();
            }
        }

        render() {
            if(auth.isAuthenticated()){
                return <ComposedComponent auth={auth} {...this.props} />
            }

            return null;
        }
    }

    return AuthRestricted
}
