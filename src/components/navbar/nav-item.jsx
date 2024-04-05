import { Link } from "react-router-dom";

export const NavItem = (props) => {
  return (
    <Link
      className={`transition ease-in-out py-4 px-10 duration-150 hover:scale-110 hover:text-yellow-200 hover:underline underline-offset-4 ${
        props.pageTitle == props.label &&
        "ease-in hidden md:block text-yellow-100 md:scale-110 underline"
      }`}
      to={props.to}
      onClick={() => {
        props.setExpanded && props.setExpanded(false);
      }}
    >
      {props.label}
    </Link>
  );
};
