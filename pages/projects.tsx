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
import { getAllFilesFrontmatter, getTags } from 'lib';
import { checkTagged, sortByDate } from 'utils';
import { useInjectContent, usePushView, useSelectedPosts } from 'hooks';

const description = 'My personal journey as a frontend developer.';

const Projects = ({
  projects,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(projects);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'projects');
  usePushView('projects');

  return (
    <>
      <Seo templateTitle="Projects" description={description} />
      <Background />
      <Container isGrid>
        <Header title="Projects" desc={description} />
        <SearchContainer
          toggleTag={toggleTag}
          tags={tags}
          search={search}
          setSearch={setSearch}
          sortBy={sortBy}
          setSortBy={setSortBy}
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
