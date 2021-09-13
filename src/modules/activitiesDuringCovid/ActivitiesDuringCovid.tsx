import React from 'react';

//components
import { Video } from '../../components/video';

const URL = 'https://vimeo.com/603662193/713886b6db';

const ActivitiesDuringCovid = () => (
  <Video src={URL} title="Activities During Covid" />
);

export { ActivitiesDuringCovid };
