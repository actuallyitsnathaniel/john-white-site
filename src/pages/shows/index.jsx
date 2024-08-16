import ShowLink from "../../components/show-link";
import breaking_sound from "../../assets/images/thumbnails/breaking-sound.png";

const Shows = () => {
  return (
    <main className="flex flex-wrap h-screen font-semibold md:mt-16 text-center px-3 text-white justify-center text-3xl">
      <div className="md:p-3 lowercase">
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
