import { motion } from 'framer-motion';
import { MdComment, MdShare } from 'react-icons/md';
import { RiHeartAddFill } from 'react-icons/ri';
import { useState } from 'react';
import { BiLink } from 'react-icons/bi';
import { FADE_IN_X, REACTIONS_LIST } from 'data';
import {
  Button,
  ButtonProps,
  DesktopPopover,
  Dialog,
  MobilePopover,
  TableOfContents,
} from 'components';
import { Tooltip } from 'components/Tooltip';

const HOVER_LARGE_SCALE = {
  whileHover: { scale: 1.25 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.25 },
};

const SocialButtons = ({
  variant = 'filled',
}: Pick<ButtonProps, 'variant'>) => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <>
      <Tooltip content="Comments" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdComment}
          size="circle"
          href="#comments"
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <Tooltip content="Share" tabIndex={-1} size="sm">
        <Button
          variant={variant}
          StartIcon={MdShare}
          size="circle"
          as="button"
          onClick={() => {
            setIsToggleActive(true);
            navigator.clipboard.writeText(window.location.href);
          }}
          className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
        />
      </Tooltip>
      <Dialog isVisible={isToggleActive} setIsVisible={setIsToggleActive}>
        Copied to clipboard <BiLink className="h-6 w-6" />
      </Dialog>
    </>
  );
};

export type Reactions = { onClick: () => void };

const Reactions = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      {REACTIONS_LIST.map(({ name, icon }) => (
        <Tooltip key={name} content={name} size="sm" tabIndex={-1}>
          <Button
            as="button"
            variant="transparent"
            size="xs"
            wrapperProps={HOVER_LARGE_SCALE}
            className="hover:bg-grey-800 focus:bg-grey-800"
            onClick={onClick}
          >
            <div className="flex flex-col justify-center">
              <span>{icon}</span>
              <span className="text-base text-slate-200">0</span>
            </div>
          </Button>
        </Tooltip>
      ))}
    </>
  );
};

const MobileShortcuts = () => {
  return (
    <>
      <MobilePopover Icon={RiHeartAddFill} Reactions={Reactions} />
      <SocialButtons variant="transparent" />
    </>
  );
};

const Shortcuts = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <DesktopPopover
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        button={
          <DesktopPopover.Button variant="filled" StartIcon={RiHeartAddFill} />
        }
      >
        {REACTIONS_LIST.map(({ name, icon }) => (
          <Tooltip key={name} content={name} size="sm" tabIndex={-1}>
            <Button
              as="button"
              variant="transparent"
              size="xs"
              wrapperProps={HOVER_LARGE_SCALE}
              className="hover:bg-grey-800 focus:bg-grey-800"
              onClick={() => setIsHovered(false)}
            >
              <div>
                <span>{icon}</span>
                <span className="text-base text-grey-400">0</span>
              </div>
            </Button>
          </Tooltip>
        ))}
      </DesktopPopover>
      <SocialButtons />
    </>
  );
};

export function ShortcutsBar() {
  return (
    <>
      <div className="sticky top-16 z-40 hidden h-screen pb-16 lg:block">
        <motion.div
          className="col-start-2 hidden h-full lg:block"
          {...FADE_IN_X}
        >
          <TableOfContents />
          <div className="mt-6 flex w-full gap-6">
            <Shortcuts />
          </div>
        </motion.div>
      </div>
      <div className="fixed bottom-0 left-0 z-20 flex w-full justify-around border-t-2 border-grey-500 bg-backgroundOpacity py-1 backdrop-blur lg:hidden">
        <MobileShortcuts />
      </div>
    </>
  );
}
