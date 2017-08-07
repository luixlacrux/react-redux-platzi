import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home.jsx'
import Post from './Post.jsx'
import Profile from './Profile.jsx'
import Error404 from './Error404.jsx'

function Pages() {
  return (
    <main role='application'>
      <Switch>
        {/* Homepage */}
        <Route
          path='/'
          exact
          component={Home}
        />
        {/* Post Detail */}
        <Route
          path='/post/:id'
          exact
          component={Post}
        />
        {/* User's Profile */}
        <Route
          path='/user/:id'
          exact
          component={Profile}
        />
        {/*Error 404*/}
        <Route component={Error404} />      
      </Switch>
    </main>
  );
}

export default Pages;