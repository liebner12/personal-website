import { Background, BlogTile } from 'components/ui';
import { Header, Container, List } from 'components/containers';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BACKGROUNDS } from 'data';
import { SearchContainer } from 'components/search';
import { getTags } from 'lib';
import { useSelectedPosts, useInjectContent } from 'hooks';
import { checkTagged, sortByDate } from 'utils';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';
import Seo from 'components/Seo';

const Blog = ({
  blogs,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(blogs);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'blog');

  const description = 'Thoughts about overall development and tutorials.';

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
          {filteredPosts.map((blog) => (
            <BlogTile
              blog={blog}
              key={blog.slug}
              checkTagged={(tag) => checkTagged(tags, tag, search)}
            />
          ))}
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
