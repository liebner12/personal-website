import { Blog } from 'types/blogs';

export type TagsType = Array<string>;

export const getTags = (post: Array<Blog>) => {
  const allTags = post.flatMap((post) => post.tags);

  return allTags.filter((item, index, self) => self.indexOf(item) == index);
};
