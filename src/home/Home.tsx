import React from 'react';

//components
import { Image } from '../image';

//constants
import { IMAGE_ORDER, IMAGE_URLS } from '../constants/darshanAcademyImages';

const Home = () => {
  return (
    <div>
      {IMAGE_ORDER.map((order) => {
        const src = IMAGE_URLS[String(order)];

        return (
          <Image
            src={src}
            width="100%"
            height="100%"
            alt="darshan academy"
            key={src}
          />
        );
      })}
    </div>
  );
};

export default Home;
