import React from 'react';

import { Switch, Route } from 'react-router-dom';

import P from '@pages';
import GlobalStyles from '@styles/globalStyles';
// import DetailPage from '@/pages/DetailPage';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={P.LandingPage} />
        <Route path="/create" component={P.CreatePgae} />
        {/* <Route exact path="/detail:id" component={DetailPage} /> */}
      </Switch>
    </>
  );
}
