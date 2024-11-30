import { prod_url, GET_options } from "./util";

export const getAboutPage = async () =>
  await fetch(`${prod_url}/api/about?populate=AboutPhotos.photos`, GET_options)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log(error.stack));
