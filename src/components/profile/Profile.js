import React from 'react';
import './Profile.css'
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated)    {
        return  (
            <div className='container'>
                <img src={user.picture} alt={user.name} />
                <h3>Name: <strong>{user.name}</strong></h3>
                <h3>Nickname: <strong>{user.nickname}</strong></h3>
                <h3>Email: <strong>{user.email}</strong></h3>
            </div>
        );
    }
    else    {
        return  (
            <div className="noLoginContainer">
                <h3 className="noLogin">Please log in to access your profile information</h3>
            </div>
        );
    }
}

export default Profile;
