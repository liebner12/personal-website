import { SkipToContent } from 'components/ui';
import { TagsType } from 'lib';
import { Tag } from './Tag';

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
