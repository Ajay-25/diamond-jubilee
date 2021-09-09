import React from 'react';

//components
import { Image } from '../image';

//constants
import { IMAGE_ORDER, IMAGE_URLS } from '../constants/darshanAcademyImages';

const Home = () => {
  const [cache, setCache] = React.useState({});

  const updateCache = React.useCallback(
    (index) => setCache((prevState) => ({ ...prevState, [index]: true })),
    []
  );

  return (
    <div>
      {IMAGE_ORDER.map((order, index) => {
        const src = IMAGE_URLS[String(order)];
        const isLoaded = () => {
          updateCache(index);
        };

        return (
          <Image
            src={src}
            width="100%"
            height="100%"
            alt="darshan academy"
            key={src}
            isLoaded={isLoaded}
            cache={cache}
            index={index}
            count={IMAGE_ORDER.length}
          />
        );
      })}
    </div>
  );
};

export default Home;
