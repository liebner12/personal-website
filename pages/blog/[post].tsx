import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import useSWR from 'swr';
import readingTime from 'reading-time';
import { getFileBySlugFrontmatter, getFiles, getPaths } from 'lib';
import {
  PostHeader,
  PostBody,
  Seo,
  Container,
  Background,
  TableOfContents,
  PostFooter,
} from 'components';
import { StaticParams } from 'types';
import { usePushView } from 'hooks';

const Blog = ({
  frontmatter: { title, desc, image, blurDataURL, publishedAt },
  slug,
  mdxSource,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useSWR(`/api/views/${slug}`);
  usePushView(slug);

  return (
    <>
      <Seo templateTitle={title} description={desc} />
      <Background />
      <Container>
        <div className="relative w-full xl:grid xl:grid-cols-[auto,300px] xl:gap-12">
          <div>
            <PostHeader
              title={title}
              desc={desc}
              readingTime={readingTime}
              publishedAt={publishedAt}
              views={data?.views}
              image={image}
              blurDataURL={blurDataURL}
            />
            <PostBody mdxSource={mdxSource} />
            <PostFooter title={title} type="blog" />
          </div>
          <TableOfContents />
        </div>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles('blog');
  const paths = getPaths(files);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = context.params as StaticParams;
  const { frontmatter, mdxSource } = await getFileBySlugFrontmatter(
    'blog',
    post
  );

  return {
    props: {
      frontmatter,
      slug: post,
      mdxSource,
      readingTime: readingTime(mdxSource.compiledSource),
    },
  };
};

export default Blog;
