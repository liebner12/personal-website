import { serialize } from 'next-mdx-remote/serialize';
import { ContentType, PickFrontmatter } from 'types/frontmatters';
import { getFileBySlug } from './getFile';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { getPlaiceholder } from 'plaiceholder';

export async function getFileBySlugFrontmatter<T extends ContentType>(
  type: T,
  slug: string
) {
  const markdown = getFileBySlug(type, slug);

  const mdxSource = await serialize(markdown, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor'],
            },
          },
        ],
      ],
    },
  });

  const { base64 } = await getPlaiceholder(
    (mdxSource.frontmatter as unknown as PickFrontmatter<T>).image,
    { size: 10 }
  );

  return {
    frontmatter: {
      ...mdxSource.frontmatter,
      blurDataURL: base64,
    } as unknown as PickFrontmatter<T>,
    mdxSource,
  };
}
