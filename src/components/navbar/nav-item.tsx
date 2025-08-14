import { memo, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  pageTitle: string;
  label: string;
  to: string;
  setExpanded: (value: boolean) => void;
}

export const NavItem = memo<NavItemProps>(({
  pageTitle,
  label,
  to,
  setExpanded,
}) => {
  const handleClick = useCallback(() => {
    setExpanded(false);
  }, [setExpanded]);

  const isActive = useMemo(() => pageTitle === label, [pageTitle, label]);

  const linkClassName = useMemo(() => 
    `transition ease-in-out py-4 px-10 duration-150 hover:scale-110 hover:text-yellow-200 hover:underline underline-offset-4 ${
      isActive ? "ease-in hidden md:block text-yellow-100 md:scale-110 underline" : ""
    }`, [isActive]
  );

  return (
    <Link
      className={linkClassName}
      to={to}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
});

NavItem.displayName = 'NavItem';
