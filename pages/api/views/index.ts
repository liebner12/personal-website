import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllViews, ViewCount } from 'lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ViewCount>>
): Promise<void> {
  const views = await getAllViews();
  return res.status(200).json(views);
}
