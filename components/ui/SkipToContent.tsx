import { motion } from 'framer-motion';
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
        href={`#${id}`}
        className="pointer-events-none absolute top-0 left-0 z-10 rounded-lg border-2 border-projectBg bg-dark py-1 px-2.5 text-left text-sm font-semibold text-grey opacity-0 shadow-md focus:inline-block focus:opacity-100 focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
      >
        {id}
      </motion.a>
      {children}
      <div id={id} className="hidden" />
    </>
  );
};
