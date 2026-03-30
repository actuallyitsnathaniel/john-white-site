import { prod_url, GET_options } from "./util";

export const getMusicPage = async () =>
  await fetch(
    `${prod_url}/api/music?populate=discography.CoverArt`, // CoverArt + all scalar fields (incl. Lyrics) via populate
    GET_options
  )
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error.stack));
