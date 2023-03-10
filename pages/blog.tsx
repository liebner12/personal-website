import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Background,
  Seo,
  Header,
  Container,
  List,
  SearchContainer,
  Card,
} from 'components';
import { getTags, getAllFilesFrontmatter } from 'lib';
import { useSelectedPosts, useInjectContent, usePushView } from 'hooks';
import { checkTagged, sortByDate } from 'utils';
import { theme } from 'tailwind.config';

const description = 'My thoughts, implementations in Javascript ecosystem.';

const Blog = ({
  blogs,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(blogs);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'blog');
  usePushView('blog');

  return (
    <>
      <Seo templateTitle="Blog" description={description} />
      <Background />
      <Container isGrid>
        <Header title="Blog" desc={description} />
        <SearchContainer
          toggleTag={toggleTag}
          tags={tags}
          sortBy={sortBy}
          setSortBy={setSortBy}
          search={search}
          setSearch={setSearch}
        />
        <List isEmpty={filteredPosts.length === 0} color={theme.colors.blog}>
          {filteredPosts.map(
            ({
              slug,
              title,
              desc,
              image,
              blurDataURL,
              publishedAt,
              readingTime,
              tags,
            }) => (
              <Card slug={slug} key={slug} layoutId={slug}>
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
  const files = await getAllFilesFrontmatter('blog');

  return {
    props: {
      tags: getTags(files),
      blogs: files.sort(sortByDate),
    },
  };
};

export default Blog;
