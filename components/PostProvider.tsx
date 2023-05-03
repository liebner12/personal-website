import {
  ReactNode,
  createContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import useSWR from 'swr';
import { ReactionsKeys, REACTIONS_LIST } from 'data';
import { Reaction } from 'lib';

export type PostContext = {
  isLoading?: boolean;
  views?: number;
  reactions?: Record<ReactionsKeys, Reaction>;
  setReactions?: (reactions: Record<ReactionsKeys, Reaction>) => void;
};

export const PostContext = createContext<PostContext>({});

export const PostProvider = ({
  children,
  slug,
}: {
  children: ReactNode;
  slug: string;
}) => {
  const { data, isLoading } = useSWR(`/api/posts/${slug}`);
  const [reactions, setReactions] = useState(
    Object.keys(REACTIONS_LIST).reduce(
      (prev, key) => ({
        ...prev,
        [key]: { count: 0, hasBeenSelected: false },
      }),
      {}
    ) as Record<ReactionsKeys, Reaction>
  );

  useEffect(() => {
    if (isLoading) return;

    const reactionsSelections = localStorage.getItem(slug);
    const formatReactions = (
      _reactionsSelections: Record<string, boolean> = {}
    ) => {
      return Object.entries(data?.post?.reactions || REACTIONS_LIST).reduce(
        (prev, [key, value]) => ({
          ...prev,
          [key]: {
            count: typeof value === 'number' ? value : 0,
            hasBeenSelected: _reactionsSelections[key] || false,
          },
        }),
        {}
      ) as Record<ReactionsKeys, Reaction>;
    };

    if (reactionsSelections) {
      const parsedSelections = JSON.parse(reactionsSelections) || {};

      setReactions(formatReactions(parsedSelections));
      return;
    }

    setReactions(formatReactions());
  }, [slug, data?.post?.reactions, isLoading]);

  const selectReactionsProperty = useCallback(
    (selector: keyof Reaction) => {
      return Object.entries(reactions).reduce(
        (prev, [key, value]) => ({ ...prev, [key]: value[selector] }),
        {}
      );
    },
    [reactions]
  );

  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleReactions = useCallback(
    (reactions: Record<ReactionsKeys, Reaction>) => {
      setReactions(reactions);

      const reactionsSelection = selectReactionsProperty('hasBeenSelected');
      localStorage.setItem(slug, JSON.stringify(reactionsSelection));

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        const reactionsCount = selectReactionsProperty('count');
        fetch(`/api/posts/${slug}`, {
          method: 'PUT',
          body: JSON.stringify(reactionsCount),
        });
      }, 3000);
    },
    [slug, selectReactionsProperty]
  );

  return (
    <PostContext.Provider
      value={useMemo(
        () => ({
          isLoading,
          views: data?.post?.count,
          reactions,
          setReactions: handleReactions,
        }),
        [isLoading, reactions, data?.post?.count, handleReactions]
      )}
    >
      {children}
    </PostContext.Provider>
  );
};
