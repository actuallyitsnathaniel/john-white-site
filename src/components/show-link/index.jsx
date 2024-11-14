import venmo from "../../assets/images/icons/venmo.svg";

const ShowLink = (props) => {
  const VenmoLink = (props) => {
    return (
      <div className="border flex flex-row items-center rounded-lg p-2 gap-3 max-w-36 mx-auto bg-gray-700">
        <img className="object-scale-down h-12" src={venmo} />
        <span className="font-semibold text-4xl ">{props.price}</span>
      </div>
    );
  };

  // Get today's date in Los Angeles time zone
  const today = new Date();
  const localDate = new Date(
    today.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const date = `${localDate.getFullYear()}-${String(
    localDate.getMonth() + 1
  ).padStart(2, "0")}-${String(localDate.getDate()).padStart(2, "0")}`;

  // Parse the show date
  const showDateObj = new Date(`${props.date}`.replace(/th|st|rd/g, ""));
  const showLocalDate = new Date(
    showDateObj.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );
  const showDate = `${showLocalDate.getFullYear()}-${String(
    showLocalDate.getMonth() + 1
  ).padStart(2, "0")}-${String(showLocalDate.getDate()).padStart(2, "0")}`;

  console.log(date, showDate);

  return (
    date <= showDate && (
      <a href={props.link} className="text-center p-3">
        <div className="transition duration-100 sm:mb-20 md:mb-10 hover:-translate-y-1 hover:scale-115 object-scale-down">
          <span>
            <p className="text-xl font-semibold">{props.artists}</p>
            <p className="font-semibold">{props.date}</p>
            <p className="p-0 m-0 text-xl">{props.venue}</p>
            <p className="p-0 m-0 text-xl">{props.venueAddress}</p>
          </span>

          <img
            className="p-4 max-w-[375px] max-h-[400px] mx-auto object-scale-down"
            src={props.thumbnail}
            alt={props.alt}
          />
          {props.price && (
            <span className="font-semibold text-4xl ">{props.price}</span>
          )}
          {props.venmoPrice && <VenmoLink price={props.venmoPrice} />}
        </div>
      </a>
    )
  );
};

export default ShowLink;
