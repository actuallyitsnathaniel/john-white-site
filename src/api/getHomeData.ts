import { prod_url, GET_options } from "./util";

function extractSrcFromIframe(iframeHtml: string): string | null {
  const srcMatch = iframeHtml.match(/src=["']([^"']+)["']/);
  return srcMatch ? srcMatch[1] : null;
}

export const getMusicEmbedsData = await fetch(
  `${prod_url}/api/music-embedded-id`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => {
    const attributes = data.data.attributes;
    return {
      SpotifyEmbed: extractSrcFromIframe(attributes.SpotifyEmbed),
      AppleMusicEmbed: extractSrcFromIframe(attributes.AppleMusicEmbed),
      YoutubeEmbed: extractSrcFromIframe(attributes.YoutubeEmbed)
    };
  })
  .catch((error) => console.log(error.stack));

export const getYoutubeID = await fetch(
  `${prod_url}/api/youtube-music-video-url`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data)
  .then((data) => data.attributes.YoutubeID)
  .catch((error) => console.log(error.stack));
