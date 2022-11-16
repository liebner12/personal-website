import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const getViews = async (slug: string): Promise<number> => {
  const { data: views, error } = await supabase
    .from('views')
    .select(`count`)
    .match({ slug: slug })
    .single();

  if (error && error.details?.includes(`0 rows`)) {
    const { error } = await supabase
      .from(`views`)
      .insert({ slug: slug, count: 1 }, { count: `exact` })
      .single();

    console.log(error);
  }

  if (!views) {
    return 0;
  }

  return views.count;
};

export const registerView = async (slug: string): Promise<void> => {
  const { error } = await supabase.rpc('increment_views', {
    page_slug: slug,
  });

  console.log(error);
};
