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
import { BACKGROUNDS } from 'data';
import { getTags, getAllFilesFrontmatter } from 'lib';
import { useSelectedPosts, useInjectContent } from 'hooks';
import { checkTagged, sortByDate } from 'utils';

const description =
  'Learn development with great articles. Find the latest of my writing here.';

const Blog = ({
  blogs,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(blogs);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'blog');

  return (
    <>
      <Seo templateTitle="Blog" description={description} />
      <Background background={BACKGROUNDS.blog} />
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
        <List isEmpty={filteredPosts.length === 0}>
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
              <Card slug={slug} key={slug}>
                <Card.Image
                  title={title}
                  image={image}
                  blurDataURL={blurDataURL}
                  overlay={
                    <Card.Overlay
                      slug={slug}
                      tags={tags}
                      checkTagged={(tag) => checkTagged(tags, tag, search)}
                    />
                  }
                />
                <Card.Date
                  publishedAt={publishedAt}
                  readingTime={readingTime}
                />
                <Card.Text title={title} desc={desc} />
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
