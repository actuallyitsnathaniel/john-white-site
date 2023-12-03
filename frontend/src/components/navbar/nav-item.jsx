import { Link } from "react-router-dom";

export const NavItem = (props) => {
  return (
    <Link
      className={`nav-item ${
        props.pageTitle == props.label && "nav-item-active"
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
