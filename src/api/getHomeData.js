import { local_url, GET_options } from "./util";

export const getMusicEmbedsData = await fetch(
  `${local_url}/api/music-embedded-id`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data.attributes)
  .catch((error) => console.log(error.stack));

export const getYoutubeID = await fetch(
  `${local_url}/api/youtube-music-video-url`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data)
  .then((data) => data.attributes.YoutubeID)
  .catch((error) => console.log(error.stack));
