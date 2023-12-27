import { local_url, GET_options } from "./util";

const getPressHighlights = await fetch(
  `${local_url}/api/press-highlights?populate=*`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(error.stack));

export const PressHighlightEntries = getPressHighlights.map((entry) => {
  entry = entry.attributes;

  return { entry };
});

const getContacts = await fetch(
  `${local_url}/api/contacts?populate=*`,
  GET_options
)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => console.log(error.stack));

export const Contacts = getContacts.map((entry) => {
  entry = entry.attributes;

  return { entry };
});
