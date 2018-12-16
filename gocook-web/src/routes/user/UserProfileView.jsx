import React from 'react';

import LogoutButton from '../../components/inputs/LogoutButton';

const UserProfileView = ({auth}) => {
    return (
        <React.Fragment>
            <h1>Profile</h1>
            <LogoutButton auth={auth}/>
        </React.Fragment>

    );
};

export default UserProfileView;