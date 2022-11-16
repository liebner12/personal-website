import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { Background } from 'components/ui/Background';
import { Container } from 'components/containers/Container';
import Image from 'next/image';
import { MdRemoveRedEye, MdTimer } from 'react-icons/md';
import useSWR from 'swr';
import { useEffect } from 'react';
import { getFileBySlugFrontmatter, getFiles } from 'lib';
import { ParsedUrlQuery } from 'querystring';
import { TableOfContents } from 'components/content/TableOfContents';
import readingTime from 'reading-time';
import { MDXRemote } from 'next-mdx-remote';
import { CustomCode, CustomImage } from 'components/content';

const Blog = ({
  frontmatter,
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
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background="blog-bg" />
      <Container>
        <div className="relative w-full xl:grid xl:grid-cols-[auto,300px] xl:gap-12">
          <div>
            <div className="mb-6">
              <p className="text-primary">{frontmatter.subtitle}</p>
              <h1 className="text-4xl font-bold text-white">
                {frontmatter.title}
              </h1>
              <p className="mt-2 text-grey">{frontmatter.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-1 text-primary">
                  <MdRemoveRedEye /> {data?.views} views
                </div>
                -
                <div className="flex items-center gap-0.5 text-grey">
                  <MdTimer />
                  <span>{readingTime.text}</span>
                </div>
              </div>
            </div>
            <Image
              src={frontmatter.image}
              alt="prop"
              width={1280}
              height={720}
              className="max-w-full rounded-lg"
            />
            <section>
              <article className="mdx prose prose-invert mx-auto mt-4 w-full">
                <MDXRemote
                  {...mdxSource}
                  components={{
                    CustomImage,
                    code: (props) => <CustomCode {...props} />,
                  }}
                />
              </article>
            </section>
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
