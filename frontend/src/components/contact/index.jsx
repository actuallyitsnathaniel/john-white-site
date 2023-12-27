export const Contact = ({ name, email }) => {
  return (
    <div className="pb-2">
      <p>{name}</p>
      <p className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
        <a className="italic underline font-extrabold" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </div>
  );
};
