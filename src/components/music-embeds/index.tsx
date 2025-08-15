import { memo, lazy, Suspense, useEffect, useState } from "react";
import { getMusicEmbedsData } from "../../api/getHomeData";

// Lazy load music embed components
const SpotifyEmbed = lazy(() => import("./spotify"));
const AppleMusicEmbed = lazy(() => import("./apple-music"));
const YoutubePlaylistEmbed = lazy(() => import("./youtube"));

const MusicEmbedFallback = () => (
  <div className="w-16 h-16 bg-gray-700 rounded-xl animate-pulse" />
);

type MusicEmbedUrls = {
  SpotifyEmbed: string | null;
  AppleMusicEmbed: string | null;
  YoutubeEmbed: string | null;
};

export const MusicLinks = memo(() => {
  const [embedUrls, setEmbedUrls] = useState<MusicEmbedUrls | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmbedData = async () => {
      try {
        const data = await getMusicEmbedsData();
        if (data) {
          setEmbedUrls(data);
        }
      } catch (error) {
        console.error("Error fetching music embeds:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmbedData();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-[150%] md:text-4xl font-semibold px-3 h-max">
        <div className="p-6 text-center">Loading...</div>
        <div className="flex flex-wrap justify-center drop-shadow-xl gap-3">
          <MusicEmbedFallback />
          <MusicEmbedFallback />
          <MusicEmbedFallback />
        </div>
      </div>
    );
  }

  if (!embedUrls) {
    return (
      <div className="text-white text-[150%] md:text-4xl font-semibold px-3 h-max">
        <div className="p-6 text-center">No embeds available</div>
      </div>
    );
  }

  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold px-3 h-max">
      <div className="flex flex-wrap justify-center drop-shadow-xl gap-3">
        {embedUrls.SpotifyEmbed && (
          <Suspense fallback={<MusicEmbedFallback />}>
            <SpotifyEmbed spotifyUrl={embedUrls.SpotifyEmbed} />
          </Suspense>
        )}
        {embedUrls.AppleMusicEmbed && (
          <Suspense fallback={<MusicEmbedFallback />}>
            <AppleMusicEmbed appleMusicUrl={embedUrls.AppleMusicEmbed} />
          </Suspense>
        )}
        {embedUrls.YoutubeEmbed && (
          <Suspense fallback={<MusicEmbedFallback />}>
            <YoutubePlaylistEmbed youtubeUrl={embedUrls.YoutubeEmbed} />
          </Suspense>
        )}
      </div>
    </div>
  );
});

MusicLinks.displayName = "MusicLinks";
