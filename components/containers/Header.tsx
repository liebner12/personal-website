import { FADE_IN_FIRST } from 'data';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  desc: string | null;
};

export const Header = ({ title, desc }: Props) => {
  return (
    <motion.header {...FADE_IN_FIRST} className="col-span-1 lg:col-span-8">
      <div className="prose prose-invert">
        <h1 className="mb-0 font-bold text-primary">{title}</h1>
        <p className="mt-2">{desc}</p>
      </div>
    </motion.header>
  );
};
