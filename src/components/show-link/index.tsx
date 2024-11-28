import venmo from "../../assets/images/icons/venmo.svg";

const ShowLink = ({
  price,
  priceText,
  venmoPrice,
  date,
  link,
  artists,
  venue,
  venueAddress,
  thumbnail,
  alt,
}: {
  price?: string;
  priceText?: string;
  venmoPrice?: string;
  date: string;
  link: string;
  artists: string;
  venue: string;
  venueAddress?: string;
  thumbnail: string;
  alt: string;
}) => {
  const VenmoLink = ({ price }: { price: string }) => {
    return (
      <div className="border flex flex-row items-center rounded-lg p-2 gap-3 max-w-36 mx-auto bg-gray-700">
        <img className="object-scale-down h-12" src={venmo} />
        <span className="font-semibold text-4xl ">{price}</span>
        {priceText && <span className="font-semibold">{priceText}</span>}
      </div>
    );
  };

  // Get today's date in Los Angeles time zone
  const localToday = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const parsedDate = `${new Date(localToday).getFullYear()}-${String(
    new Date(localToday).getMonth() + 1
  ).padStart(2, "0")}-${String(new Date(localToday).getDate()).padStart(
    2,
    "0"
  )}`;

  // Parse the show date
  const showDateObj = new Date(`${parsedDate}`.replace(/th|st|rd/g, ""));
  const showLocalDate = new Date(
    showDateObj.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const showDate = `${showLocalDate.getFullYear()}-${String(
    showLocalDate.getMonth() + 1
  ).padStart(2, "0")}-${String(showLocalDate.getDate()).padStart(2, "0")}`;

  return (
    parsedDate <= showDate && (
      <a href={link} className="text-center p-3">
        <div className="transition duration-100 sm:mb-20 md:mb-10 hover:-translate-y-1 hover:scale-115 object-scale-down">
          <span>
            <p className="text-xl font-semibold">{artists}</p>
            <p className="font-semibold">{parsedDate}</p>
            <p className="p-0 m-0 text-xl">{venue}</p>
            <p className="p-0 m-0 text-xl">{venueAddress}</p>
          </span>

          <img
            className="p-4 max-w-[375px] max-h-[400px] mx-auto object-scale-down"
            src={thumbnail}
            alt={alt}
          />
          {price && <span className="font-semibold text-4xl">{price}</span>}
          {venmoPrice && <VenmoLink price={venmoPrice} />}
        </div>
      </a>
    )
  );
};

export default ShowLink;
