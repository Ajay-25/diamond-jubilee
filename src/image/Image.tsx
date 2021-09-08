import React from "react";

//components
import ImageTombstone from "./ImageTombstone";

//utils
import { _noop } from "../utils";

type ImageProps = {
  className?: string;
  alt: string;
  disabled?: boolean;
  height: number | string;
  src: string;
  srcset?: string;
  width: number | string;
  style?: Object;
};

const BaseImage = React.forwardRef<HTMLImageElement, ImageProps>(
  (props, ref) => {
    return (
      <div data-spaceweb="image" style={{ lineHeight: "1px" }}>
        <img
          data-testid="image"
          ref={ref}
          style={{ objectFit: "contain" }}
          {...props}
        />
      </div>
    );
  }
);

BaseImage.displayName = "Image";

const _Image = (props: ImageProps): React.ReactElement => {
  const { src, ...restProps } = props;
  const [imageLoaded, setImageLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!src) {
      setImageLoaded(true);
      return _noop;
    }

    setImageLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = (): void => setImageLoaded(true);
    img.onerror = (): void => setImageLoaded(true);

    return (): void => {
      img.onload = _noop;
      img.onerror = _noop;
    };
  }, [src]);

  return imageLoaded ? (
    <BaseImage src={src} {...restProps} />
  ) : (
    <ImageTombstone {...restProps} />
  );
};

export { _Image as Image };
