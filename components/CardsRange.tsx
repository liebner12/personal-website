import { Card } from './Card';
import { ProjectFrontmatter } from 'types';

export const CardsRange = ({ posts }: { posts: Array<ProjectFrontmatter> }) => {
  return (
    <div className="relative mx-auto w-11/12 max-w-sm md:w-80">
      <div className="h-[26rem] w-full"></div>
      <ul className="cards-range">
        {posts
          .slice(0, 3)
          .map(
            ({
              slug,
              title,
              image,
              blurDataURL,
              tags,
              publishedAt,
              readingTime,
              desc,
            }) => (
              <Card slug={slug} key={slug} endpoint="projects">
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
                <Card.Footer slug={slug} tags={tags} />
              </Card>
            )
          )}
      </ul>
    </div>
  );
};
