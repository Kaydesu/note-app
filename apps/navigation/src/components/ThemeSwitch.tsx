import React from "react";

interface ThemeSwitchProps {
  onClick(): void;
}

const ThemeSwitch = ({ onClick }: ThemeSwitchProps) => {
  return (
    <div className="theme-switch" onClick={onClick}>
      <svg
        width="76"
        height="37"
        viewBox="0 0 76 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 19H54M18.5 34H57.5C66.0604 34 73 27.0604 73 18.5C73 9.93959 66.0604 3 57.5 3H18.5C9.93959 3 3 9.93959 3 18.5C3 27.0604 9.93959 34 18.5 34Z"
          stroke="currentColor"
          stroke-width="6"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default ThemeSwitch;
