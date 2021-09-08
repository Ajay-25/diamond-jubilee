import React from 'react';
import { ContentTombstone } from '../contentTombstone';

type Props = {
  width: number | string;
  height: number | string;
  className?: string;
  style?: Object;
};

const ImageTombstone = ({ width, height, className, style }: Props) => {
  return (
    <div
      id="tombstone"
      style={{
        width: width ? `${width}px` : '100%',
        height: '400px',
      }}
    >
      <ContentTombstone
        width={width}
        height={height}
        animate
        className={className}
        style={style}
      >
        <rect x="0" y="0" width="100%" height="100%" />
      </ContentTombstone>
    </div>
  );
};

export default ImageTombstone;
