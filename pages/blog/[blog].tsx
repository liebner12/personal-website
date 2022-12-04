import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { Background } from 'components/ui/Background';
import { Container } from 'components/containers/Container';
import useSWR from 'swr';
import { useEffect } from 'react';
import { getFileBySlugFrontmatter, getFiles } from 'lib';
import { ParsedUrlQuery } from 'querystring';
import { TableOfContents } from 'components/content/TableOfContents';
import readingTime from 'reading-time';
import { PostHeader } from 'components';
import { PostBody } from 'components/ui/PostBody';

const Blog = ({
  frontmatter: { title, desc, subtitle, image, blurDataURL },
  blog,
  mdxSource,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data } = useSWR(`/api/views/${blog}`);

  useEffect(() => {
    fetch(`/api/views/${blog}`, {
      method: 'POST',
    });
  }, [blog]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background="blog-bg" />
      <Container>
        <div className="relative w-full xl:grid xl:grid-cols-[auto,300px] xl:gap-12">
          <div>
            <PostHeader
              title={title}
              subtitle={subtitle}
              desc={desc}
              readingTime={readingTime}
              views={data?.views}
            />
            <PostBody
              mdxSource={mdxSource}
              image={image}
              blurDataURL={blurDataURL}
            />
          </div>
          <TableOfContents />
        </div>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles('blog');

  const paths = files.map((filename) => ({
    params: {
      blog: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface StaticParams extends ParsedUrlQuery {
  blog: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { blog } = context.params as StaticParams;
  const { frontmatter, mdxSource } = await getFileBySlugFrontmatter(
    'blog',
    blog as string
  );

  return {
    props: {
      frontmatter,
      slug: blog,
      mdxSource,
      readingTime: readingTime(mdxSource.compiledSource),
    },
  };
};

export default Blog;
