import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { FADE_IN_SECOND } from 'data';
import { CustomCode, CustomImage, GridCols, Icons } from 'components';

export function PostBody({
  image,
  mdxSource,
  blurDataURL,
}: {
  image: string;
  mdxSource: MDXRemoteSerializeResult;
  blurDataURL: string;
}) {
  return (
    <>
      <motion.div {...FADE_IN_SECOND}>
        <Image
          placeholder="blur"
          blurDataURL={blurDataURL}
          src={image}
          alt="prop"
          width={1280}
          height={720}
          className="max-w-full rounded-lg"
        />
      </motion.div>
      <motion.section {...FADE_IN_SECOND}>
        <article className="mdx prose prose-invert mx-auto mt-4 w-full">
          <MDXRemote
            {...mdxSource}
            components={{
              CustomImage,
              Icons,
              code: (props) => <CustomCode {...props} />,
              GridCols,
            }}
          />
        </article>
      </motion.section>
    </>
  );
}
