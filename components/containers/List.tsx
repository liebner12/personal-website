import { FADE_IN_SECOND } from 'data';
import { motion } from 'framer-motion';
import { IoCloseCircleOutline } from 'react-icons/io5';

type ListType = {
  children: JSX.Element[] | JSX.Element;
  isEmpty: boolean;
};

export const List = ({ children, isEmpty }: ListType) => {
  return (
    <>
      <motion.ul
        className="grid w-full gap-6 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3 xl:col-span-9"
        {...FADE_IN_SECOND}
      >
        {children}
        {isEmpty && (
          <motion.div
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-4xl font-bold text-grey sm:col-span-2 lg:col-span-3"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <IoCloseCircleOutline className="h-20 w-20" />
            <h4 className="text-2xl font-bold text-grey">Not found</h4>
          </motion.div>
        )}
      </motion.ul>
    </>
  );
};
