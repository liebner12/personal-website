import { motion } from 'framer-motion';
import { MdComment, MdShare } from 'react-icons/md';
import { useState } from 'react';
import { BiLink } from 'react-icons/bi';
import { FADE_IN_X, REACTIONS_LIST } from 'data';
import { Button, Popover, Dialog, TableOfContents } from 'components';
import { Tooltip } from 'components/Tooltip';

const HOVER_LARGE_SCALE = {
  whileHover: { scale: 1.25 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.25 },
};

export function SideBar() {
  const [isToggleActive, setIsToggleActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative col-start-2 hidden h-full lg:block"
      {...FADE_IN_X}
    >
      <div className="sticky top-16 z-40 h-screen pb-16">
        <TableOfContents />
        <div className="mt-8 flex flex-row flex-wrap items-start gap-6 gap-y-6 text-xl">
          <Popover isHovered={isHovered} setIsHovered={setIsHovered}>
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
          </Popover>
          <Tooltip content="Comments" tabIndex={-1} size="sm">
            <Button
              variant="secondary"
              StartIcon={MdComment}
              size="circle"
              href="#comments"
              className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
            />
          </Tooltip>
          <Tooltip content="Share" tabIndex={-1} size="sm">
            <Button
              variant="secondary"
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
        </div>
      </div>
    </motion.div>
  );
}
