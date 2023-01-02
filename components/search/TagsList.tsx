import { Tag } from './Tag';
import { SkipToContent } from 'components';
import { TagsType } from 'lib';

export const TagsList = ({
  tags,
  onClick,
  checkTagged,
}: {
  tags: TagsType;
  onClick: (item: string) => void;
  checkTagged: (tag: string) => boolean;
}) => {
  return (
    <ul className="relative flex flex-wrap gap-4 gap-y-4">
      <SkipToContent id="Skip tags">
        {tags.map((item) => (
          <Tag
            key={item}
            name={item}
            onClick={() => onClick(item)}
            checkTagged={checkTagged}
          />
        ))}
      </SkipToContent>
    </ul>
  );
};
