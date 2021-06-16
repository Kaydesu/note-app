import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter() {
    return document.getElementById("app");
  },
});

export const { bootstrap, mount, unmount } = lifecycles;