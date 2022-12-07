import { IconsList } from 'components';
import { BlogFrontmatter, InjectedViews } from './frontmatters';

export type Blog = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  tags: Array<IconsList>;
  publishedAt: string;
  lastUpdated?: string;
};

export type BlogWithMeta = BlogFrontmatter & InjectedViews;
