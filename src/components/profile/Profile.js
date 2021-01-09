import React from 'react';
import './Profile.css'
import { withAuth0 } from '@auth0/auth0-react';
import { getScore } from './../../API_calls/API_calls'

class Profile extends React.Component {
    state = {
        highscore: 0
    }

    async componentDidMount(){
        const { user, isAuthenticated } = this.props.auth0;

        this.setState({ highscore: await getScore(user.sub) });
        console.log(this.state.highscore);
    }

    render()    {
        const { user, isAuthenticated } = this.props.auth0;

        if (isAuthenticated)    {
            return  (
                <div className='container'>
                    <img src={user.picture} alt={user.name} />
                    <h3>Name: <strong>{user.name}</strong></h3>
                    <h3>Nickname: <strong>{user.nickname}</strong></h3>
                    <h3>Email: <strong>{user.email}</strong></h3>
                    <h3>Highscore: <strong>{this.state.highscore}</strong></h3>
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
}

export default withAuth0(Profile);
