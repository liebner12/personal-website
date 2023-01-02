import { Button } from './Button';

export const SkipToContent = ({
  children,
  id,
}: {
  children: JSX.Element[] | JSX.Element;
  id: string;
}) => {
  return (
    <>
      <Button
        href={`#${id}`}
        className="h-0 w-0 overflow-hidden opacity-0 focus:block focus:h-auto focus:w-auto focus:overflow-auto focus:opacity-100"
        containerClassName="absolute top-2 left-2 -z-10 focus-within:z-40"
      >
        {id}
      </Button>
      {children}
      <div id={id} className="hidden" />
    </>
  );
};
