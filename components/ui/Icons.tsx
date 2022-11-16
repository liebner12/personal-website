import {
  SiGatsby,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AnimatePresence } from 'framer-motion';
import { Tooltip } from './Tooltip';

export type IconsList = keyof typeof iconsList;

export type IconsProps = {
  icons: Array<IconsList>;
  className: string;
  technologyClassName?: string;
} & React.ComponentPropsWithoutRef<'ul'>;

export const Icons = ({
  className,
  icons,
  technologyClassName,
}: IconsProps) => {
  return (
    <ul className={className}>
      {icons.map((icon) => {
        if (!iconsList[icon]) return;

        const current = iconsList[icon];

        return (
          <AnimatePresence key={current.name}>
            <Tooltip content={current.name}>
              <li className="text-gray-700 dark:text-gray-200 text-xl">
                <current.icon className={technologyClassName} />
              </li>
            </Tooltip>
          </AnimatePresence>
        );
      })}
    </ul>
  );
};

const iconsList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  gatsby: {
    icon: SiGatsby,
    name: 'Gatsby',
  },
  typescript: {
    icon: SiTypescript,
    name: 'Typescript',
  },
  supabase: {
    icon: SiSupabase,
    name: 'Supabase',
  },
};
