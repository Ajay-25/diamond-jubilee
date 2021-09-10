import React from 'react';

//components
import { Image } from '../image';

type Props = {
  imageUrls: string[];
};

const Page = ({ imageUrls }: Props) => {
  const [cache, setCache] = React.useState({});

  const updateCache = React.useCallback(
    (index) => setCache((prevState) => ({ ...prevState, [index]: true })),
    []
  );

  return (
    <div style={{ padding: '4px 8px' }}>
      {imageUrls.map((url, index) => {
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
            count={imageUrls.length}
            style={{ margin: '4px 0' }}
          />
        );
      })}
    </div>
  );
};

export default React.memo(Page);
