import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { BlogWithMeta } from 'types/blogs';
import { ViewCount } from 'lib';
import { BlogFrontmatter } from 'types/frontmatters';

export function useInjectContent(frontmatter: Array<BlogFrontmatter>) {
  const { data } = useSWR<Array<ViewCount>>('/api/views');
  const [populatedContent, setPopulatedContent] = useState<Array<BlogWithMeta>>(
    frontmatter as Array<BlogWithMeta>
  );

  useEffect(() => {
    if (data) {
      const mapped = frontmatter.map((fm) => {
        const views = data.find(({ slug }) => slug === fm.slug)?.count;

        return { ...fm, views };
      });

      setPopulatedContent(mapped);
    }
  }, [data, frontmatter]);

  return populatedContent;
}
