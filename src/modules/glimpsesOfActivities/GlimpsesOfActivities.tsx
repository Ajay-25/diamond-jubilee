import React from 'react';

//components
import { Video } from '../../components/video';

const URL = 'https://vimeo.com/603676092/63fa9b907e';

const GlimpsesOfActivities = () => (
  <Video src={URL} title="Glimpses of Activities" />
);

export { GlimpsesOfActivities };
