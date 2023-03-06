import { useRouter } from 'next/router';
import { ArrowLink } from './ArrowLink';

export const BackButton = ({
  text = 'Back to overview',
  href,
}: {
  text?: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <div className="mb-12 text-grey-300 lg:col-span-12">
      <ArrowLink
        direction="left"
        isCircle={false}
        onClick={() => (href ? {} : router.back())}
        href={href}
        as={href ? 'link' : 'button'}
      >
        {text}
      </ArrowLink>
    </div>
  );
};
