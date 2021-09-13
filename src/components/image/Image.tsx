import React from 'react';

//components
import ImageTombstone from './ImageTombstone';

//utils
import { _noop } from '../../utils';

type ImageProps = {
  className?: string;
  alt: string;
  disabled?: boolean;
  height: number | string;
  src: string;
  srcset?: string;
  width: number | string;
  style?: Object;
  isLoaded?: (loaded: boolean) => void;
  cache: Object;
  index: number;
  count: number;
};

const BaseImage = React.forwardRef<
  HTMLImageElement,
  Omit<ImageProps, 'cache' | 'index' | 'count'>
>((props, ref) => {
  return (
    <div id="image" style={{ lineHeight: '1px' }}>
      <img
        data-testid="image"
        ref={ref}
        style={{ objectFit: 'contain' }}
        {...props}
      />
    </div>
  );
});

BaseImage.displayName = 'Image';

const _Image = (props: ImageProps): React.ReactElement => {
  const { src, isLoaded, index, count, cache, ...restProps } = props;
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    const _shouldRender = index > 0 ? cache[index] && cache[index - 1] : true;
    setShouldRender(_shouldRender);
  }, [cache]);

  React.useEffect(() => {}, []);
  React.useEffect(() => {
    if (!src) {
      setImageLoaded(true);
      isLoaded?.(true);
      return _noop;
    }

    setImageLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = (): void => {
      setImageLoaded(true);
      isLoaded?.(true);
    };
    img.onerror = (): void => {
      setImageLoaded(true);
      isLoaded?.(true);
    };

    return (): void => {
      img.onload = _noop;
      img.onerror = _noop;
    };
  }, [src]);

  return imageLoaded && shouldRender ? (
    <BaseImage src={src} {...restProps} />
  ) : (
    <ImageTombstone {...restProps} />
  );
};

export { _Image as Image };
