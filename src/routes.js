import React from 'react';
import Game from './views/game';
import Ranking from './views/ranking';
import Profile from './views/profile';
import Navbar from './components/navbar/Navbar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/Game" component={Game} />
        <Route exact path="/">
          <Redirect to="/Game" />
        </Route>
        <Route exact path="/Ranking" component={Ranking} />
        <Route exact path="/Profile" component={Profile} />
      </Switch>
    </div>
  );
};