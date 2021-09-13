//@ts-nocheck
import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

type Props = {
  src: string;
  title?: string;
};

const DefaultProps = {
  title: 'Vimeo Video',
};

const CONTAINER_STYLES = {
  position: 'relative',
  height: '100%',
};

const IFRAME_STYLES = {
  width: '100%',
  height: '100vh',
};

const Video = (props: Props) => {
  const { src, title } = props;
  const link = src.split('/');

  const head = link[3];
  const tail = link[4];

  return (
    <div style={CONTAINER_STYLES}>
      <iframe
        src={`https://player.vimeo.com/video/${head}?byline=0&amp;speed=0&amp;autoplay=1&amp;loop=1&amp;app_id=122963&amp;h=${tail}`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        style={IFRAME_STYLES}
        title={title}
        data-ready="true"
      />
    </div>
  );
};

Video.defaultProps = DefaultProps;

export { Video };
