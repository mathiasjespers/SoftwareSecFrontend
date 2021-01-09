import React from 'react';
import './Game.css'
import ClickButton from './ClickButton'
import { useAuth0 } from '@auth0/auth0-react';

const Game = () => {

    const { user, isAuthenticated } = useAuth0();

    if (isAuthenticated)    {
        return  (
            <div>
                <div id="content">
                    <ClickButton seconds={[5.0, 10.0, 30.0]} />
                </div>
            </div>
        );
    }
    else {
        return  (
            <div>
                <div id="content">
                    <ClickButton seconds={[5.0, 10.0, 30.0]} />
                </div>
                <div className="noLoginGameContainer">
                    <h5 className="noLoginGame">Reminder: you have to be logged if you want your highscore to be saved!</h5>
                </div>
            </div>
        );
    }
}

export default Game;
