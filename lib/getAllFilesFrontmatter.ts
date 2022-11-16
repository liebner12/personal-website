import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import { ContentType, PickFrontmatter } from 'types/frontmatters';
import { getFileByName } from './getFile';
import { getFiles } from './getFiles';

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = getFiles(type);
  const formatFiles = files.map(async (filename) => {
    const markdown = getFileByName(type, filename);

    const { frontmatter, compiledSource } = await serialize(markdown, {
      parseFrontmatter: true,
    });

    return {
      ...(frontmatter as unknown as PickFrontmatter<T>),
      slug: filename.replace('.mdx', ''),
      readingTime: readingTime(compiledSource),
    };
  });

  const formattedFiles = await Promise.all(formatFiles);

  return formattedFiles;
}
