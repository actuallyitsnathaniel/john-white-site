export const PressHighlight = ({ href, title, desc }) => {
  return (
    <>
      <div className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
        <a className="font-extrabold p-5 text-2xl" href={href}>
          {title}
        </a>
      </div>
      <p className="text-lg">{desc}</p>
      <br />
    </>
  );
};
