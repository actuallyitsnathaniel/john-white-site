import { prod_url, GET_options } from "./util";

const getFooterData = await fetch(`${prod_url}/api/footer`, GET_options)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(error.stack));

export const footerData = getFooterData.attributes;
