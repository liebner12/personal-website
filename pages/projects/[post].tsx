import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import readingTime from 'reading-time';
import { useEffect } from 'react';
import { getFileBySlugFrontmatter, getFiles, getPaths } from 'lib';
import {
  PostBody,
  Seo,
  PostHeader,
  Container,
  PostFooter,
  ShortcutsBar,
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
  usePushView(slug);
  useEffect(() => {
    // Define an async function to fetch data
    async function fetchData() {
      // Use fetch API to make a GET request to the API route
      const response = await fetch(`/api/github/discussions`);
      // Parse the response as JSON
      const data = await response.json();
      // Set the data to the state variable
      console.log(data);
    }

    // Call the async function
    fetchData();
  }, [title]);

  return (
    <>
      <Seo templateTitle={title} description={desc} image={image} />
      <div>
        <Container className="!pb-0">
          <div
            className="relative lg:grid lg:gap-16"
            style={{
              gridTemplateColumns: 'minmax(0, 3fr) minmax(225px, 1fr)',
            }}
          >
            <ShortcutsBar />
            <div className="col-start-1 row-start-1">
              <PostHeader
                title={title}
                slug={slug}
                url={url}
                readingTime={readingTime}
                repository={repository}
                publishedAt={publishedAt}
                image={image}
                blurDataURL={blurDataURL}
                href="/projects"
              />
              <PostBody mdxSource={mdxSource} />
            </div>
          </div>
        </Container>
        <PostFooter title={title} type="projects" />
      </div>
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
