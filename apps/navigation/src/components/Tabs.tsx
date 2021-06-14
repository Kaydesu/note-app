import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

enum TabName {
  TODO = "TODO_LIST",
  CONTACT = "CONTACT",
}

function Tabs() {
  const [currentTab, setCurrentTab] = useState<string>(TabName.TODO);
  const [markerPosition, setMarkerPosition] = useState<number>(0);
  const markerRef = useRef<HTMLDivElement>(null);

  const isActive = (tabName: string): boolean => {
    return tabName === currentTab;
  };

  useEffect(() => {
    setMarkerPosition(
      currentTab === TabName.TODO ? 0 : markerRef.current.clientWidth
    );
  }, [currentTab]);

  return (
    <div className="navigation-tabs">
      <div
        onClick={() => setCurrentTab(TabName.TODO)}
        className={`navigation-tabs__tabpane ${
          isActive(TabName.TODO) ? "navigation-tabs__tabpane--active" : ""
        }`}
      >
        <Link to="/">Todo List</Link>
      </div>
      <div
        onClick={() => setCurrentTab(TabName.CONTACT)}
        className={`navigation-tabs__tabpane ${
          isActive(TabName.CONTACT) ? "navigation-tabs__tabpane--active" : ""
        }`}
      >
        <Link to="/contact">Contact</Link>
      </div>
      <div
        ref={markerRef}
        style={{ left: markerPosition }}
        className="tab-marker"
      ></div>
    </div>
  );
}

export default Tabs;
