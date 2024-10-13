const ShowLink = (props) => {
  return (
    <a href={props.link} className="text-center p-3">
      <div className="sm:mb-20 md:mb-10">
        <span>
          <p className="text-xl font-semibold">{props.artists}</p>
          <p className="font-semibold">{props.date}</p>
          <p className="p-0 m-0 text-xl">{props.venue}</p>
          <p className="p-0 m-0 text-xl">{props.venueAddress}</p>
        </span>

        <img
          className="py-4 object-scale-down transition max-w-[375px] duration-75 px-4 hover:-translate-y-1 hover:scale-115"
          src={props.thumbnail}
          alt={props.alt}
        />
        <p className="border rounded-lg p-2 font-semibold text-4xl max-w-36 mx-auto bg-gray-700">
          {props.price}
        </p>
      </div>
    </a>
  );
};
export default ShowLink;
