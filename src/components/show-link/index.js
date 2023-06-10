function ShowLink(props) {
  return (
    <a href={props.link} className="text-center p-3">
      <div className="sm:mb-20 md:mb-10">
        <p className="text-xl font-semibold">{props.artists}</p>
        <p className="font-semibold">{props.date}</p>
        <p className="p-0 m-0">{props.venue}</p>
        <img
          className="mx-auto transition duration-75 h-80 my-4 hover:-translate-y-1 hover:scale-115"
          src={props.thumbnail}
          alt={props.alt}
        />
      </div>
    </a>
  );
}
export default ShowLink;
