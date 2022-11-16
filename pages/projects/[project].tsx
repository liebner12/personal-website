import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { Background } from '../../components/ui';
import { Container } from '../../components/containers';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { getFileBySlugFrontmatter, getFiles } from 'lib';
import { ParsedUrlQuery } from 'querystring';
import { TableOfContents } from 'components/content/TableOfContents';
import readingTime from 'reading-time';
import { MdTimer } from 'react-icons/md';
import { MDXRemote } from 'next-mdx-remote';
import { CustomCode, CustomImage } from 'components/content';

const Project = ({
  frontmatter,
  mdxSource,
  readingTime,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background="projects-bg" />
      <Container>
        <div className="relative w-full pb-40 lg:grid lg:grid-cols-[auto,300px] lg:gap-12">
          <div>
            <div className="mb-6">
              <p className="text-primary">{frontmatter.subtitle}</p>
              <h1 className="text-4xl font-bold text-white">
                {frontmatter.title}
              </h1>
              <p className="mt-2 text-grey">{frontmatter.desc}</p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  className="flex items-center gap-1 text-primary"
                  href={frontmatter.repository}
                >
                  <FaGithub /> Repository
                </a>
                -
                <div className="flex items-center gap-0.5 text-grey">
                  <MdTimer />
                  <span>{readingTime.text}</span>
                </div>
              </div>
            </div>
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              width={1280}
              height={720}
              className="max-w-full rounded-lg"
            />
            <section className="">
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
