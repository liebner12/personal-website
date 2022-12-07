import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { HiSearch } from 'react-icons/hi';

export const Search = ({
  setSearch,
  value,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
  value: string;
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex w-full items-center gap-2 rounded-xl border-2 border-darkBlockBg bg-blockBg py-4 px-4">
      <label
        className=" focus-visible:ring-2 focus-visible:ring-primary"
        htmlFor="search"
      >
        <span>
          <HiSearch className="h-6 w-6 text-grey" />
        </span>
      </label>
      <input
        className="w-full bg-transparent placeholder:text-grey focus:outline-none focus-visible:outline-none focus-visible:ring-0"
        placeholder="Search..."
        onChange={handleSearch}
        value={value}
        id="search"
      />
    </div>
  );
};
