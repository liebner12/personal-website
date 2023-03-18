import { motion } from 'framer-motion';
import { MdComment, MdFavorite, MdShare } from 'react-icons/md';
import { Popover } from '@headlessui/react';
import { FADE_IN_X, HOVER_SCALE } from 'data';
import { Button, TableOfContents } from 'components';
import { Tooltip } from 'components/Tooltip';

const HOVER_LARGE_SCALE = {
  whileHover: { scale: 1.25 },
  whileTap: { scale: 0.96 },
  whileFocus: { scale: 1.25 },
};

const REACTIONS_LIST = [
  { name: 'like', icon: '❤️' },
  { name: 'thinking', icon: '🤔' },
  { name: 'cool', icon: '🎉' },
  { name: 'to the moon', icon: '🚀' },
  { name: 'interesting', icon: '👀' },
];

export function SideBar() {
  return (
    <motion.div
      className="relative col-start-2 hidden h-full lg:block"
      {...FADE_IN_X}
    >
      <div className="sticky top-16 z-40 h-screen pb-16">
        <TableOfContents />
        <div className="mt-8 flex flex-row flex-wrap items-start gap-6 gap-y-6 text-xl">
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <Popover.Button
                  as="button"
                  className="focus-state rounded-full border-2 border-grey-800 text-grey-300 hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
                >
                  <motion.div
                    {...HOVER_SCALE}
                    tabIndex={-1}
                    className="rounded-full p-3 hover:bg-grey-800 hover:text-primary-main"
                  >
                    <MdFavorite className="h-6 w-6" />
                  </motion.div>
                </Popover.Button>
                <Popover.Panel className="absolute right-[120%] bottom-1/2 z-50 translate-y-1/2">
                  <motion.div
                    className="flex items-center gap-3 rounded-full border-2 border-grey-800 bg-grey-900 py-4 px-6"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {REACTIONS_LIST.map(({ name, icon }) => (
                      <Tooltip
                        key={name}
                        content={name}
                        size="sm"
                        tabIndex={-1}
                      >
                        <Button
                          as="button"
                          variant="transparent"
                          size="xs"
                          wrapperProps={HOVER_LARGE_SCALE}
                          className="hover:bg-grey-800 focus:bg-grey-800"
                        >
                          <div>
                            <span>{icon}</span>
                            <span className="text-base text-grey-400">0</span>
                          </div>
                        </Button>
                      </Tooltip>
                    ))}
                  </motion.div>
                </Popover.Panel>
              </>
            )}
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
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
              className="hover:bg-grey-800 hover:text-primary-main focus:bg-grey-800 focus:text-primary-main"
            />
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
}
