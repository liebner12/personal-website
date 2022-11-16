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
    <label className="prose prose-invert flex w-full items-center gap-2 rounded-xl bg-darkBlockBg py-1.5 px-3 text-left">
      <span>
        <HiSearch />
      </span>
      <input
        className="w-full bg-transparent text-white focus:outline-none focus-visible:outline-none focus-visible:ring-1"
        placeholder="Search..."
        onChange={handleSearch}
        value={value}
      />
    </label>
  );
};
