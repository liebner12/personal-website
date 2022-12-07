import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { Background, PostHeader } from 'components/ui';
import { Container } from 'components/containers';
import { getFileBySlugFrontmatter, getFiles } from 'lib';
import { ParsedUrlQuery } from 'querystring';
import { TableOfContents } from 'components/content/TableOfContents';
import readingTime from 'reading-time';
import { PostBody } from 'components/ui/PostBody';
import Seo from 'components/Seo';

const Project = ({
  frontmatter: { title, desc, subtitle, repository, image, url, blurDataURL },
  mdxSource,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Seo templateTitle={title} description={desc} />
      <Background background="projects-bg" />
      <Container>
        <div className="relative w-full pb-40 lg:grid lg:grid-cols-[auto,300px] lg:gap-12">
          <div>
            <PostHeader
              endpoint="projects"
              title={title}
              desc={desc}
              url={url}
              readingTime={readingTime}
              repository={repository}
              subtitle={subtitle}
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
  const files = getFiles('projects');

  const paths = files.map((filename) => ({
    params: {
      project: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface StaticParams extends ParsedUrlQuery {
  project: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { project } = context.params as StaticParams;
  const { frontmatter, mdxSource } = await getFileBySlugFrontmatter(
    'projects',
    project as string
  );

  return {
    props: {
      frontmatter,
      slug: project,
      mdxSource,
      readingTime: readingTime(mdxSource.compiledSource),
    },
  };
};

export default Project;
