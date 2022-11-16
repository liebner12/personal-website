import { FADE_IN_X } from 'data';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons/lib';

export const ContactBlog = ({
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
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        whileFocus={{ scale: 1.02 }}
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-6 rounded-xl bg-blockBg py-6 px-6 md:gap-4 md:py-8"
      >
        <Icon className="h-12 w-12 flex-shrink-0 md:h-10 md:w-10 lg:h-12 lg:w-12" />
        <motion.div
          className="prose prose-invert"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: 0.4,
          }}
        >
          <h3 className="mb-1 text-2xl font-bold text-white">{text}</h3>
          <p className="break-all text-grey">{showedLink}</p>
        </motion.div>
      </motion.a>
    </motion.li>
  );
};
