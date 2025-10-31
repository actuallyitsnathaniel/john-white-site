import { memo, useMemo } from 'react';

interface SpotifyEmbedProps {
  spotifyUrl?: string;
}

const SpotifyEmbed = memo(({ spotifyUrl }: SpotifyEmbedProps) => {
  const embedStyle = useMemo(() => ({
    borderRadius: "26px",
    padding: "1vh",
  }), []);

  if (!spotifyUrl) return null;

  return (
    <iframe
      className="h-[418px] sm:h-[470px] md:h-[470px] w-72"
      title="John White on Spotify"
      style={embedStyle}
      src={spotifyUrl}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
});

SpotifyEmbed.displayName = 'SpotifyEmbed';

export default SpotifyEmbed;
