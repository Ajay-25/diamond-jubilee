import React from 'react';

//components
import { Video } from '../../components/video';

const URL = 'https://vimeo.com/603676553/590a8ec8d1';

const ActivitiesDuringCovid = () => (
  <Video src={URL} title="Activities During Covid" />
);

export { ActivitiesDuringCovid };
