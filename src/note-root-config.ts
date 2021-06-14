import { registerApplication, start } from "single-spa";
import "./index.css";

registerApplication({
    name: "@note/navigation",
    app: () =>
      System.import("@note/navigation"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@note/todolist",
    app: () =>
      System.import("@note/todolist"),
    activeWhen: function(location) {
        return location.pathname === "/";
    }
});

registerApplication({
    name: "@note/contact",
    app: () =>
      System.import("@note/contact"),
    activeWhen: "/contact"
});

start({
  urlRerouteOnly: true,
});
