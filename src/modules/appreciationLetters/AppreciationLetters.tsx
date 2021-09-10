import React from 'react';

//components
import Page from '../../components/Page';

//constants
import { IMAGE_URLS } from '../../constants/appreciationLettersImages';

import { Image } from '../../image';

const AppreciationLetters = () => {
  const [cache, setCache] = React.useState({});

  const updateCache = React.useCallback(
    (index) => setCache((prevState) => ({ ...prevState, [index]: true })),
    []
  );

  return (
    <div>
      {IMAGE_URLS.map((url, index) => {
        const isLoaded = () => {
          updateCache(index);
        };

        return (
          <Image
            src={url}
            width="100%"
            height="100%"
            alt="Darshan Academy"
            key={url}
            isLoaded={isLoaded}
            cache={cache}
            index={index}
            count={IMAGE_URLS.length}
          />
        );
      })}
    </div>
  );
};

export { AppreciationLetters };
