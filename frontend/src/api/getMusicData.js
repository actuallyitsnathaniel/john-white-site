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
  const coverHash = album.cover.data.attributes.hash; // get hash from response data
  const coverURL = `http://localhost:1337/uploads/${coverHash}.jpeg`; // append hash to a URL

  // console.log(album);
  // console.log(coverHash);

  return { album, coverURL };
});
