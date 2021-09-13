import React from 'react';
import Vimeo from '@u-wave/react-vimeo';

type Props = {
  src: string;
  title?: string;
};

const DefaultProps = {
  title: 'Vimeo Video',
};

const Video = (props: Props) => {
  const { src, title } = props;

  return (
    <Vimeo video={src} id={title} responsive autoplay showByline={false} loop />
  );
};

Video.defaultProps = DefaultProps;

export { Video };
