import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//components
import { DarshanAcademy } from '../modules/darshanAcademy';
import { WelfareDuringCovidWaveTwo } from '../modules/welfareDuringCovidWaveTwo';
import { AppreciationLetters } from '../modules/appreciationLetters';
import { AudioVideoInsights } from '../modules/audioVideoInsights';
import { BookFairs } from '../modules/bookFairs';
import { BooksInPublicLibraries } from '../modules/booksInPublicLibraries';
import { DisasterRelief } from '../modules/disasterRelief';
import { OutreachWorkshops } from '../modules/outreachWorkshops';
import { PressAndMediaCoverage } from '../modules/pressAndMediaCoverage';
import { SocialWelfare } from '../modules/socialWelfare';
import { YoungAdults } from '../modules/youngAdults';
import { GlimpsesOfMastersLives } from '../modules/glimpsesOfMastersLives';
import { SKRMZones } from '../modules/skrmZones';

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
        <Route path="/audio-video-insights">
          <AudioVideoInsights />
        </Route>
        <Route path="/book-fairs">
          <BookFairs />
        </Route>
        <Route path="/books-in-public-libraries">
          <BooksInPublicLibraries />
        </Route>
        <Route path="/disaster-relief">
          <DisasterRelief />
        </Route>
        <Route path="/outreach-workshops">
          <OutreachWorkshops />
        </Route>
        <Route path="/press-and-media-coverage">
          <PressAndMediaCoverage />
        </Route>
        <Route path="/social-welfare">
          <SocialWelfare />
        </Route>
        <Route path="/young-adults">
          <YoungAdults />
        </Route>
        <Route path="/glimps-of-masters-life">
          <GlimpsesOfMastersLives />
        </Route>
        <Route path="/SKRM-Zones">
          <SKRMZones />
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
