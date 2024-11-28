import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export const NavItem = ({
  pageTitle,
  label,
  to,
  setExpanded,
}: {
  pageTitle: string;
  label: string;
  to: string;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Link
      className={`transition ease-in-out py-4 px-10 duration-150 hover:scale-110 hover:text-yellow-200 hover:underline underline-offset-4 ${
        pageTitle == label &&
        "ease-in hidden md:block text-yellow-100 md:scale-110 underline"
      }`}
      to={to}
      onClick={() => setExpanded(false)}
    >
      {label}
    </Link>
  );
};
