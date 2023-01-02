import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';
import { Button } from './Button';
import { FADE_IN_X } from 'data';

export const ContactButton = ({
  Icon,
  text,
  link,
  showedLink,
}: {
  Icon: IconType;
  text: string;
  link: string;
  showedLink: string;
}) => {
  return (
    <motion.li {...FADE_IN_X}>
      <Button
        href={link}
        target="_blank"
        size="xl"
        variant="secondary"
        className="flex flex-col items-center gap-4 bg-grey-900 text-center sm:flex-row sm:gap-6 sm:text-left"
      >
        <Icon className="h-12 w-12 flex-shrink-0 text-primary-main md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <div>
          <h2 className="mb-1 text-2xl font-bold text-white">{text}</h2>
          <p className="break-all text-lg text-grey-300">{showedLink}</p>
        </div>
      </Button>
    </motion.li>
  );
};
