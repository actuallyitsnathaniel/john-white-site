const PointOfContact = ({
  fullName,
  email,
  phoneNumber,
}: {
  fullName: string;
  email: string;
  phoneNumber?: string;
}) => {
  return (
    <div className="pb-2">
      <p>{fullName}</p>
      {phoneNumber && <p>{phoneNumber}</p>}
      <p className="md:transition md:duration-75 md:ease-in-out md:hover:scale-110">
        <a className="italic underline font-extrabold" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </div>
  );
};
export default PointOfContact;
