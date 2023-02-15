import clsx from 'clsx';
const { CldImage } = require('next-cloudinary');

type Props = {
  width: string;
  height: string;
  src: string;
  className: string;
  alt: string;
};

export const CloudinaryImage = ({
  width,
  height,
  src,
  className,
  alt,
}: Props) => {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      className={clsx('rounded-lg', className)}
      alt={alt}
    />
  );
};
