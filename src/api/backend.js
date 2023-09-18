const api_url = "http://localhost:1337";
const getAlbumMetaData = await fetch(`${api_url}/api/albums?populate=*`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(error.stack));

export const getAlbumCovers = async (cover_url) =>
  fetch(`${api_url}/api/${cover_url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error.stack));

export const mapAlbums = getAlbumMetaData.map((album) => {
  album = album.attributes;
  let albumCoverData = album.cover.data.attributes;

  return album;
});
