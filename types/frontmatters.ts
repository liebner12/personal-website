import { ReadTimeResults } from 'reading-time';
import { Blog, BlogWithMeta } from './blogs';
import { Project, ProjectWithMeta } from './projects';

export type ContentType = 'blog' | 'projects';

export type PickFrontmatterByObject<
  T extends Array<ProjectWithMeta | BlogWithMeta>
> = T extends BlogWithMeta ? BlogFrontmatter : ProjectFrontmatter;

export type BlogFrontmatter = Blog & {
  slug: string;
  readingTime: ReadTimeResults;
  views?: number;
};

export type ProjectFrontmatter = Project & {
  slug: string;
};

export type InjectedViews = { views?: number };

export type PostMeta = ProjectWithMeta | BlogWithMeta;

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : ProjectFrontmatter;
