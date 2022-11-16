import { BLOG_SORT_LIST } from 'data';
import { useEffect, useState } from 'react';
import { ContentType, PickFrontmatter } from 'types/frontmatters';
import { sortByDate } from 'utils';

const sortPosts = <T extends ContentType>(
  sortBy: string,
  results: Array<PickFrontmatter<T>>
) => {
  switch (sortBy) {
    case 'views':
      return results.sort(
        (a: any, b: any) => (b?.views ?? 0) - (a?.views ?? 0)
      );
    default:
      return results.sort(sortByDate);
  }
};

export const useSelectedPosts = <T extends ContentType>(
  posts: Array<PickFrontmatter<T>>,
  type?: T
) => {
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState(BLOG_SORT_LIST[0]);
  const [filteredPosts, setFilteredPosts] =
    useState<Array<PickFrontmatter<T>>>(posts);

  useEffect(() => {
    const results = posts.filter((post) => {
      const formattedSearch = search.toLowerCase();
      return (
        post.title.toLowerCase().includes(formattedSearch) ||
        post.desc.toLowerCase().includes(formattedSearch) ||
        formattedSearch.split(' ').every((tag) => {
          if ('technologies' in post) {
            return post.technologies
              .join(' ')
              .toLowerCase()
              .includes(tag.toLowerCase());
          }

          return post.tags.join(' ').toLowerCase().includes(tag.toLowerCase());
        })
      );
    });

    const sortedPosts = sortPosts(sortBy, results);

    setFilteredPosts(sortedPosts);
  }, [search, sortBy, posts, type]);

  const toggleTag = (tag: string) => {
    if (search.includes(tag)) {
      setSearch((search) =>
        search
          .split(' ')
          .filter((word) => word !== tag)
          ?.join(' ')
      );

      return;
    }

    setSearch((search) => (search !== '' ? `${search.trim()} ${tag}` : tag));
  };

  return { search, setSearch, filteredPosts, sortBy, setSortBy, toggleTag };
};
