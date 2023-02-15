import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { FADE_IN_SECOND } from 'data';
import {
  CustomCode,
  CustomImage,
  GridCols,
  Icons,
  CloudinaryImage,
} from 'components';

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
          width={900}
          height={506}
          className="max-w-full rounded-lg"
        />
      </motion.div>
      <motion.section {...FADE_IN_SECOND}>
        <article className="mdx prose prose-invert mx-auto my-4 w-full pb-16">
          <MDXRemote
            {...mdxSource}
            components={{
              CustomImage,
              CloudinaryImage,
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
