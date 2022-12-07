import { Search } from './Search';
import { SortList } from './SortList';
import { motion } from 'framer-motion';
import { TagsList } from './TagsList';
import { BLOG_SORT_LIST, FADE_IN_SECOND, FADE_IN_X } from 'data';
import { Dispatch, SetStateAction } from 'react';
import { TagsType } from 'lib';
import { checkTagged } from 'utils';

type SearchContainerType = {
  sortBy?: string;
  setSortBy?: Dispatch<SetStateAction<string>>;
  tags: TagsType;
  toggleTag: (item: string) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
};

export const SearchContainer = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
  tags,
  toggleTag,
}: SearchContainerType) => {
  return (
    <motion.div
      {...FADE_IN_X}
      className="top-16 mb-auto block w-full flex-shrink-0 flex-col rounded-xl text-white lg:col-span-12 lg:flex xl:sticky xl:col-span-3 xl:col-start-10 xl:row-span-2"
    >
      <div className="flex flex-col gap-3 md:flex-row xl:flex-col">
        <Search value={search} setSearch={setSearch} />
        {setSortBy && sortBy && (
          <div className="flex items-center justify-between">
            <SortList
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortByList={BLOG_SORT_LIST}
            />
          </div>
        )}
      </div>
      <p className="mt-8 mb-6 text-lg font-semibold">Search blog by topics</p>
      <div className="mb-6 flex flex-col gap-4">
        <TagsList
          tags={tags}
          onClick={toggleTag}
          checkTagged={(tag) => checkTagged(tags, tag, search)}
        />
      </div>
    </motion.div>
  );
};
