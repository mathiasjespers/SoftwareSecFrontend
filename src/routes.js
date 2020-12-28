import React from 'react';
import GameView from './views/game';
import Ranking from './views/ranking';
import ProfileView from './views/profile';
import Navbar from './components/navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/Game" component={GameView} />
        <Route exact path="/">
          <Redirect to="/Game" />
        </Route>
        <Route exact path="/Ranking" component={Ranking} />
        <Route exact path="/Profile" component={ProfileView} />
      </Switch>
    </div>
  );
};
