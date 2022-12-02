import { motion } from 'framer-motion';

export const Tag = ({
  name,
  onClick,
  checkTagged,
}: {
  name: string;
  onClick: () => void;
  checkTagged: (tag: string) => boolean;
}) => {
  return (
    <motion.li
      className="flex-1 rounded-full bg-darkBlockBg text-center"
      whileTap={{ scale: 0.98 }}
      whileFocus={{ scale: 1.03 }}
      whileHover={{ scale: 1.03 }}
    >
      <button
        className={`tap-highlight prose prose-invert relative rounded-full py-1.5 px-4 text-center text-sm ${
          checkTagged(name)
            ? 'border-primary text-primary ring-1 ring-opacity-75 ring-offset-2 ring-offset-primary'
            : ' text-grey'
        } w-full focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary`}
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </motion.li>
  );
};
