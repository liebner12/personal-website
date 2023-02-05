import type { NextApiRequest, NextApiResponse } from 'next';
import { currentlyPlayingSong } from 'lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const { is_playing, item } = await response.json();

  if (item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const title = item.name;
  const artist = item.artists.map((_artist: any) => _artist.name).join(', ');
  const albumImageUrl = item.album.images[0].url;
  const songUrl = item.external_urls.spotify;

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    title,
    artist,
    albumImageUrl,
    songUrl,
    isPlaying: is_playing,
  });
}
