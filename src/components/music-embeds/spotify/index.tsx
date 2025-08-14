import { memo, useMemo } from 'react';

const SPOTIFY_ALBUM_ID = '6sQQYK5eWrPxxgCIvL5iVL';

const SpotifyEmbed = memo(() => {
  const spotifyUrl = useMemo(() => 
    `https://open.spotify.com/embed/album/${SPOTIFY_ALBUM_ID}?utm_source=generator&theme=0`, 
    []
  );

  const embedStyle = useMemo(() => ({
    borderRadius: "26px",
    padding: "1vh",
  }), []);

  return (
    <iframe
      className="h-[418px] sm:h-[470px] md:h-[470px] w-72"
      title="John White - 42 EP on Spotify"
      style={embedStyle}
      src={spotifyUrl}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
});

SpotifyEmbed.displayName = 'SpotifyEmbed';

export default SpotifyEmbed;
