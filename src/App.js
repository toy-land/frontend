import React from 'react';

import { Switch, Route } from 'react-router-dom';

import P from '@pages';
import GlobalStyles from '@styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={P.LandingPage} />
        <Route exact path="/create" component={P.CreateToyPage} />
        <Route path="/detail/:id" component={P.DetailPage} />
      </Switch>
    </>
  );
}
