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
      {...FADE_IN_SECOND}
      className="top-16 mb-auto block w-full flex-shrink-0 flex-col rounded-xl bg-blockBg p-4 text-grey lg:col-span-12 lg:flex xl:sticky xl:col-span-3 xl:col-start-10 xl:row-span-2"
    >
      <motion.div
        {...FADE_IN_X}
        className="flex flex-col gap-3 md:flex-row xl:flex-col"
      >
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
      </motion.div>
      <hr className="mx-4 my-4 h-[1px] rounded-xl border-0 bg-blockBg" />
      <motion.div className="flex flex-col gap-2" {...FADE_IN_X}>
        <TagsList
          tags={tags}
          onClick={toggleTag}
          checkTagged={(tag) => checkTagged(tags, tag, search)}
        />
      </motion.div>
    </motion.div>
  );
};
