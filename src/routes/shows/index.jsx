import ShowLink from "../../components/show-link";
import breaking_sound from "../../assets/images/thumbnails/breaking-sound.png";
import lucas_flood_showcase from "../../assets/images/thumbnails/lucas-flood-showcase.jpg";
import sonOfMars from "../../assets/images/thumbnails/jw-sons-of-mars-nov.jpg";

const Shows = () => {
  return (
    <main className="flex flex-wrap h-screen font-semibold mt-16 text-center px-3 text-white justify-center text-3xl">
      <div className="md:p-3 lowercase">
        <ShowLink
          link="https://venmo.com/whitenoiserecords?txn=charge&amount=20"
          artists="son of mars | john white | KUYO"
          venue="LOS GLOBOS"
          venueAddress="3040 W Sunset Blvd. Los Angeles, CA 90026"
          thumbnail={sonOfMars}
          date="november 13th, 2024"
          venmoPrice="$20"
          priceText={""}
          alt="the-moroccan-nov-13th"
        />
        <ShowLink
          link="https://new.hotelcafe.com/event/not-another-showcase-19/"
          artists="artist showcase | john white"
          date="sep 24th, 2024"
          venue="hotel cafe, los angeles, ca"
          thumbnail={lucas_flood_showcase}
          alt="hotel-cafe-sep-24th"
        />

        <ShowLink
          link="https://www.tixr.com/groups/breakingsoundla/events/breaking-sound-la-at-adults-only-09-04-112822"
          artists="john white | sam denton | ryland"
          date="sep 4th, 2024"
          venue="adults only, los angeles, ca"
          thumbnail={breaking_sound}
          alt="adults-only-sep-4th"
        />
      </div>
    </main>
  );
};

export default Shows;
