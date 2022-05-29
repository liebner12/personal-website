import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Container from '../../components/containers/container';
import ProjectsLayout from '../../components/layouts/projects';
import Background from '../../components/units/background';
import Header from '../../components/containers/header';
import { ProjectsType } from '../../utils/types/projects';
import { serialize } from 'next-mdx-remote/serialize';

const Projects = ({ projects }: ProjectsType) => {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My projects :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background="projectsBg" />
      <Container>
        <Header
          title="Projects"
          desc="Showcase of my works on frontend development."
        />
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join('data/projects', './'),
    'utf-8'
  );

  const mdxSource = await serialize(markdownWithMeta, {
    parseFrontmatter: true,
  });

  return {
    props: {
      mdxSource,
    },
  };
};

export default Projects;
