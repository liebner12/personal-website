import { motion } from 'framer-motion';
import { Card } from './Card';
import { ProjectFrontmatter } from 'types';
import { FADE_IN_VIEW } from 'data';

export const CardsRange = ({ posts }: { posts: Array<ProjectFrontmatter> }) => {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm md:w-64"
      {...FADE_IN_VIEW}
    >
      <div className="relative h-[26rem] w-80">
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
    </motion.div>
  );
};
