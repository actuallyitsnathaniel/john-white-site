import { local_url, GET_options } from "./util";

const getAlbumMetaData = await fetch(
  `${local_url}/api/albums?populate=*`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(error.stack));

export const mapAlbums = getAlbumMetaData.map((album) => {
  album = album.attributes; // dig into response data
  const coverURL = album.cover.data.attributes.url;

  // console.log(album);

  return { album, coverURL };
});
