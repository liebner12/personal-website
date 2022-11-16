import { Blog } from 'types/blogs';

export type TagsType = Array<string>;

export const getTags = (blogs: Array<Blog>) => {
  const allTags = blogs.flatMap((blog) => blog.tags);

  return allTags.filter((item, index, self) => self.indexOf(item) == index);
};
