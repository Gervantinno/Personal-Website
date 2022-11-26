import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./views/App.jsx";
import "./custom.scss";
import { store } from "./reducers/index";

//adding horizontal scrolling
document.addEventListener("wheel", (e) => {
  document.querySelector(".container").scrollBy({
    top: 0,
    left: e.deltaY,
    behavior: "smooth",
  });
});

//rendering the page
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
