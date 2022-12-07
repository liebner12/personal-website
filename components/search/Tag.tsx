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
      className="rounded-full border-2 border-darkBlockBg bg-blockBg text-center"
      whileTap={{ scale: 0.98 }}
      whileFocus={{ scale: 1.03 }}
      whileHover={{ scale: 1.03 }}
    >
      <button
        className={`tap-highlight prose prose-invert relative w-full rounded-full py-2.5 px-6 text-center ring-primary ring-offset-primary ${
          checkTagged(name)
            ? 'text-primary ring-0 ring-offset-2'
            : ' text-white ring-0 ring-offset-0'
        }`}
        type="button"
        onClick={onClick}
      >
        {name}
      </button>
    </motion.li>
  );
};
