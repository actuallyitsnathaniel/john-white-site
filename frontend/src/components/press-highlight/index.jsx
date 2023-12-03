export const PressHighlight = (props) => {
  return (
    <>
      <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
        <a className="font-extrabold p-5 text-2xl" href={props.href}>
          {props.title}
        </a>
      </div>
      <p className="text-lg">{props.desc}</p>
      <br />
    </>
  );
};
