import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//components - images
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

//components - videos
import { TreePlantationInitiative } from '../modules/treePlantationInitiative';
import { WelfareActivities } from '../modules/welfareActivities';
import { WelfareDuringCovidWave } from '../modules/welfareDuringCovidWave';
import { InreachActivities } from '../modules/inreachActivities';
import { OutreachActivities } from '../modules/outreachActivities';
import { SeventiethBdayCelebrations } from '../modules/seventiethBdayCelebrations';
import { CentersInauguration } from '../modules/centersInauguration';
import { ChabeelPrograms } from '../modules/chabeelPrograms';
import { CleanlinessDrives } from '../modules/cleanlinessDrives';
import { FreeVaccinationCamps } from '../modules/freeVaccinationCamps';
import { GlimpsesOfActivities } from '../modules/glimpsesOfActivities';
import { MiddleEastCenters } from '../modules/middleEastCenters';
import { SewaMoments } from '../modules/sewaMoments';
import { SilaiCenters } from '../modules/silaiCenters';
import { ActivitiesDuringCovid } from '../modules/activitiesDuringCovid';
import { MaharajJiTourToBahrain } from '../modules/maharajJiTourToBahrain';
import { MaharajJiTourToUAE } from '../modules/maharajJiTourToUAE';

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
        <Route path="/tree-plantation-initiative">
          <TreePlantationInitiative />
        </Route>
        <Route path="/seventieth-bday-celebrations">
          <SeventiethBdayCelebrations />
        </Route>
        <Route path="/centers-inauguration">
          <CentersInauguration />
        </Route>
        <Route path="/chabeel-programs">
          <ChabeelPrograms />
        </Route>
        <Route path="/cleanliness-drives">
          <CleanlinessDrives />
        </Route>
        <Route path="/free-vaccination-camps">
          <FreeVaccinationCamps />
        </Route>
        <Route path="/glimps-of-activities">
          <GlimpsesOfActivities />
        </Route>
        <Route path="/middle-east-centers">
          <MiddleEastCenters />
        </Route>
        <Route path="/sewa-moments">
          <SewaMoments />
        </Route>
        <Route path="/silai-centers">
          <SilaiCenters />
        </Route>
        <Route path="/welfare-in-covid-wave">
          <WelfareDuringCovidWave />
        </Route>
        <Route path="/activities-during-covid">
          <ActivitiesDuringCovid />
        </Route>
        <Route path="/inreach-activities">
          <InreachActivities />
        </Route>
        <Route path="/maharj-ji-tour-bahrain">
          <MaharajJiTourToBahrain />
        </Route>
        <Route path="/maharj-ji-tour-uae">
          <MaharajJiTourToUAE />
        </Route>
        <Route path="/outreach-activities">
          <OutreachActivities />
        </Route>
        <Route path="/welfare-activities">
          <WelfareActivities />
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
