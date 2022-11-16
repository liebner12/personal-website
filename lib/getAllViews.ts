import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export type ViewCount = { slug: string; count: number };

export const getAllViews = async (): Promise<Array<ViewCount>> => {
  const { data: views, error } = await supabase
    .from('views')
    .select('slug,count');

  console.log(error);

  if (!views) {
    return [];
  }

  return views;
};
