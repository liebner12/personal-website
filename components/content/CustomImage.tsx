import Image from 'next/image';

type CloudinaryImgType = {
  src: string;
  height: number;
  width: number;
  alt: string;
  title?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'figure'>;

export function CustomImage({
  src,
  height,
  width,
  alt,
  title,
  className,
  style,
  ...rest
}: CloudinaryImgType) {
  return (
    <figure
      className={`overflow-hidden rounded ${
        width <= 800 && 'mx-auto w-full'
      } ${className}`}
      style={{
        ...(width <= 800 && { maxWidth: width }),
        ...style,
      }}
      {...rest}
    >
      <Image
        width={width}
        height={height}
        src={src}
        alt={alt}
        title={title || alt}
      />
    </figure>
  );
}
