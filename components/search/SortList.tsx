import { Dispatch, Fragment, SetStateAction } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  IoMdArrowDropdown,
  IoMdCalendar,
  IoMdCheckmark,
  IoMdEye,
} from 'react-icons/io';
import { motion } from 'framer-motion';

const MotionButton = motion(Listbox.Button);

type SortListType = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  sortByList: Array<string>;
};

export const SortList = ({ sortBy, setSortBy, sortByList }: SortListType) => {
  return (
    <div className="h-full w-full min-w-[12rem]">
      <Listbox value={sortBy} onChange={setSortBy}>
        <div className="relative h-full">
          <MotionButton
            whileTap={{ scale: 0.99 }}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ scale: 1.02 }}
            className="tap-highlight relative h-full w-full rounded-xl bg-darkBlockBg py-1.5 pl-3 pr-10 text-left focus:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-grey focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm"
          >
            <span className="flex h-7 items-center gap-2 truncate">
              {sortBy === 'date' ? (
                <IoMdCalendar className="text-gray-400 h-4 w-4" />
              ) : (
                <IoMdEye className="text-gray-400 h-4 w-4" />
              )}
              Sort by {sortBy}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <IoMdArrowDropdown
                className="text-gray-400 h-4 w-4"
                aria-hidden="true"
              />
            </span>
          </MotionButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-blockBg py-1 shadow-xl ring-1 ring-black ring-opacity-5 backdrop-blur-lg focus:outline-none sm:text-sm">
              {sortByList.map((sortItem, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active && 'bg-primaryDark'
                    }`
                  }
                  value={sortItem}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected && 'text-primary'
                        }`}
                      >
                        Sort by {sortItem}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                          <IoMdCheckmark
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
