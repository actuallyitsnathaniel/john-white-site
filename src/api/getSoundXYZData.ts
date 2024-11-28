import { sound_xyz_url, sound_xyz_key } from "./util";

const query = `
query AllArtistReleases {
    artist(id: "7db1e62a-9773-49fb-83f4-64914c1685f7") {
      id
      user {
        id
      }
      numReleases(filter: {
        releaseAuthor: ALL,
        creditSplit: ALL,
        releaseAlbumRevealStatus: ALL
      })
      releases(pagination: {
        first: 20
      }, filter: {
        releaseAuthor: ALL,
        creditSplit: ALL,
        releaseAlbumRevealStatus: ALL
      }) {
        edges {
          node {
            title
            id
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const getSoundXYZSongs = await fetch(sound_xyz_url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Sound-Client-Key": sound_xyz_key,
  },
  body: JSON.stringify({ query }),
})
  .then((response) => response.json())
  .then((data) => {
    const releases = data.data.artist.releases.edges;
    return releases;
  })
  .catch((error) => console.error("Error:", error));
