import {
  SiGatsby,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { AnimatePresence } from 'framer-motion';
import { Tooltip } from './Tooltip';

export type IconsList = keyof typeof iconsList;

export type IconsProps = {
  icons: Array<IconsList>;
  className?: string;
  technologyClassName?: string;
  size?: 'lg' | 'md' | 'sm';
} & React.ComponentPropsWithoutRef<'ul'>;

export const Icons = ({
  className,
  icons,
  technologyClassName,
  size = 'md',
}: IconsProps) => {
  const getSize = () => {
    switch (size) {
      case 'lg': {
        return 'h-8 w-8';
      }
      case 'sm': {
        return 'h-4 w-4';
      }
      default: {
        return 'h-6 w-6';
      }
    }
  };

  return (
    <ul className={`${className} flex list-none flex-wrap gap-4 pl-0`}>
      {icons.map((icon) => {
        if (!iconsList[icon]) return;

        const current = iconsList[icon];

        return (
          <AnimatePresence key={current.name}>
            <Tooltip content={current.name}>
              <current.icon
                className={`${getSize()} ${technologyClassName} hover:text-primary`}
              />
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
  styledcomponents: {
    icon: SiStyledcomponents,
    name: 'styled components',
  },
};
