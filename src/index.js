import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.js";
import "./custom.scss";

//adding horizontal scrolling
document.addEventListener("wheel", (e) => {
  document.querySelector(".container").scrollLeft += e.deltaY;
});

//rendering the page
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
