import Head from 'next/head';
import {
  Header,
  Container,
  Background,
  ProjectTile,
  List,
  SearchContainer,
} from 'components';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BACKGROUNDS } from 'data';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import { sortByDate } from 'utils';
import { useSelectedPosts } from 'hooks';
import { getTechnologies } from 'lib';

const Projects = ({
  projects,
  technologies,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { filteredPosts, search, setSearch, toggleTag } = useSelectedPosts(
    projects,
    'projects'
  );

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="My projects :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background={BACKGROUNDS.projects} />
      <Container isGrid>
        <Header
          title="Projects"
          desc="Showcase of my works on frontend development."
        />
        <SearchContainer
          toggleTag={toggleTag}
          tags={technologies}
          search={search}
          setSearch={setSearch}
        />
        <List isEmpty={filteredPosts.length === 0}>
          {filteredPosts.map((project) => (
            <ProjectTile project={project} key={project.slug} />
          ))}
        </List>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllFilesFrontmatter('projects');

  return {
    props: {
      technologies: getTechnologies(files),
      projects: files.sort(sortByDate),
    },
  };
};

export default Projects;
