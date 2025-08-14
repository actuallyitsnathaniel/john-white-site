import { memo, useCallback } from "react";

interface MobileNavButtonProps {
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}

export const MobileNavButton = memo<MobileNavButtonProps>(({
  expanded,
  setExpanded,
}) => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  return (
    <button
      type="button"
      className={`flex flex-col relative z-50 p-2 select-none duration-200 transition-transform ${
        expanded ? "translate-x-2.5" : ""
      }`}
      aria-controls="navbar"
      aria-expanded={expanded}
      aria-label={expanded ? "Close navigation menu" : "Open navigation menu"}
      onClick={handleClick}
    >
      <span
        className={`block w-12 h-1 mb-2.5 bg-white rounded-sm origin-top-left duration-200 transition-transform ${
          expanded ? "rotate-45" : "rotate-0"
        }`}
      />
      <span
        className={`block w-12 h-1 mb-2.5 bg-white rounded-sm origin-center duration-200 transition-all ${
          expanded
            ? "rotate-180 opacity-0 scale-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <span
        className={`block w-12 h-1 mb-2.5 bg-white rounded-sm origin-bottom-left duration-200 transition-transform ${
          expanded ? "-rotate-45 translate-y-[5px]" : "rotate-0 translate-y-0"
        }`}
      />
    </button>
  );
});

MobileNavButton.displayName = 'MobileNavButton';
