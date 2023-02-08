import Image from 'next/image';
import { motion } from 'framer-motion';
import { FADE_IN_VIEW } from 'data';

type Props = {
  images: Array<{ image: string; alt: string }>;
};

export const ImagesGrid = ({ images }: Props) => {
  return (
    <motion.ul
      className="images-grid relative mx-auto grid grid-cols-12 grid-rows-3 items-end gap-4"
      {...FADE_IN_VIEW}
    >
      {images.slice(0, 6).map(({ image, alt }) => (
        <li key={alt}>
          <Image
            quality={30}
            key={alt}
            src={image}
            alt={alt}
            className="rounded-lg"
            width={300}
            height={200}
          />
        </li>
      ))}
    </motion.ul>
  );
};
