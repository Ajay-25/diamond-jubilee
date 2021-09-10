import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//components
import { DarshanAcademy } from '../modules/darshanAcademy';
import { WelfareDuringCovidWaveTwo } from '../modules/welfareDuringCovidWaveTwo';
import { AppreciationLetters } from '../modules/appreciationLetters';

const DefaultPage = () => null;

const Home = () => {
  return (
    <Router>
      <Switch>
        [
        <Route path="/darshan-academy">
          <DarshanAcademy />
        </Route>
        <Route path="/welfare-in-covid-wave-2">
          <WelfareDuringCovidWaveTwo />
        </Route>
        <Route path="/appreciation-letters">
          <AppreciationLetters />
        </Route>
        <Route path="/">
          <DefaultPage />
        </Route>
        ]
      </Switch>
    </Router>
  );
};

export default Home;
