import Image from 'next/image';

type Props = {
  images: Array<{ image: string; alt: string }>;
};

export const ImagesGrid = ({ images }: Props) => {
  return (
    <ul className="images-grid relative mx-auto grid grid-cols-12 grid-rows-3 items-end gap-4">
      {images.slice(0, 6).map(({ image, alt }) => (
        <li key={alt}>
          <Image
            key={alt}
            src={image}
            alt={alt}
            className="rounded-lg"
            width={300}
            height={200}
          />
        </li>
      ))}
    </ul>
  );
};
