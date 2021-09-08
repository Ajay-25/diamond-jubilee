import React, { CSSProperties, memo } from 'react';
import ContentLoader from 'react-content-loader';

type Props = {
  className?: string;
  children?: (JSX.Element | null) | (JSX.Element | null)[];
  viewBox?: string;
  backgroundColorToken?: string;
  foregroundColorToken?: string;
  foregroundOpacity?: number;
  backgroundOpacity?: number;
  width: number | string;
  height: number | string;
  style?: CSSProperties;
  rtl?: boolean;
  animate?: boolean;
};

const DEFAULT_PROPS = {
  backgroundColorToken: '#F8F8FA',
  foregroundColorToken: '#EEEEEE',
  foregroundOpacity: 1,
  backgroundOpacity: 1,
};

const ContentTombstone = ({
  className,
  children,
  viewBox,
  height,
  width,
  backgroundColorToken = DEFAULT_PROPS.backgroundColorToken,
  foregroundColorToken = DEFAULT_PROPS.foregroundColorToken,
  backgroundOpacity = DEFAULT_PROPS.backgroundOpacity,
  foregroundOpacity = DEFAULT_PROPS.foregroundOpacity,
  style,
  rtl,
  animate = true,
}: Props): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={1}
      height={height}
      width={width}
      viewBox={
        viewBox ||
        (typeof width === 'number' && typeof height === 'number'
          ? `0 0 ${width} ${height}`
          : undefined)
      }
      backgroundColor={backgroundColorToken}
      foregroundColor={foregroundColorToken}
      foregroundOpacity={foregroundOpacity}
      backgroundOpacity={backgroundOpacity}
      className={className}
      style={{ ...style, display: 'block' }}
      rtl={rtl}
    >
      {children}
    </ContentLoader>
  );
};

export default memo(ContentTombstone);
