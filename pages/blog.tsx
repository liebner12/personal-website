import Head from 'next/head';
import { Background, BlogTile } from 'components/ui';
import { Header, Container, List } from 'components/containers';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BACKGROUNDS } from 'data';
import { SearchContainer } from 'components/search';
import { getTags } from 'lib';
import useInjectContent from 'hooks/useInjectContent';
import { useSelectedPosts } from 'hooks';
import { checkTagged, sortByDate } from 'utils';
import { getAllFilesFrontmatter } from 'lib/getAllFilesFrontmatter';

const Blog = ({
  blogs,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const populatedPosts = useInjectContent(blogs);
  const { filteredPosts, search, setSearch, sortBy, setSortBy, toggleTag } =
    useSelectedPosts(populatedPosts, 'blog');

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="My Blog :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background background={BACKGROUNDS.blog} />
      <Container isGrid>
        <Header
          title="Blog"
          desc="Thoughts, mental models, and tutorials about front-end development."
        />
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
