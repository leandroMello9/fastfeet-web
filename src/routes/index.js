import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import DashBoard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Deliveryman from '../pages/Deliveryman';
import Recipient from '../pages/Recipient/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={DashBoard} isPrivet />
      <Route path="/deliveryman" component={Deliveryman} />
      <Route path="/recipient" component={Recipient} />
    </Switch>
  );
}
