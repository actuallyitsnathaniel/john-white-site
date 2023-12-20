import { local_url, GET_options } from "./util";

export const getVideoBGs = await fetch(
  `${local_url}/api/video-bg?populate=*`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => {
    const mp4 = data.data.attributes.mp4.data.attributes.url;
    const webm = data.data.attributes.webm.data.attributes.url;
    return { mp4, webm };
  })
  .catch((error) => console.log(error.stack));
