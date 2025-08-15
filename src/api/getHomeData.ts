import { prod_url, GET_options } from "./util";

function extractSrcFromIframe(iframeHtml: string): string | null {
  if (!iframeHtml || typeof iframeHtml !== "string") {
    return null;
  }

  const srcMatch = iframeHtml.match(/src=["']([^"']+)["']/i);
  return srcMatch ? srcMatch[1] : null;
}

function extractYouTubeId(url: string): string | null {
  if (!url || typeof url !== "string") {
    return null;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
    /youtube\.com\/.*[?&]v=([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export const getHomeData = async () =>
  await fetch(`${prod_url}/api/home?populate=*`, GET_options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Raw API response:", data);
      return data.data;
    })
    .catch((error) => {
      console.error("Error in getHomeData:", error);
      return null;
    });

export const getMusicEmbedsData = async () => {
  const homeData = await getHomeData();
  
  if (!homeData || !homeData.MusicEmbeds) {
    return null;
  }

  const musicEmbeds = homeData.MusicEmbeds;
  
  const result = {
    SpotifyEmbed: extractSrcFromIframe(musicEmbeds.SpotifyEmbed),
    AppleMusicEmbed: extractSrcFromIframe(musicEmbeds.AppleMusicEmbed),
    YoutubeEmbed: extractSrcFromIframe(musicEmbeds.YoutubeEmbed),
  };

  return result;
};

export const getYoutubeVideoURL = async () => {
  const homeData = await getHomeData();
  return homeData?.YoutubeVideoURL || null;
};

export const getYoutubeVideoID = async () => {
  const homeData = await getHomeData();
  if (!homeData?.YoutubeVideoURL) {
    return null;
  }
  return extractYouTubeId(homeData.YoutubeVideoURL);
};

export const getHeaderTitle = async () => {
  const homeData = await getHomeData();
  return homeData?.HeaderTitle || null;
};
