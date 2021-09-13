import React from 'react';

//components
import { Video } from '../../components/video';

const URL = 'https://vimeo.com/603676016/61f83a8a49';

const FreeVaccinationCamps = () => (
  <Video src={URL} title="Free Vaccination Camps" />
);

export { FreeVaccinationCamps };
