import React, { useState, useEffect } from "react";
import "./root.scss";

import { BrowserRouter as Router } from "react-router-dom";

import Tabs from "./components/Tabs";
import Logo from "./assets/logo.svg";
import LogoDark from "./assets/logo-dark.svg";
import ThemeSwitch from "./components/ThemeSwitch";
import { changeTheme } from "./dispatchEvents";

export default function Root() {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("dark-theme")
      ? JSON.parse(localStorage.getItem("dark-theme"))
      : false
  );

  useEffect(() => {
    changeTheme(isDark);
  }, [isDark]);

  return (
    <Router>
      <div
        className={`navigation-root ${isDark ? "navigation-root--dark" : ""}`}
      >
        <div className="navigation__top">
          <img className="app-logo" src={isDark ? LogoDark : Logo} alt="NOTE" />
          <ThemeSwitch
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("dark-theme", JSON.stringify(!isDark));
            }}
          />
        </div>
        <div className="navigation__bottom">
          <Tabs />
        </div>
      </div>
    </Router>
  );
}
