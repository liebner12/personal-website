import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Header,
  Container,
  Background,
  List,
  SearchContainer,
  Card,
  Seo,
} from 'components';
import { BACKGROUNDS } from 'data';
import { getAllFilesFrontmatter, getTags } from 'lib';
import { checkTagged, sortByDate } from 'utils';
import { useSelectedPosts } from 'hooks';

const Projects = ({
  projects,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { filteredPosts, search, setSearch, toggleTag } = useSelectedPosts(
    projects,
    'projects'
  );

  return (
    <>
      <Seo templateTitle="Projects" description="" />
      <Background background={BACKGROUNDS.projects} />
      <Container isGrid>
        <Header
          title="Projects"
          desc="Showcase of my works on Javascript/Typescript development."
        />
        <SearchContainer
          toggleTag={toggleTag}
          tags={tags}
          search={search}
          setSearch={setSearch}
        />
        <List isEmpty={filteredPosts.length === 0}>
          {filteredPosts.map(
            ({
              slug,
              title,
              image,
              blurDataURL,
              publishedAt,
              readingTime,
              desc,
              tags,
            }) => (
              <Card endpoint="projects" slug={slug} key={slug}>
                <Card.Image
                  title={title}
                  image={image}
                  blurDataURL={blurDataURL}
                />
                <Card.Date
                  publishedAt={publishedAt}
                  readingTime={readingTime}
                />
                <Card.Text title={title} desc={desc} />
                <Card.Footer
                  slug={slug}
                  tags={tags}
                  checkTagged={(tag) => checkTagged(tags, tag, search)}
                />
              </Card>
            )
          )}
        </List>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = await getAllFilesFrontmatter('projects');

  return {
    props: {
      tags: getTags(files),
      projects: files.sort(sortByDate),
    },
  };
};

export default Projects;
