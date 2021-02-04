import React from 'react';

import { Switch, Route } from 'react-router-dom';

import P from '@pages';
// import DetailPage from '@/pages/DetailPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={P.LandingPage} />
      {/* <Route exact path="/detail:id" component={DetailPage} /> */}
    </Switch>
  );
}
