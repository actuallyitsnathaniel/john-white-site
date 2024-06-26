import ShowLink from "../../components/show-link";
import writersBlockHotelCafe from "../../assets/images/thumbnails/hotelcafe_writersblock.jpeg";

const Shows = () => {
  return (
    <main className="flex flex-wrap h-screen font-semibold md:mt-16 text-center px-3 text-white justify-center text-3xl">
      <div className="md:p-3 lowercase">
        <ShowLink
          link="https://new.hotelcafe.com/event/writers-block-147/"
          // artists="john white"
          date="nov 14th"
          venue="hotel café"
          thumbnail={writersBlockHotelCafe}
          alt="hotel café writer's block nov 14th"
        />
      </div>
    </main>
  );
};

export default Shows;
