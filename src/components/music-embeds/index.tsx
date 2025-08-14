import { memo, lazy, Suspense } from "react";

// Lazy load music embed components
const SpotifyEmbed = lazy(() => import("./spotify"));
const AppleMusicEmbed = lazy(() => import("./apple-music"));
const YoutubePlaylistEmbed = lazy(() => import("./youtube"));

const MusicEmbedFallback = () => (
  <div className="w-16 h-16 bg-gray-700 rounded-xl animate-pulse" />
);

export const MusicLinks = memo(() => {
  return (
    <div className="text-white text-[150%] md:text-4xl font-semibold px-3 h-max">
      <div className="p-6 text-center">“Murphy’s Law” (Deluxe), out now</div>
      <div className="flex flex-wrap justify-center drop-shadow-xl gap-3">
        <Suspense fallback={<MusicEmbedFallback />}>
          <SpotifyEmbed />
        </Suspense>
        <Suspense fallback={<MusicEmbedFallback />}>
          <AppleMusicEmbed />
        </Suspense>
        <Suspense fallback={<MusicEmbedFallback />}>
          <YoutubePlaylistEmbed />
        </Suspense>
      </div>
    </div>
  );
});

MusicLinks.displayName = "MusicLinks";
