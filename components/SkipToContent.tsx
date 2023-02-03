import { motion } from 'framer-motion';
import { HOVER_SCALE } from 'data';
export const SkipToContent = ({
  children,
  id,
}: {
  children: JSX.Element[] | JSX.Element;
  id: string;
}) => {
  return (
    <>
      <motion.a
        {...HOVER_SCALE}
        href={`#${id}`}
        className="focus-state focus absolute top-2 left-2 -z-10 h-0 w-0 rounded-full bg-primary-main px-6 py-2 font-bold text-grey-900 opacity-0 focus-within:z-40 focus:block focus:h-auto focus:w-auto focus:overflow-auto focus:opacity-100"
      >
        {id}
      </motion.a>
      {children}
      <div id={id} className="hidden" />
    </>
  );
};
