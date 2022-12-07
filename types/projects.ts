import { IconsList } from 'components';
import { ProjectFrontmatter } from './frontmatters';

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  desc: string;
  tags: Array<IconsList>;
  publishedAt: string;
  lastUpdated?: string;
  repository: string;
  url?: string;
};

export type ProjectWithMeta = ProjectFrontmatter;
