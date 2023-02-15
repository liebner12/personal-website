import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import readingTime from 'reading-time';
import useSWR from 'swr';
import { getFileBySlugFrontmatter, getFiles, getPaths } from 'lib';
import {
  TableOfContents,
  PostBody,
  Seo,
  Background,
  PostHeader,
  Container,
  PostFooter,
} from 'components';
import { StaticParams } from 'types';
import { usePushView } from 'hooks';

const Project = ({
  slug,
  frontmatter: {
    title,
    desc,
    repository,
    image,
    url,
    blurDataURL,
    publishedAt,
  },
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
        <div className="relative w-full lg:grid lg:grid-cols-[auto,300px] lg:gap-12">
          <div>
            <PostHeader
              title={title}
              desc={desc}
              url={url}
              readingTime={readingTime}
              repository={repository}
              publishedAt={publishedAt}
              views={data?.views}
            />
            <PostBody
              mdxSource={mdxSource}
              image={image}
              blurDataURL={blurDataURL}
            />
            <PostFooter title={title} />
          </div>
          <TableOfContents />
        </div>
      </Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getFiles('projects');
  const paths = getPaths(files);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { post } = context.params as StaticParams;
  const { frontmatter, mdxSource } = await getFileBySlugFrontmatter(
    'projects',
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

export default Project;
