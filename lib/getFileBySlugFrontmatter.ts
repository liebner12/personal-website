import { serialize } from 'next-mdx-remote/serialize';
import { ContentType, PickFrontmatter } from 'types/frontmatters';
import { getFileBySlug } from './getFile';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function getFileBySlugFrontmatter(
  type: ContentType,
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

  return {
    frontmatter:
      mdxSource.frontmatter as unknown as PickFrontmatter<ContentType>,
    mdxSource,
  };
}
